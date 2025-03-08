import { api } from "@/api";
import HelmetComponent from "@/components/common/HelmetComponent";
import { CartContext } from "@/context";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PaypalImg from "../assets/images/paypal-logo.png";
import StripeImg from "../assets/images/stripe-logo.png";

const CheckoutPage = () => {
  const { user, loading: userLoading } = useAuth();
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      id: user?.id || "",
    },
  });
  const { cartItems } = useContext(CartContext);
  const { subTotalValue } = useContext(CartContext);
  const totalCartItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const axiosSecure = useAxiosSecure();
  const [shippingCost, setShippingCost] = useState(14.99);
  const totalCost = subTotalValue + parseFloat(shippingCost);

  const { data: checkoutMetadata, isLoading: checkoutMetaLoading } = useQuery({
    queryKey: ["checkoutMetadata"],
    queryFn: async () => {
      const response = await api.get("/seo/page/content?page=checkout");
      return response?.data?.data;
    },
  });
  // country name
  const { data: countryData, isLoading: loading } = useQuery({
    queryKey: ["countrylist"],
    queryFn: async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      return response?.data;
    },
  });

  // get shipping cost dynamically
  const handleShippingCost = async (country) => {
    const loadingToast = toast.loading("Updating shipping price...");
    try {
      const response = await axiosSecure.get(
        `/shipping/get?country=${country}`
      );
      if (response?.status === 200) {
        setShippingCost(response?.data?.data?.price);
        toast.success(`${response?.data?.message}`, { id: loadingToast });
      }
    } catch (error) {
      toast.error(`${error?.response?.data?.message}`, { id: loadingToast });
    }
  };
  // onsubmit
  const onSubmit = async (data) => {
    // paypal
    if (data.paymentOptions === "paypal") {
      // get products with id and quantity
      const products = cartItems.map((item) => {
        return {
          id: item?.id,
          quantity: item?.quantity,
        };
      });

      const loadingToast = toast.loading("Trying to connect with paypal...");

      try {
        const response = await axiosSecure.post(
          "/payment/paypal/create-order",
          {
            redirect: {
              success_url: "https://trekarius.com/payment-success",
              cancel_url: "https://trekarius.com/payment-error",
            },
            products,
            user: {
              id: data?.id,
              name: data?.name,
              email: data?.email,
              address: data?.address,
              country: data?.country,
              number: data?.phone,
            },
          }
        );

        if (response?.status === 201) {
          toast.success(`${response?.data?.message}`, { id: loadingToast });
          const redirectUrl = response?.data?.order?.links[1]?.href;
          window.open(redirectUrl, "_blank");
        }
      } catch (error) {
        toast.error(`${error?.response?.data?.message}`, { id: loadingToast });
      }
    }
    // stripe
    if (data.paymentOptions === "stripe") {
      const loadingToast = toast.loading("Trying to connect with stripe...");
      try {
        // get products with id and quantity
        const products = cartItems.map((item) => {
          return {
            product_id: item?.id,
            quantity: item?.quantity,
          };
        });
        const response = await axiosSecure.post("/stripe/checkout", {
          id: data?.id,
          name: data?.name,
          email: data?.email,
          phone_number: data?.phone,
          address: data?.address,
          country: data?.country,
          products,
          success_redirect_url: "https://trekarius.com/payment-success",
          cancel_redirect_url: "https://trekarius.com/payment-error",
        });
        toast.success(`${response?.data?.message}`, { id: loadingToast });
        window.open(response?.data?.payment_link, "_blank");
      } catch (error) {
        toast.error(`${error?.response?.data?.message}`, { id: loadingToast });
      }
    }
  };

  useEffect(() => {
    if (!userLoading && user) {
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("id", user.id);
      setIsUserLoaded(true);
    }
  }, [user, userLoading, setValue]);

  if (userLoading || !isUserLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <HelmetComponent item={checkoutMetadata} />
      <section className="py-[120px] min-h-screen">
        <div className="container">
          <form
            className="checkout-form flex items-start w-full gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* details  */}
            <div className="bg-white border rounded-[20px] p-10 w-[70%]">
              <div>
                <label htmlFor="name" className="!mt-0">
                  Name
                </label>
                <input
                  type="text"
                  className="checkout-input"
                  placeholder="Enter your name here..."
                  name="name"
                  defaultValue={user?.name}
                  readOnly
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="mt-2 text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="checkout-input"
                  placeholder="Enter your email here..."
                  name="email"
                  id="email"
                  defaultValue={user?.email}
                  readOnly
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="mt-2 text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  className="checkout-input"
                  placeholder="Enter your number here..."
                  name="phone"
                  id="phone"
                  {...register("phone", { required: "Name is required" })}
                />
                {errors.phone && (
                  <p className="mt-2 text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="country">Country</label>
                <select
                  name="country"
                  id="country"
                  {...register("country", { required: "Country is required" })}
                  onChange={(e) => handleShippingCost(e.target.value)}
                >
                  {countryData?.map((country, index) => (
                    <option
                      key={index}
                      value={country?.tld?.[0]?.slice(1).toUpperCase()}
                    >
                      {country?.name?.common}
                    </option>
                  ))}
                </select>
                {errors.phone && (
                  <p className="mt-2 text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="address">Address</label>
                <textarea
                  className="checkout-input"
                  placeholder="Enter your address here..."
                  {...register("address", { required: "Address is required" })}
                ></textarea>
                {errors.address && (
                  <p className="mt-2 text-red-500">{errors.address.message}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  defaultValue={user?.id}
                  name="id"
                  {...register("id")}
                  className="hidden"
                  readOnly
                />
              </div>
            </div>
            {/* payment options  */}
            <div className="bg-white border rounded-[20px] p-10 w-[30%]">
              {/* payment options  */}
              <div className="payments--order-summary">
                <div>
                  <h4 className="text-[18px] font-semibold text-headingColor">
                    Choose your payment option
                  </h4>
                  <div className="flex items-center gap-3">
                    <div className="payment--option mt-5">
                      <input
                        type="radio"
                        id="stripe"
                        defaultValue="stripe"
                        name="paymentOptions"
                        {...register("paymentOptions", {
                          required: "Please select a payment option",
                        })}
                      />
                      <label htmlFor="stripe" className="cursor-pointer">
                        <img src={StripeImg} alt="" />
                      </label>
                    </div>
                    <div className="payment--option mt-5">
                      <input
                        type="radio"
                        id="paypal"
                        defaultValue="paypal"
                        name="paymentOptions"
                        {...register("paymentOptions", {
                          required: "Please select a payment option",
                        })}
                      />
                      <label htmlFor="paypal" className="cursor-pointer">
                        <img src={PaypalImg} alt="" />
                      </label>
                    </div>
                  </div>
                  {errors.paymentOptions && (
                    <p className="mt-2 text-red-500">
                      {errors.paymentOptions.message}
                    </p>
                  )}
                </div>
                {/* order summary  */}
                <div className="checkout-order-summary">
                  <h4 className="text-[18px] font-semibold text-headingColor mt-7">
                    Order summary
                  </h4>
                  <ul>
                    <li className="mt-3">
                      <p>Items Total({totalCartItems})</p>
                      <p>£ {subTotalValue}</p>
                    </li>
                    <li>
                      <p>Shipping cost</p>
                      <p>£ {shippingCost || 0}</p>
                    </li>
                    <li className="border-t mt-2 !pt-4">
                      <p className="font-semibold">Total</p>
                      <p className="font-semibold">£ {totalCost}</p>
                    </li>
                  </ul>
                  <button
                    type="submit"
                    className="w-full bg-primaryOrange border-[2px] border-primaryOrange p-3 text-[18px] text-white font-semibold rounded-[10px] mt-7 duration-200 ease-in-out hover:bg-transparent hover:text-primaryOrange"
                  >
                    Procced to pay
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;

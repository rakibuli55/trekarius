import CartHeader from "@/components/Cart/CartHeader";
import CartList from "@/components/Cart/CartList";
import TotalCart from "@/components/Cart/TotalCart";
import HelmetComponent from "@/components/common/HelmetComponent";
import Container from "@/components/container/Container";
import { CartContext } from "@/context";
import { useContext } from "react";
import EmptyCart from "../assets/images/icons/empty-cart.png";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import WhatsappButton from "@/components/common/WhatsappButton";

function CartPage() {
  const { cartItems } = useContext(CartContext);
  const cartItemsLength = cartItems?.length;

  const {data:CartMetaData, isLoading:metaLoading} = useQuery({
    queryKey:["CartMetaData"],
    queryFn: async () => {
      const response = await api.get('/seo/page/content?page=cart');
      return response?.data?.data;
    }
  })
  return (
    <>
      <HelmetComponent item={CartMetaData} />
      <section className="pt-[120px] custom-xs:pt-[80px] custom-xs:pb-[60px] pb-[100px] min-h-screen">
        <Container>
          <div>
            <div className="p-8 custom-xl:p-5 max-md:p-5 bg-white rounded-[16px] border border-borderColor">
              <div
                className={`p-8 custom-sm:p-4 custom-xs:p-4 custom-xl:p-5 custom-md:p-5 bg-[#F6F6F6] rounded-[16px] border border-borderColor custom-xl:overflow-x-auto custom-lg:overflow-x-auto custom-md:overflow-x-auto ${
                  cartItemsLength === 0
                    ? "custom-lg:overflow-x-hidden custom-md:overflow-x-hidden"
                    : ""
                }`}
              >
                <div
                  className={`${
                    cartItemsLength === 0 ? "!w-full" : ""
                  } custom-xl:w-[1200px] custom-lg:w-[1200px] custom-md:w-[1200px] cart-box relative`}
                >
                  {cartItemsLength > 0 ? (
                    <>
                      <CartHeader />
                      <CartList />
                    </>
                  ) : (
                    <div className="text-center">
                      <img
                        className="w-[200px] custom-xs:w-[160px] mx-auto"
                        src={EmptyCart}
                        alt="EmptyCart"
                      />
                      <p className="text-[24px] custom-xs:text-[18px] my-5 custom-xs:my-2 font-semibold text-primaryBlue">
                        Your cart is empty!
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="w-[460px] custom-sm:w-full custom-xs:w-full mt-[26px]"
                data-aos="zoom-in"
              >
                {/* <PromoCode /> */}
              </div>
              <div className="mt-14" data-aos="fade-up">
                <TotalCart />
              </div>
            </div>
          </div>
          <WhatsappButton />
        </Container>
      </section>
    </>
  );
}

export default CartPage;

import useGetCuponCampain from "@/hooks/useGetCuponCampain";
import useGetDiscountCode from "@/hooks/useGetDiscountCode";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { IoCloseOutline } from "react-icons/io5";
import SpinnerLoader from "./SpinnerLoader";

const DiscountModal = () => {
  const { cuponCodeCampainData, isLoading } = useGetCuponCampain();
  const [modalOpen, setModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate: getDiscountCode, isPending } = useGetDiscountCode();

  useEffect(() => {
    if (!isLoading && cuponCodeCampainData?.data?.code) {
      const timer = setTimeout(() => {
        setModalOpen(true);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isLoading]);

  const onSubmit = (data) => {
    data.coupon_id = cuponCodeCampainData?.data?.id;
    getDiscountCode(data, {
      onSuccess: () => {

        setModalOpen(false);
        toast.success("Successfully send the code in your email.");
      },
      onError: (error) => {
        setModalOpen(false);
        toast.success(error.response.data.message);
      },
    });
  };

  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.5)] z-[50] duration-500 ease-in-out overflow-y-auto ${
        modalOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div
        className={`w-[600px] max-md:w-[90%] max-md:p-5 p-10 bg-white absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-[10px] duration-500 ease-in-out ${
          modalOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <h3 className="text-[26px] font-bold text-center max-md:text-[20px]">
          {cuponCodeCampainData?.data?.title}
        </h3>
        <p className="text-[15px] text-center w-[80%] mx-auto mt-3">
          {cuponCodeCampainData?.data?.description}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            className="w-full p-4 max-md:py-3 border border-borderColor rounded-[6px] mt-5 focus:outline-none text-base font-medium"
            {...register("email", { required: "Please enter your email." })}
          />
          {errors?.email && (
            <p className="text-red-500 mt-2 text-sm">{errors.email.message}</p>
          )}
          <button
            type="submit"
            className="p-4 bg-[#006ed1] w-full text-[18px] font-semibold text-white rounded-[6px] mt-5 duration-200 ease-in-out hover:bg-primaryOrange max-md:py-3 max-md:text-sm"
          >
            {isPending ? <SpinnerLoader className="w-6 h-6" /> : "Get code"}
          </button>
        </form>
        <p
          className="absolute top-5 right-5 text-[20px] cursor-pointer custom-xs:top-3 custom-xs:right-3"
          onClick={() => setModalOpen(false)}
        >
          <IoCloseOutline />
        </p>
      </div>
    </div>
  );
};

export default DiscountModal;

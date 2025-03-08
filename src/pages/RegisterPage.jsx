import { api } from "@/api";
import HelmetComponent from "@/components/common/HelmetComponent";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import AuthImage from "../components/auth/AuthImage";
import Container from "../components/container/Container";

function RegisterPage() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const loadingToast = toast.loading("Try to signing up...");
    try {
      const response = await api.post(`/users/register`, data);
      console.log(response);
      if (response.status === 201) {
        toast.success(`${response?.data?.message}`, { id: loadingToast });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(`${error?.response?.data?.message}`, { id: loadingToast });
    }
  };

  const { data: registerMetaData, isLoading: metaLoading } = useQuery({
    queryKey: ["registerMetaData"],
    queryFn: async () => {
      const response = await api.get("/seo/page/content?page=register");
      return response?.data?.data;
    },
  });

  return (
    <>
      <HelmetComponent item={registerMetaData} />
      <section className="min-h-screen pt-[215px] pb-[140px] custom-md:pb-[80px] custom-xl:pt-[150px] custom-xl:pb-[100px] custom-md:pt-[100px] custom-sm:pt-[100px] custom-xs:pt-[80px] custom-xs:pb-[60px] custom-sm:pb-[60px] max-md:min-h-full overflow-x-hidden">
        <Container>
          <div className="flex max-md:flex-col items-center gap-20 custom-xl:gap-12 custom-lg:gap-8 w-[85%] custom-2xl:w-full custom-xl:w-full max-xl:w-full ml-auto">
            {/* auth box  */}
            <form
              className="auth--box w-[42%] max-md:w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="title custom-xs:!text-[24px]" data-aos="fade-up">
                Let’s Get Started!
              </h1>
              <p
                className="sub-title custom-xs:!mt-1 custom-xs:!mb-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Please Enter your Email Address to Start your Online Application
              </p>
              <div className="flex custom-sm:flex-col custom-xs:flex-col items-center gap-6 custom-xs:gap-4">
                {/* f-name  */}
                <div
                  className="w-1/2 custom-sm:w-full custom-xs:w-full"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Firstname"
                    {...register("first_name", {
                      required: "Firstname is required",
                    })}
                  />
                  {errors.first_name && (
                    <p className="error-message text-red-500 mt-2">
                      {errors.first_name.message}
                    </p>
                  )}
                </div>
                {/* l-name  */}
                <div
                  className="w-1/2 custom-sm:w-full custom-xs:w-full"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Firstname"
                    {...register("last_name", {
                      required: "Lastname is required",
                    })}
                  />
                  {errors.last_name && (
                    <p className="error-message text-red-500 mt-2">
                      {errors.last_name.message}
                    </p>
                  )}
                </div>
              </div>
              {/* email  */}
              <div
                className="mt-6 custom-xs:mt-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <label htmlFor="email">Enter Your Email ID</label>
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="error-message text-red-500 mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* password  */}
              <div
                className="mt-6 custom-xs:mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <label htmlFor="password">Enter Your Password</label>
                <div className="relative">
                  <input
                    type={isPasswordShow ? "text" : "password"}
                    placeholder="Enter Your Password..."
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                      },
                    })}
                  />
                  <p
                    className="absolute top-1/2 translate-y-[-50%] right-6 cursor-pointer"
                    onClick={() => setIsPasswordShow(!isPasswordShow)}
                  >
                    {isPasswordShow ? <FaRegEyeSlash /> : <FaRegEye />}
                  </p>
                </div>
                {errors.password && (
                  <p className="error-message text-red-500 mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {/* password  */}
              <div
                className="mt-6 custom-xs:mt-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <label htmlFor="password_confirmation">
                  Enter Your Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={isConfirmPasswordShow ? "text" : "password"}
                    placeholder="Enter Your Password..."
                    {...register("password_confirmation", {
                      required: "Confirm password is required",
                      validate: (value) =>
                        value === getValues("password") ||
                        "Passwords do not match",
                    })}
                  />
                  <p
                    className="absolute top-1/2 translate-y-[-50%] right-6 cursor-pointer"
                    onClick={() =>
                      setIsConfirmPasswordShow(!isConfirmPasswordShow)
                    }
                  >
                    {isConfirmPasswordShow ? <FaRegEyeSlash /> : <FaRegEye />}
                  </p>
                </div>
                {errors.password_confirmation && (
                  <p className="error-message text-red-500 mt-2">
                    {errors.password_confirmation.message}
                  </p>
                )}
              </div>
              {/* don't have any account  */}
              <div
                className="text-headingColor mt-8 custom-xs:text-sm custom-xs:mt-5"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                By clicking submit, you agree to
                <Link to={"/"} className="font-semibold">
                  Terms of Use, Privacy Policy, E-sign & Communication
                  Authorization.
                </Link>
              </div>
              {/* submity btn  */}
              <button
                type="submit"
                className="py-3 px-6 custom-xs:py-2 custom-xs:text-sm rounded-[50px] bg-primaryOrange text-white font-semibold border-[2px] border-primaryOrange duration-200 ease-in-out hover:bg-transparent hover:text-primaryOrange mt-10 custom-xs:mt-8"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Sign In
              </button>
            </form>
            {/* auth img  */}
            <div className="w-[58%] max-md:hidden" data-aos="fade-left">
              <AuthImage />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default RegisterPage;

import { api } from "@/api";
import { saveToken } from "@/auth/authService";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import AuthImage from "../components/auth/AuthImage";
import Container from "../components/container/Container";
import HelmetComponent from "@/components/common/HelmetComponent";
import { useQuery } from "@tanstack/react-query";

function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const loadingToast = toast.loading("Authenticating...");
    try {
      const response = await api.post(`/users/login`, data);
      if (response.status === 200) {
        saveToken(response?.data?.data?.token);
        setUser(response?.data?.data);
        toast.success(`${response?.data?.message}`, { id: loadingToast });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(`${error?.response?.data?.message}`, { id: loadingToast });
    }
  };

  const {data:loginMetaData, isLoading:metaLoading} = useQuery({
    queryKey:["loginMetaData"],
    queryFn: async () => {
      const response = await api.get('/seo/page/content?page=login');
      return response?.data?.data;
    }
  })

  return (
    <>
      <HelmetComponent item={loginMetaData} />
      <section className="min-h-screen pt-[215px] pb-[140px] custom-md:pb-[80px] custom-xl:pt-[150px] custom-xl:pb-[100px] custom-md:pt-[100px] custom-sm:pt-[100px] custom-xs:pt-[80px] custom-xs:pb-[60px] custom-sm:pb-[60px] max-md:min-h-full overflow-x-hidden">
        <Container>
          <div className="flex max-md:flex-col items-center gap-20 custom-xl:gap-12 custom-lg:gap-8 w-[85%] custom-2xl:w-full custom-xl:w-full max-xl:w-full ml-auto">
            {/* auth box  */}
            <form
              className="auth--box w-[42%] max-md:w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="title custom-xs:!text-[24px]" data-aos="fade-up">
                Welcome Back!
              </h1>
              <p
                className="sub-title custom-xs:!mt-1 custom-xs:!mb-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Sign in to your account and join us
              </p>
              {/* email  */}
              <div data-aos="fade-up" data-aos-delay="100">
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
              {/* email  */}
              <div
                className="mt-6 custom-xs:mt-4"
                data-aos="fade-up"
                data-aos-delay="200"
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
              {/* forgot pass  */}
              <div
                className="text-right mt-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link
                  to={"/verify-email"}
                  className="inline-block text-headingColor"
                >
                  Forget password
                </Link>
              </div>
              {/* don't have any account  */}
              <div
                className="text-headingColor custom-xs:mt-5"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Don’t have an account?{" "}
                <Link to={"/signup"} className="font-semibold">
                  Signup
                </Link>
              </div>
              {/* submity btn  */}
              <button
                type="submit"
                className="py-3 px-6 custom-xs:py-2 custom-xs:px-5 rounded-[50px] bg-primaryOrange text-white font-semibold border-[2px] border-primaryOrange duration-200 ease-in-out hover:bg-transparent hover:text-primaryOrange mt-10 custom-xs:mt-8"
                data-aos="fade-up"
                data-aos-delay="500"
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

export default LoginPage;

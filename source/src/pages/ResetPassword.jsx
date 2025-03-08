import { api } from "@/api";
import Container from "@/components/container/Container";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const emailAddress = localStorage.getItem('otpEmail');

  const onSubmit = async (data) => {
    const loadingToast = toast.loading("Resting Password...");
    try {
      const response = await api.post("/users/login/reset-password", data);
      toast.success(`${response?.data?.message}`, { id: loadingToast });
      navigate('/login')
    } catch (error) {
      toast.error(`${error?.response?.data?.message}`, { id: loadingToast });
      console.log(error);
    }
    console.log(data);
  };

  return (
    <section className="pt-[150px] pb-[120px] min-h-screen">
      <Container>
        <div>
          <form
            className="w-[600px] mx-auto shadow-lg p-10 rounded-[16px] border border-borderColor"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-center text-[28px] font-semibold text-headingColor">
              Reset Password
            </h1>
            {/* email  */}
            <div
              className="mt-6 custom-xs:mt-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <input
              className="auth-input"
                type="email"
                defaultValue={emailAddress}
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
            <div className="mt-8">
                <div className="relative">
                    <input
                    className="auth-input"
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
            {/* confirm password  */}
            <div className="mt-8">
            <div className="relative">
                <input
                className="auth-input"
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
            

            <div>
              <button type="submit" className="auth-btn">
                Reset
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default ResetPassword;

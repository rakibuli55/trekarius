import { api } from "@/api";
import Container from "@/components/container/Container";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const loadingToast = toast.loading("Sending OTP...");
    try {
      const response = await api.post("/users/login/email-verify", data);
      if (response.status === 200) {
        toast.success(`${response?.data?.message}`, { id: loadingToast });
        
        localStorage.setItem('otpEmail', response?.data?.data?.email)
        navigate('/verify-otp')
      }
      console.log(response);
    } catch (error) {
      toast.error(`${error?.response?.data?.message}`, { id: loadingToast });
      console.log(error);
    }
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
              Verify Your Email
            </h1>
            <div className="mt-8">
              <input
                className="auth-input"
                type="email"
                name="email"
                {...register("email")}
                placeholder="Enter your email here..."
              />
            </div>
            <div>
              <button type="submit" className="auth-btn">
                Verify
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default VerifyEmail;

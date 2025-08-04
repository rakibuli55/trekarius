import { api } from "@/api";
import Container from "@/components/container/Container";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function VerifyOtp() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()

  const emailAddress = localStorage.getItem('otpEmail');

  const onSubmit = async (data) => {
    const loadingToast = toast.loading("Verifying OTP...");
    try {
      const response = await api.post("/users/login/otp-verify", data);
      toast.success(`${response?.data?.message}`, { id: loadingToast });
      navigate('/reset-password')
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
              Verify OTP
            </h1>
            <div className="mt-8">
              <input
                className="auth-input"
                type="number"
                name="otp"
                {...register("otp", {required:'Please submit an otp'})}
                placeholder="Enter otp..."
              />
            </div>
            <div className="mt-8 hidden">
              <input
                className="auth-input"
                type="email"
                name="email"
                defaultValue={emailAddress}
                {...register("email")}
                placeholder="Enter otp..."
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

export default VerifyOtp;

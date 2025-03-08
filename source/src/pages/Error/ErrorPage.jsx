
import ErrorImg from "../../assets/images/404 error with a landscape-bro.png"
function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <img className="w-[800px] max-md:w-[90%] mx-auto" src={ErrorImg} alt="ErrorImg" />
        <h1 className="text-[32px] font-semibold text-headingColor mt-14 custom-md:text-[24px] custom-sm:text-[24px] custom-xs:text-[22px] max-md:mt-10">Opps ! Page Not Found</h1>
    </div>
  )
}

export default ErrorPage
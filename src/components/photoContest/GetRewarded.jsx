import { FaArrowLeft } from "react-icons/fa";

function GetRewarded({onPrev, step}) {
  return (
    <div className='relative py-[14px] px-10 bg-primaryOrange text-center'>
       {step > 1 && ( <p className="absolute top-1/2 translate-y-[-50%] left-10 text-[20px] custom-xs:text-base text-white cursor-pointer" onClick={onPrev}><FaArrowLeft /></p>)}
        <p className='text--sm font-bold text-white custom-xs:text-base'>Get Reawarded</p>
    </div>
  )
}

export default GetRewarded
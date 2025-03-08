import { Link } from 'react-router-dom'
import Line from '../../assets/images/line.png'

function PriceCard({icon, price, children}) {
  return (
    <div className='p-8 bg-[#424242] rounded-[32px] custom-xs:rounded-[16px] duration-200 ease-in-out border border-transparent hover:border-primaryOrange max-w-[421px] mt-5 h-full custom-sm:max-w-full'>
        {/* icon  */}
        <div className='flex items-center justify-center w-[92px] h-[92px] max-md:w-[70px] max-md:h-[70px] bg-[#1C1D20] rounded-full'>
            <img className='w-[60px] h-[60px] max-md:w-[50px] max-md:h-[50px]' src={icon} alt="icon" />
        </div>
        {/* price  */}
        <div className='flex items-center gap-[4px] mt-6'>
            <h4 className='text-[56px] max-md:text-[38px] font-semibold text-primaryOrange'>£{price}</h4>
            <span className='text-white font-[18px] mt-5'>/Per month</span>
        </div>
        <p className='divider py-6'>
            <img className='w-full h-[1px]' src={Line} alt="" />
        </p>
        {children}
        <div className='mt-8'>
            <Link to={'/'} className='inline-block py-4 px-8 max-md:py-[10px] max-md:px-5 max-md:text-sm rounded-[40px] bg-primaryOrange text-white text-base font-semibold border border-primaryOrange hover:bg-transparent hover:text-primaryOrange duration-200 ease-in-out'>Enable Plan</Link>
        </div>
    </div>
  )
}

export default PriceCard
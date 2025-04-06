import { FaPaypal } from "react-icons/fa";
import PerksCard from "./PerksSection/PerksCard";
import { MdOutlinePayments } from "react-icons/md";

const payoutsData = [
    {
        id:1,
        title:'Payout methods - PayPal ',
        icon:<FaPaypal />,
    },
    {
        id:2,
        title:'Payout frequency - Monthly ',
        icon:<MdOutlinePayments />,
    },
]

const PayoutsSection = () => {
  return (
    <section className='pt-[50px] pb-[120px] max-md:pt-[30px] max-md:pb-[50px] custom-xs:!pt-0'>
      <div className='w-[80%] mx-auto custom-2xl:w-[90%] custom-xl:w-[90%] max-md:w-[92%]'>
        <div>
            <h3 className="title-common mb-[60px] custom-xs:mb-[30px]">The Payouts</h3>
        </div>
        <div className='grid grid-cols-3 gap-7 custom-md:grid-cols-2 custom-sm:grid-cols-1 custom-xs:grid-cols-1 max-md:gap-4'>
            {
                payoutsData?.map((item) => (
                    <PerksCard key={item?.id} item={item} />
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default PayoutsSection;
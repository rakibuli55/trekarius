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
    <section className='pt-[50px] pb-[120px]'>
      <div className='w-[80%] mx-auto'>
        <div>
            <h3 className="title-common mb-[60px]">The Payouts</h3>
        </div>
        <div className='grid grid-cols-3 gap-7'>
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
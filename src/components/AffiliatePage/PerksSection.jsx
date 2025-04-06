import { RiDiscountPercentLine } from "react-icons/ri"
import { VscWindow } from "react-icons/vsc";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiOutlineCarryOut } from "react-icons/ai";
import { FiGift } from "react-icons/fi";
import { PiSelectionPlusBold } from "react-icons/pi";
import PerksCard from "./PerksSection/PerksCard";

const perksData = [
    {
        id:1,
        title:'Attractive commission rates reaching as high as 15% on product sales.',
        icon:<RiDiscountPercentLine />,
    },
    {
        id:2,
        title:'30-day tracking window.',
        icon:<VscWindow />,
    },
    {
        id:3,
        title:'High average order value (AOV) over $200.',
        icon:<RiMoneyDollarCircleLine />,
    },
    {
        id:4,
        title:'Innovative carry on approved - durable products: trekarius backpacks are made for convenience and functionality.',
        icon:<AiOutlineCarryOut />,
    },
    {
        id:5,
        title:'Free travel gear: High-performing affiliates are eligible to receive samples of new products to test and share with their audiences.',
        icon:<FiGift />,
    },
    {
        id:6,
        title:'Access to a large selection of banners, text links.',
        icon:<PiSelectionPlusBold />,
    },
]

const PerksSection = () => {
  return (
    <section className='pt-[50px] pb-[120px] max-md:pb-[50px] max-md:pt-5 custom-xs:!pt-0'>
      <div className='w-[80%] mx-auto custom-2xl:w-[90%] custom-xl:w-[90%] max-md:w-[92%] custom-xs:!w-[90%]'>
        <div>
            <h3 className="title-common mb-[60px] max-md:mb-8">The Perks</h3>
        </div>
        <div className='grid grid-cols-3 gap-7 custom-md:grid-cols-2 custom-sm:grid-cols-1 custom-xs:grid-cols-1 max-md:gap-4'>
            {
                perksData?.map((item) => (
                    <PerksCard key={item?.id} item={item} />
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default PerksSection;
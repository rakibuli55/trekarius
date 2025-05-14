
import PerksCard from "./PerksSection/PerksCard";


const PerksSection = ({data}) => {
  return (
    <section className='pt-[50px] pb-[120px] max-md:pb-[50px] max-md:pt-5 custom-xs:!pt-0'>
      <div className='w-[80%] mx-auto custom-2xl:w-[90%] custom-xl:w-[90%] max-md:w-[92%] custom-xs:!w-[90%]'>
        <div>
            <h3 className="title-common mb-[60px] max-md:mb-8">{data?.title}</h3>
        </div>
        <div className='grid grid-cols-3 gap-7 custom-md:grid-cols-2 custom-sm:grid-cols-1 custom-xs:grid-cols-1 max-md:gap-4'>
            {
                data?.options?.map((item) => (
                    <PerksCard key={item?.id} item={item} />
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default PerksSection;
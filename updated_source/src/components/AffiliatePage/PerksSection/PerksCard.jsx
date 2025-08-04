

const PerksCard = ({item}) => {
  return (
    <div className="p-6 bg-[rgba(22,135,199,0.05)] min-h-[140px] rounded-[8px] custom-xs:p-5">
      <p className="h-14 w-14 custom-xs:w-[50px] custom-xs:h-[50px] flex items-center justify-center bg-white rounded-full">
        <img src={`${import.meta.env.VITE_SERVER_URL}/${item?.icon}`} alt="icon-img" />
      </p>
      <p className="text-[18px] font-semibold text-headingColor mt-4 max-md:text-base">{item?.item}</p>
    </div>
  );
};

export default PerksCard;
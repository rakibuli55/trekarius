

const PerksCard = ({item}) => {
  return (
    <div className="p-6 bg-[rgba(22,135,199,0.05)] min-h-[140px] rounded-[8px]">
      <p className="text-[24px] h-14 w-14 flex items-center justify-center bg-white rounded-full">{item?.icon}</p>
      <p className="text-[18px] font-semibold text-headingColor mt-4">{item?.title}</p>
    </div>
  );
};

export default PerksCard;
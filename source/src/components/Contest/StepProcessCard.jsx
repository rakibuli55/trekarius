function StepProcessCard({ line, icon, iconBg, title, description }) {
  return (
    <div className="stepProcessCard relative pt-[50px] h-full">
      <img className="absolute top-0 left-0 custom-sm:w-full custom-xs:w-full" src={line} alt="line-img" data-aos="fade-in" />
      <div
        className="w-20 h-20 custom-md:w-[60px] custom-sm:w-[55px] custom-sm:h-[55px] custom-xs:w-[55px] custom-xs:h-[55px] custom-md:h-[60px] flex items-center justify-center rounded-full mb-7 custom-sm:mb-5 custom-xs:mb-5"
        style={{ backgroundColor: iconBg }}
        data-aos="fade-up"
      >
        <img className="h-10 w-10 custom-md:w-[35px] custom-md:h-[35px] custom-sm:h-[35px] custom-sm:w-[35px]" src={icon} alt="icon" />
      </div>
      <h4 className="text--sm custom-sm:text-[20px] custom-xs:text-[20px] text-headingColor font-bold" data-aos="fade-up" data-aos-delay="100">{title}</h4>
      <p className="text-[18px] custom-sm:text-base custom-xs:text-base font-medium text-paragraphColor mt-3 w-[420px] custom-xs:w-full custom-sm:w-full" data-aos="fade-up" data-aos-delay="150">
        {description}
      </p>
    </div>
  );
}

export default StepProcessCard;

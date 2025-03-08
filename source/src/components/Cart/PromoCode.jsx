function PromoCode() {
  return (
    <form className="py-3 custom-md:py-2 custom-md:pr-2 pl-8 custom-xs:pl-4 custom-md:pl-5 pr-3 custom-xs:py-0 custom-xs:pr-2 bg-white rounded-[60px] border border-borderColor relative">
      <input className="w-full py-[12px] custom-xs:rounded-[20px] custom-xs:text-sm focus:outline-none text-base text-headingColor" placeholder="Promo Code" type="text" />
      <button
        type="submit"
        className="py-3 px-6 custom-xs:py-2 custom-xs:px-3 custom-xs:text-sm bg-primaryOrange rounded-[40px] font-semibold text-white absolute top-1/2 translate-y-[-50%] right-3 custom-xs:right-[6px]"
      >
        Apply Now
      </button>
    </form>
  );
}

export default PromoCode;

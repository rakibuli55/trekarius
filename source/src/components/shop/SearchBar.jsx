import { IoSearchOutline } from "react-icons/io5";

function SearchBar() {
  return (
    <div>
        <form className="relative pb-6 mt-6 border-b border-dashed border-borderColor">
            <input type="text" className="py-3 px-5 bg-[#fafafb] border border-rewardBg rounded-[100px] text-headingColor w-full focus:outline-none" placeholder="Search" />
            <button className="absolute right-5 top-[14px] text-[24px]"><IoSearchOutline /></button>
        </form>
    </div>
  )
}

export default SearchBar;

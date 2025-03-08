import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { BiMenuAltRight } from "react-icons/bi";

function FilterSidebar() {
  const popularTags = [
    "New",
    "Table Desk",
    "Chair Desk",
    "Pen",
    "A4 Paper",
    "Laptop",
    "Headphone",
  ];
  const [activeTag, setActiveTag] = useState(null);
  const handleTag = (tag) => {
    setActiveTag(tag);
  };

  const categories = [
    { id: "superPen", name: "Super Pen", count: 1563 },
    { id: "a4Page", name: "A4 Page", count: 1563 },
    { id: "pocketWatch", name: "Pocket watch", count: 1563 },
    { id: "appleWatch", name: "Apple Watch", count: 1563 },
    { id: "sunglasses", name: "Sunglasses", count: 1563 },
    { id: "bags", name: "Bags", count: 1563 },
    { id: "tableDesk", name: "Table Desk", count: 1563 },
    { id: "deskChair", name: "Desk Chair", count: 1563 },
  ];
  const [isMobileDevice, setIsMobileDevice] = useState(window.innerWidth < 991);

  const [isSidebarActive, setIsSidebarActive] = useState(!isMobileDevice);

  return (
    <div className="filter-sidebar p-8 max-md:p-4 bg-white rounded-[16px]">
      <div className="max-md:flex max-md:items-center max-md:justify-between">
        <h3
          className="text--sm text-headingColor font-semibold pb-6 max-md:pb-0 max-md:border-none border-b border-dashed border-borderColor"
          data-aos="fade-up"
        >
          Filter
        </h3>
        {isMobileDevice && (
          <p
            className="text-[30px] cursor-pointer"
            onClick={() => setIsSidebarActive(!isSidebarActive)}
          >
            <BiMenuAltRight />
          </p>
        )}
      </div>

      <div
        className={`sidebar-content ${
          isSidebarActive
            ? "max-md:max-h-full"
            : "max-md:max-h-[0] max-md:overflow-hidden"
        } `}
      >
        <div data-aos="fade-up">
          <SearchBar />
        </div>
        {/* categories  */}
        <div className="mt-6 pb-6 border-b border-dashed border-borderColor">
          <h4 className="title custom-xs:!text-[20px]" data-aos="fade-up">
            Types of Categories
          </h4>
          <ul className="categories">
            {categories.map((item, index) => (
              <li
                key={item.id}
                className="cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <p>
                  <input type="checkbox" id={item?.id} />
                  <label htmlFor={item?.id}>{item?.name}</label>
                </p>
                <p>{item?.count}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* popular tags  */}
        <div className="popular-tags mt-6 pb-6 border-b border-dashed border-borderColor">
          <h4 className="title" data-aos="fade-up">
            Popular Tags
          </h4>
          <ul>
            {popularTags.map((tag, index) => (
              <li
                key={tag}
                className={`cursor-pointer ${
                  activeTag === tag
                    ? "bg-blue-500 text-white"
                    : "bg-transparen text-headingColor"
                }`}
                onClick={() => handleTag(tag)}
                // data-aos="fade-up"
                // data-aos-delay={index * 100}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div data-aos="fade-up">
          <button className="py-3 px-6 custom-xs:py-[10px] w-full bg-primaryBlue text-white font-semibold rounded-[100px] mt-6 duration-200 ease-in-out border-[2px] border-primaryBlue hover:bg-transparent hover:text-primaryBlue">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;

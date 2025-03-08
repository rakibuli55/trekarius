import { CartContext } from "@/context";
import { useContext, useState } from "react";

function ProductCard({ item }) {
  const [isHoverd, setIsHoverd] = useState(false);
  const {addItem} = useContext(CartContext)

  const handleAddToCart = (event, item) => {
    event.preventDefault();
    event.stopPropagation();
    addItem(item);
  };

  return (
    <div
      className={`bg-white rounded-[20px] overflow-hidden border duration-200 ease-in-out relative ${
        isHoverd ? "border-primaryOrange" : "border-[rgba(0,0,18,0.08)]"
      }`}
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      {
        item?.stock < 1 && item?.ability === "production" && (
          <p className="absolute bg-red-500 px-3 py-1 rounded-[30px] font-semibold text-white text-sm right-5 top-5">
            {
              item?.ability === "production" ? 'Launching in may' : ''
            }
          </p>
        )
      }
      <div className="bg-[#ececec] rounded-[12px]">
        <img
          className="w-full h-[418px] custom-2xl:h-[350px] custom-xl:h-[350px] max-xl:h-[330px] custom-xs:!h-[300px] object-cover mx-auto rounded-[12px]"
          src={`${import.meta.env.VITE_SERVER_URL}/${item?.thumbnail}`}
          alt={item?.name}
        />
      </div>
      <div className="p-6">
        <p
          className="inline-block text-[20px] max-md:text-[18px] font-semibold text-headingColor duration-200 ease-in-out hover:underline"
        >
          {item?.name}
        </p>
        <div className="flex items-center gap-[6px] mt-6">
          <p className="text-[18px] font-bold text-headingColor ">
            £{item?.price}
          </p>
        </div>
        {/* button  */}
        <div className="mt-6 flex items-center gap-6">
          
              <button
                onClick={(event) => handleAddToCart(event, 
                  item
                )}
                className={`add-to-cart inline-block py-3 px-6 max-md:py-[10px] max-md:px-5 max-md:text-sm font-semibold bg-headingColor rounded-[40px] text-white border-[2px] border-headingColor duration-200 ease-in-out hover:bg-transparent hover:text-headingColor ${item?.ability === "production" && item?.stock < 1 ? 'disabled' : ''}`}
              >
                Add to cart
              </button>
          {
            item?.ability === "production" && (
              <button
                className="inline-block py-3 px-6 max-md:py-[10px] max-md:px-5 max-md:text-sm font-semibold bg-primaryBlue rounded-[40px] text-white border-[2px] border-primaryBlue duration-200 ease-in-out hover:bg-transparent hover:text-headingColor"
              >
                Reserve now
              </button>
            )
          }
          
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

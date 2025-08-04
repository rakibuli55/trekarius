import { api } from "@/api";
import { CartContext } from "@/context";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";

function CartItem({ item }) {
  const { increaseQuantity, decreaseQuantity, updateQuantity, removeItem } =
    useContext(CartContext);

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const { data: updateItem, isLoading: updateItemLoading } = useQuery({
    queryKey: ["updateItem", item?.slug],
    queryFn: async () => {
      const response = await api.get(`/product/single/${item?.slug}`);
      return response.data;
    },
  });

  const subTotal = item.quantity * updateItem?.data?.price;

  return (
    <div
      className={`cart-item grid grid-cols-5 custom-sm:block custom-xs:block items-center pt-4 pb-6 border-b border-borderColor custom-xs:relative custom-sm:relative ${
        item.id === 1 ? "pt-0" : "pt-4"
      }`}
      data-aos="fade-up"
    >
      {/* product  */}
      <div className="flex items-center gap-4">
        <div className="h-[70px] min-w-[106px] max-w-[106px] flex items-center justify-center bg-white rounded-[8px]">
          <img
            className="h-[51px] w-[52px] custom-xl:w-full custom-xl:h-full custom-sm:h-full custom-sm:w-full custom-sm:rounded-[8px] custom-xs:h-full custom-xs:w-full custom-xs:rounded-[8px] custom-xl:rounded-[8px]"
            src={`${import.meta.env.VITE_SERVER_URL}/${item?.thumbnail}`}
            alt="Bag"
          />
        </div>
        <p className="text-base text-headingColor font-medium">{item?.name}</p>
      </div>
      {/* price  */}
      <div className="text-center font-medium text-headingColor">
        <p className="flex items-center justify-center custom-sm:justify-start custom-xs:justify-start custom-sm:mt-5 custom-xs:mt-5">
          <span className="hidden custom-sm:block custom-xs:block mr-1">
            Price:
          </span>
          £{updateItem?.data?.price}
        </p>
      </div>
      {/* quantitty  */}
      <div className="w-full flex items-center justify-center custom-sm:justify-start custom-sm:mt-5 custom-xs:justify-start custom-xs:mt-5">
        <div className="text-center w-[102px] h-[56px] custom-xs:!h-10 bg-white rounded-[8px] flex items-center justify-center">
          <button
            className="text-[30px]"
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>
          <input
            className="w-[40px] mx-1 text-center ml-2 focus:outline-none"
            type="number"
            value={item?.quantity}
            onChange={handleInputChange}
            readOnly
          />
          <button
            className="text-[30px]"
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>
        </div>
      </div>
      {/* sub total  */}
      <div className="text-center font-medium text-headingColor">
        <p className="flex items-center justify-center custom-sm:justify-start custom-sm:mt-5 custom-xs:justify-start custom-xs:mt-5">
          <span className="hidden custom-sm:block custom-xs:block mr-1">
            Subtotal:{" "}
          </span>
          £{subTotal}
        </p>
      </div>
      {/* remove  */}
      <div
        className="flex flex-col items-center text-[24px] cursor-pointer custom-sm:absolute custom-sm:top-3 custom-sm:right-0 custom-xs:absolute custom-xs:top-2 custom-xs:right-0"
        onClick={() => removeItem(item.id)}
      >
        <IoClose />
      </div>
    </div>
  );
}

export default CartItem;

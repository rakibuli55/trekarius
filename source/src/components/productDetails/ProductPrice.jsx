import { CartContext } from "@/context";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useContext } from "react";
import toast from "react-hot-toast";

function ProductPrice({ productData }) {
  
  const totalProductPrice = parseFloat(productData?.price || 0) + parseFloat(productData?.tax || 0);

    const {addItem} = useContext(CartContext)
    const axiosSecure = useAxiosSecure();

    // handleBagReserve
    const handleBagReserve = async (productId) => {
      const loadingToast = toast.loading("Reserving...");
      try{
        const defaultQuantity = 1;

        const formData = new FormData();

        formData.append("product_id", productId);
        formData.append("quantity", defaultQuantity);

        const response =  await axiosSecure.post('/pre-order/store', formData)
        if(response?.status === 200){
          toast.success(`${response?.data?.message}`, { id: loadingToast });
        }

      }catch(error){
        toast.error(`${error?.response?.data?.message}`, { id: loadingToast });
      }

    }

    



  return (
    <div className="product-price-box p-8 custom-xs:p-4 rounded-[16px] border border-borderColor">
      <p className="text-[18px] font-medium mb-4">Price</p>
      <p className="text-[32px] custom-xs:text-[26px] font-semibold text-headingColor mt-3 pb-8 border-b border-dashed border-borderColor">
        ${productData?.price}
      </p>
      <ul>
        <li>
          <p>Base Price</p>
          <p>${productData?.price}</p>
        </li>
        <li className="pb-4 border-b border-dashed border-borderColor">
          <p>State Tax</p>
          <p>${productData?.tax}</p>
        </li>
        <li>
          <p className="font-semibold">Total</p>
          <p className="font-semibold">${totalProductPrice}</p>
        </li>
      </ul>
      <button className={`add-to-cart mt-10 w-full p-3 custom-xs:p-[10px] custom-xs:text-sm bg-[#1E1E1E] rounded-[100px] text-center border-[2px] text-white border-[#1E1E1E] duration-200 ease-in-out hover:bg-transparent hover:text-[#1E1E1E] font-semibold ${productData?.ability === "production" && productData?.stock < 1 ? 'disabled' : ''}`} onClick={() => (addItem(productData))}>
        Add to cart
      </button>
      {
        productData?.ability === "production" && (
          <button className="mt-4 w-full p-3 custom-xs:p-[10px] custom-xs:text-sm bg-primaryBlue rounded-[100px] text-center border-[2px] text-white border-primaryBlue duration-200 ease-in-out hover:bg-transparent hover:text-[#1E1E1E] font-semibold" onClick={() => handleBagReserve(productData?.id)}>
            Reserve your bag now
          </button>
        )
      }
      
    </div>
  );
}

export default ProductPrice;

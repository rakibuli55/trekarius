import { FaStar } from "react-icons/fa";
import ProductSlider from "./ProductSlider";
import DOMPurify from "dompurify";

function Product({ productData }) {
  const sanitizedDescription = DOMPurify.sanitize(productData?.description);
  return (
    <div className="p-8 custom-md:p-5 custom-sm:p-4 custom-xs:p-4 rounded-[16px] border border-borderColor">
      {/* product  details */}
      <div>
        {/* slider */}
        <ProductSlider productImages={productData?.images} />

        {/* description */}
        <div className="my-5 md:my-8 lg:my-10">
          <h1 className="text--sm custom-md:text-[20px] custom-sm:text-[20px] custom-xs:text-[18px] text-headingColor font-bold mb-4">
            {productData?.name}
          </h1>
          <div className="flex items-center gap-2 text-primaryOrange text-[20px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className="mt-4 text-[18px] w-[80%] custom-md:text-base custom-sm:text-base custom-xs:text-sm">
            <div className="product-description-box" dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

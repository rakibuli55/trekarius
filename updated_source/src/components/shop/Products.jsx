import { Link } from "react-router-dom";
import ProductCard from "../HomePage/ProductCard";
import PaginationCustom from "../common/PaginationCustom";

function Products({ products, totalPages, onHandlePage, currentPage }) {
  return (
    <div>
      <div className="grid grid-cols-3 custom-xl:grid-cols-2 custom-lg:grid-cols-2 custom-md:grid-cols-2 custom-sm:grid-cols-1 custom-xs:grid-cols-1 custom-xs:gap-4 gap-6 min-h-screen custom-sm:min-h-[100%] custom-xs:min-h-[100%]">
        {products?.data?.map((product, index) => (
          <Link
            to={`/products/${product?.slug}`}
            key={product.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <ProductCard item={product} />
          </Link>
        ))}
      </div>
      <div className="mt-0">
        {totalPages?.length > 1 ? (
          <PaginationCustom
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onHandlePage}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Products;

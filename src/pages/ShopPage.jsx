import { api } from "@/api";
import HelmetComponent from "@/components/common/HelmetComponent";
import Loader from "@/components/common/Loader";
import Container from "@/components/container/Container";
import Products from "@/components/shop/Products";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: allProducts, isLoading: productLoading } = useQuery({
    queryKey: ["all-products", currentPage],
    queryFn: async () => {
      const response = await api.get(
        `/product/all/paginate?page=${currentPage}`
      );
      return response?.data?.data;
    },
  });
  const { data: shopMetaData, isLoading: metaLoading } = useQuery({
    queryKey: ["shopMetaData"],
    queryFn: async () => {
      const response = await api.get("/seo/page/content?page=shop");
      return response?.data?.data;
    },
  });

  const totalPages = Math.ceil(allProducts?.total / allProducts?.per_page);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (productLoading) {
    return <Loader />;
  }

  return (
    <>
      <HelmetComponent item={shopMetaData} />
      <section className="pt-[150px] custom-xl:pt-[120px] custom-md:pt-[100px] custom-sm:pt-[100px] custom-xs:pt-[75px] pb-[100px] custom-xs:pb-[60px]">
        <Container>
          <div className="flex items-start gap-10 w-full max-md:block">
            {/* <div className="w-[20%] custom-2xl:w-[25%] custom-xl:w-[35%] custom-lg:w-[35%] max-md:w-full">
            <FilterSidebar />
          </div> */}
            <div className="w-[80%] custom-2xl:w-[75%] custom-xl:w-[65%%] custom-lg:w-[65%] max-md:w-full max-md:mt-8 custom-xs:!mt-5">
              <Products
                products={allProducts}
                totalPages={totalPages}
                onHandlePage={handlePageChange}
                currentPage={currentPage}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ShopPage;

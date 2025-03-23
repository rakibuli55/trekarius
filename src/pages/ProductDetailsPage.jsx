import { api } from "@/api";
import HelmetComponent from "@/components/common/HelmetComponent";
import WhatsappButton from "@/components/common/WhatsappButton";
import Container from "@/components/container/Container";
import Product from "@/components/productDetails/Product";
import ProductPrice from "@/components/productDetails/ProductPrice";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const { slug } = useParams();

  const { data: productData, isLoading: productLoading } = useQuery({
    queryKey: ["single-product", slug],
    queryFn: async () => {
      const response = await api.get(`/product/single/${slug}`);
      return response?.data?.data;
    },
  });

  return (
    <>
      <HelmetComponent item={productData} />
      <section className="pt-[150px] custom-md:pt-[100px] pb-[100px] px-20 custom-2xl:px-0 custom-xl:px-0 custom-lg:px-0 max-md:px-0 custom-sm:pt-[100px] custom-xs:pt-[80px] custom-sm:pb-[60px] custom-xs:pb-[60px]">
        <Container>
          <div className="flex max-md:flex-col items-start gap-6">
            <div className="w-[75%] max-md:w-full">
              <Product productData={productData} />
            </div>
            <div className="w-[25%] max-md:w-full">
              <ProductPrice productData={productData} />
            </div>
          </div>
          <WhatsappButton />
        </Container>
      </section>
    </>
  );
}

export default ProductDetailsPage;

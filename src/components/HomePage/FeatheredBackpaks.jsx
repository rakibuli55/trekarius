import Container from "../container/Container";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";

function FeatheredBackpaks() {
  const { data: featheredProducts, isLoading: productLoading } = useQuery({
    queryKey: ["featheredProducts"],
    queryFn: async () => {
      const response = await api.get("/product/all");
      return response.data.data;
    },
  });

  return (
    <section className="pt-[160px] custom-xl:pt-[110px] max-xl:pt-[110px] pb-[120px] px-10 max-md:px-0 max-md:py-[80px] custom-xs:!py-[60px]">
      <Container>
        {/* section title  */}
        <div className="mb-10 custom-xs:mb-6">
          <h3 className="text--xl" data-aos="fade-up">
            Featured Backpaks
          </h3>
        </div>
        <div className="grid grid-cols-4 custom-2xl:grid-cols-3 custom-xl:grid-cols-3 max-xl:grid-cols-2 custom-sm:!grid-cols-1 custom-xs:!grid-cols-1 gap-5">
          {featheredProducts?.map((item, index) => (
            <Link
              to={`/products/${item?.slug}`}
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProductCard item={item} />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeatheredBackpaks;

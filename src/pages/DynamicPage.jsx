import { api } from "@/api";
import Loader from "@/components/common/Loader";
import WhatsappButton from "@/components/common/WhatsappButton";
import Container from "@/components/container/Container";
import { useQuery } from "@tanstack/react-query";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";

function DynamicPage() {
  const { slug } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["dynamicpage", slug],
    queryFn: async () => {
      const response = await api.get(`/dynamic-pages/single/${slug}`);
      return response?.data?.data;
    },
  });

  const sanitizedDescription = DOMPurify.sanitize(data?.page_content);

  if (isLoading) {
    return <Loader />
  }
    return (
      <section className="pt-[150px] pb-[120px] min-h-[80vh]">
        <Container>
          <div>
            <h1 className="text-center font-bold text-[40px] text-headingColor">
              {data?.page_title}
            </h1>
            <div
              className="product-description-box mt-20"
              dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
            ></div>
          </div>
          <WhatsappButton />
        </Container>
      </section>
    );
}

export default DynamicPage;

import { api } from "@/api";
import BlogInformation from "@/components/BlogDetails/BlogInformation";
import RelatedBlogs from "@/components/BlogDetails/RelatedBlogs";
import HelmetComponent from "@/components/common/HelmetComponent";
import Loader from "@/components/common/Loader";
import WhatsappButton from "@/components/common/WhatsappButton";
import Container from "@/components/container/Container";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function BlogDetailsPage() {
  const { slug } = useParams();

  const { data: blogPost, isLoading } = useQuery({
    queryKey: ["blogPost", slug],
    queryFn: async () => {
      const response = await api.get(`/blog/single/${slug}`);
      return response.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <HelmetComponent item={blogPost?.data} />
      <section className="mt-[140px] custom-md:mt-[100px] custom-sm:mt-[90px] custom-xs:mt-[74px]">
        <Container>
          <div className="w-[1600px] custom-2xl:w-full custom-xl:w-full custom-lg:w-full max-md:w-full mx-auto">
            {/* banner img  */}
            <div data-aos="fade-in">
              <img
                className="w-full h-[420px] custom-sm:h-[300px] custom-xs:h-[250px] object-cover rounded-[16px]"
                src={`${import.meta.env.VITE_SERVER_URL}/${
                  blogPost?.data?.image
                }`}
                alt=""
              />
            </div>
            {/* details  */}
            <div className="flex items-start custom-lg:flex-col max-md:flex-col justify-center gap-6 relative -top-[100px] custom-lg:px-5 custom-md:px-5 custom-sm:px-5 custom-xs:px-3">
              <div
                className="w-[856px] custom-2xl:w-[60%] custom-xl:w-[60%] custom-lg:w-full max-md:w-full"
                data-aos="fade-up"
              >
                <BlogInformation blogPost={blogPost} />
              </div>
              <div
                className="w-[416px] custom-2xl:w-[30%] custom-xl:w-[30%] custom-lg:w-full max-md:w-full"
                data-aos="fade-up"
              >
                <RelatedBlogs />
              </div>
            </div>
          </div>
        </Container>
        <WhatsappButton />
      </section>
    </>
  );
}

export default BlogDetailsPage;

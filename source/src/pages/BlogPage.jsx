import { api } from "@/api";
import BlogPost from "@/components/Blog/BlogPost";
import HelmetComponent from "@/components/common/HelmetComponent";
import Loader from "@/components/common/Loader";
import PaginationCustom from "@/components/common/PaginationCustom";
import Container from "@/components/container/Container";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: blogData, isLoading: blogLoading } = useQuery({
    queryKey: ["allBlogs", currentPage],
    queryFn: async () => {
      const response = await api.get(`/blogs/all?page=${currentPage}`);
      return response?.data;
    },
    keepPreviousData: true,
  });

  const { data: BlogMetaData, isLoading: metaLoading } = useQuery({
    queryKey: ["BlogMetaData"],
    queryFn: async () => {
      const response = await api.get("/seo/page/content?page=blog");
      return response?.data?.data;
    },
  });

  const totalPages = Math.ceil(
    blogData?.data?.total / blogData?.data?.per_page
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (blogLoading) {
    return <Loader />;
  }
  return (
    <>
      <HelmetComponent item={BlogMetaData} />
      <section className="pt-[70px] custom-xs:pt-[35px] pb-[120px] custom-xs:pb-[60px] min-h-screen">
        <Container>
          <div className="w-[900px] min-h-screen max-md:w-full mx-auto">
            <div>
              {blogData?.data?.data?.map((blog) => (
                <BlogPost key={blog.id} item={blog} />
              ))}
            </div>
            <div className="mt-20">
              {!blogLoading && (
                <PaginationCustom
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default BlogPage;

import RelatedBlogCard from "./RelatedBlogCard";
import { Link } from "react-router-dom";
import { IoMdArrowUp } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";



function RelatedBlogs({ blogs }) {

  const { data: latestBlogs, isLoading } = useQuery({
    queryKey: ["latest-blog"],
    queryFn: async () => {
      const response = await api.get("/blog/latest");
      return response?.data?.data
    },
  });

  return (
    <div className="shadow-lg p-8 custom-xs:p-4 rounded-[16px] bg-white">
      <h4 className="text--sm font-semibold text-headingColor mt-6 custom-xs:mt-2 mb-6">
        More Related Blogs
      </h4>
      <div>
        {latestBlogs?.map((blog) => (
          <RelatedBlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
      <Link
        to={"/blogs"}
        className="flex items-center border-b border-headingColor gap-1 w-fit mt-6 text-sm font-semibold text-headingColor duration-200 ease-in-out hover:text-primaryBlue hover:border-primaryBlue"
      >
        Read More
        <p className="rotate-[40deg] text-[16px]">
          <IoMdArrowUp />
        </p>
      </Link>
    </div>
  );
}

export default RelatedBlogs;

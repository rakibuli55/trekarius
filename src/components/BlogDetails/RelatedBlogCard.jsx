import { Link } from "react-router-dom"


function RelatedBlogCard({blog}) {
  return (
    <Link
      to={`/blogs/${blog?.slug}`}
      className="flex items-center gap-6 custom-xs:gap-4 py-6 custom-xs:py-3 border-b border-t border-dashed border-[#DFE0E4]"
    >
      <img
        className="w-20 h-20 custom-xl:w-[60px] custom-xl:h-[60px] custom-xs:w-[60px] custom-xs:h-[60px] rounded-[12px] object-cover"
        src={`${import.meta.env.VITE_SERVER_URL}/${blog?.image}`}
        alt="related-blog"
      />
      <p className="text-[20px] custom-2xl:text-[18px] custom-xl:text-[18px] custom-xs:text-base font-semibold text-headingColor">
        {blog?.title}
      </p>
    </Link>
  );
}

export default RelatedBlogCard
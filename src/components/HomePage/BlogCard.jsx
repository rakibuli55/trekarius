import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

function BlogCard({ item }) {
  const sanitizedDescription = DOMPurify.sanitize(item?.description?.split("").slice(0, 130).join(""));
  return (
    <div className="blogCard bg-blogCardBg rounded-[32px] custom-xs:rounded-[16px] overflow-hidden h-[510px]">
      <div className="h-[200px] overflow-hidden">
        <img
          className="w-full h-full object-cover duration-200 ease-in-out"
          src={`${import.meta.env.VITE_SERVER_URL}/${item?.image}`}
          alt={item?.title}
        />
      </div>
      <div className="p-[30px]">
        <div className="">
          <h4 className="text--sm custom-xs:text-base text-headingColor font-medium">
            {item?.title?.split("").slice(0, 45).join("")}...
          </h4>
          <div className="product-description-box text-sm font-medium text-headingColor mt-3 mb-[50px] custom-xs:mb-[60px]" dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></div>

        </div>
        <div>
          <Link
            to={`/blogs/${item?.slug}`}
            className="inline-block text-sm py-2 px-6 border border-[rgba(30,30,30,0.08)] rounded-[30px] duration-200 ease-in-out hover:text-white hover:bg-primaryOrange font-semibold text-headingColor"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;

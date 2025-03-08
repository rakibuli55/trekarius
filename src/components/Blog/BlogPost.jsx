import { Link } from "react-router-dom";
import { IoMdArrowUp } from "react-icons/io";
import DOMPurify from "dompurify";

function BlogPost({ item }) {
  const sanitizedDescription = DOMPurify.sanitize(item?.description?.split("").splice(0,400).join(""));
  return (
    <div className="blogPost mt-20 custom-xs:mt-10" data-aos="fade-up">
      <div className="h-[500px] custom-md:h-[400px] custom-sm:h-[300px] custom-xs:h-[250px] custom-xs:rounded-[16px] overflow-hidden rounded-[16px]">
        <img
          className="w-full h-full duration-200 ease-in-out object-cover"
          src={`${import.meta.env.VITE_SERVER_URL}/${item?.image}`}
          alt={item?.title}
        />
      </div>
      <div>
        <h3 className="text-[32px] custom-md:text-[24px] custom-sm:text-[20px] custom-xs:text-[20px] font-bold text-headingColor mt-10 custom-xs:mt-5">
          {item?.title}
        </h3>
        <div className="product-description-box text-[18px] custom-xs:text-base text-headingColor mt-6 custom-xs:mt-3 font-medium capitalize" dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></div>
        <Link
          to={`/blogs/${item.slug}`}
          className="flex items-center border-b border-headingColor gap-1 w-fit mt-6 text-sm font-semibold text-headingColor duration-200 ease-in-out hover:text-primaryBlue hover:border-primaryBlue"
        >
          Read More
          <p className="rotate-[40deg] text-[16px]">
            <IoMdArrowUp />
          </p>
        </Link>
      </div>
    </div>
  );
}

export default BlogPost;

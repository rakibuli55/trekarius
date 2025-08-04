import DOMPurify from "dompurify";

function BlogInformation({ blogPost }) {

  const sanitizedDescription = DOMPurify.sanitize(blogPost?.data?.description);
  return (
    <div className="p-8 custom-sm:p-5 custom-xs:p-4 rounded-[16px] shadow-lg bg-white">
      <h1 className="text-[45px] custom-2xl:text-[40px] custom-xl:text-[36px] custom-lg:text-[36px] custom-md:text-[30px] custom-sm:text-[26px] custom-xs:text-[22px] font-semibold text-headingColor">
        {blogPost?.data?.title}
      </h1>
      <p
        className="mt-6 text-headingColor blog-description-box"
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      >
      </p>
    </div>
  );
}

export default BlogInformation;

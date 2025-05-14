import DOMPurify from "dompurify";

const WhyUsSection = ({ data }) => {
  return (
    <section className="pt-[50px] pb-[120px] custom-xs:py-[60px] custom-xs:pt-0">
      <div className="w-[80%] mx-auto custom-2xl:w-[90%] custom-xl:w-[90%] max-md:w-[92%]">
        <div className="flex items-center flex-wrap flex-row-reverse max-md:flex-col">
          {/* text */}
          <div className="w-[50%] max-md:order-2 max-md:w-full max-md:mt-6">
            <h2 className="title-common">{data?.title}</h2>
            <p
              className="common-html-box text-[18px] font-medium mt-8 custom-xs:mt-4 custom-xs:text-base"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data?.description),
              }}
            ></p>
          </div>
          {/* image  */}
          <div className="w-[50%] indentity-image-wrap pr-20 max-md:pr-0 max-md:w-full">
            <div className="h-[580px] custom-sm:h-[400px] overflow-hidden rounded-[30px] custom-xs:rounded-[14px] custom-xs:h-[290px]">
              <img
                className="w-full h-full duration-200 ease-in-out object-cover"
                src={`${import.meta.env.VITE_SERVER_URL}/${data?.file_url}`}
                alt="indentityImage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

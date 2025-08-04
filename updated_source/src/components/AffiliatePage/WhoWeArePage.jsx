
import DOMPurify from "dompurify";

const WhoWeArePage = ({data}) => {
  return (
    <section className="py-[120px] max-md:py-[60px] custom-xs:!pt-10 custom-xs:mb-0">
      <div className="w-[80%] mx-auto custom-2xl:w-[90%] custom-xl:w-[90%] max-md:w-[92%] custom-xs:!w-[90%]">
        <div className="flex items-center flex-wrap max-md:flex-col">
          {/* text */}
          <div className="w-[50%] max-md:order-2 max-md:w-full max-md:mt-6">
            <h2 className="title-common">{data?.title}</h2>
            <div className="common-html-box text-[18px] font-medium mt-8 max-md:mt-3 custom-xs:text-base" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(data?.description)}}>
            </div>
          </div>
          {/* image  */}
          <div className="w-[50%] indentity-image-wrap pl-20 max-md:order-1 max-md:w-full max-md:pl-0">
            <div className="h-[580px] max-md:h-[400px] custom-xs:!h-[290px] overflow-hidden rounded-[30px] custom-xs:rounded-[14px]">
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

export default WhoWeArePage;

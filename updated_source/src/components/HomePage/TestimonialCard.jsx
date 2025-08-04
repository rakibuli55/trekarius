import { PiQuotesLight } from "react-icons/pi";
import DOMPurify from 'dompurify';

const TestimonialCard = ({testimonial}) => {
  return (
    <div className="p-6 bg-white border rounded-[12px] relative z-[1]">
      <img
        className="h-[80px] w-[80px] rounded-full mx-auto object-cover"
        src={`${import.meta.env.VITE_SERVER_URL}/${testimonial?.image}`}
        alt=""
      />
      <p className="text-[18px] font-semibold text-center mt-4">{testimonial?.name}</p>
      <div className="text-center mt-5">
        <div className="text-[17px] common-html-box" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(testimonial?.testimonial)}}>
        </div>
        <p className="text-[100px] absolute bottom-10 left-1/2 translate-x-[-50%] opacity-10">
          <PiQuotesLight />
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;

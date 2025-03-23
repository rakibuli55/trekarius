import { PiQuotesLight } from "react-icons/pi";
import clientImg from "../../assets/images/dummyUser.png";

const TestimonialCard = () => {
  return (
    <div className="p-6 bg-white border rounded-[12px] relative z-[1]">
      <img
        className="h-[80px] w-[80px] rounded-full mx-auto object-cover"
        src={clientImg}
        alt=""
      />
      <p className="text-[18px] font-semibold text-center mt-4">Jhon Doe</p>
      <div className="text-center mt-5">
        <p className="text-[17px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ex
          perferendis esse vero! Amet nobis in consequatur facilis nam.
          Exercitationem, pariatur quis. Quos temporibus ratione asperiores,
          repellendus dolore nobis ullam.
        </p>
        <p className="text-[100px] absolute bottom-10 left-1/2 translate-x-[-50%] opacity-10">
          <PiQuotesLight />
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;

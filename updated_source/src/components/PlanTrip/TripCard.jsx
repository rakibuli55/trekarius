import { Link } from "react-router-dom";

function TripCard({ item }) {
  return (
    <div className="trip-card p-2 rounded-[20px] border border-[rgba(0,0,0,0.08)] h-full flex flex-col">
      <div className="h-[450px] custom-2xl:h-[300px] custom-xl:h-[300px] custom-lg:h-[350px] custom-md:h-[350px] custom-sm:h-[350px] custom-xs:h-[290px] overflow-hidden rounded-[12px]">
        <img className="w-full h-full duration-200 ease-in-out" src={item?.imgUrl} alt={item.imgUrl} />
      </div>
      <div className="p-6 custom-2xl:px-2 flex flex-col grow">
        <div className="flex flex-col grow">
          <h3 className="text-[24px] custom-2xl:text-[20px] custom-xl:text-[20px] max-xl:text-[20px] font-bold text-headingColor mb-2">
            {item?.title}
          </h3>
          <p className="text-base text-headingColor mb-4 w-[200px]">
            {item?.address}
          </p>
          <p className="text-base text-headingColor mb-4">{item?.phone}</p>
        </div>
        <div>
          <Link
            to={"/"}
            className="inline-block py-3 px-4 border border-primaryBlue text-primaryBlue rounded-[12px] duration-200 ease-in-out hover:bg-primaryBlue hover:text-white"
          >
            Go to Site
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TripCard;

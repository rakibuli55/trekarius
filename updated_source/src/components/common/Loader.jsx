import LoaderIcon from "../../assets/images/icons/fade-stagger-circles.svg";

function Loader() {
  return (
    <div className="w-full h-full fixed flex items-center justify-center bg-white z-[9999]">
      <img className="w-[100px]" src={LoaderIcon} alt="" />
    </div>
  );
}

export default Loader;

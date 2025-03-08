const ImageGalleryContainer = ({ image, even }) => {
  return (
    <div
      data-aos="fade-up"
      className={`h-[300px] lg:h-[500px] xl:h-[600px] flex`}
    >
      <div className="h-full w-full border border-[rgba(255,255,255,0.8)] rounded-xl lg:rounded-2xl overflow-hidden">
        <img className="h-full w-full object-cover" src={`${import.meta.env.VITE_SERVER_URL}/${image}`} alt="" />
      </div>
    </div>
  );
};

export default ImageGalleryContainer;

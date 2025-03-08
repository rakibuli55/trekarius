
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageGalleryContainer from "./ImageGalleryContainer";
import VideoGalleryContainer from "./VideoGalleryContainer";

const GalleryContainer = ({ galleryItems }) => {
  return (
    <div className="space-y-5 md:space-y-7 lg:space-y-8 2xl:space-y-10 mt-8 lg:mt-16">
      <div>
        <ResponsiveMasonry
                columnsCountBreakPoints={{0: 1, 750: 2, 900: 4}}
            >
                <Masonry gutter="20px">
                {galleryItems?.map((item, index) => (
                  <div key={index} >
                    {
                      item.type === 'image' ? (
                        <ImageGalleryContainer
                          even={index % 2 === 0}
                          image={item?.file_url}
                        />
                      ) : (
                        <VideoGalleryContainer video={item?.file_url} />
                      )
                    }
                  </div>
                ))}
                </Masonry>
            </ResponsiveMasonry>
      </div>
      
    </div>
  );
};

export default GalleryContainer;

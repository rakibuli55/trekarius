import Container from '@/components/container/Container';
import GalleryContainer from '@/components/PhotoGallery/GalleryContainer';
import GalleryTitleContainer from '@/components/PhotoGallery/GalleryTitleContainer';
import { useQuery } from '@tanstack/react-query';
import Loader from "../components/common/Loader"
import { api } from '@/api';
import HelmetComponent from '@/components/common/HelmetComponent';
import WhatsappButton from '@/components/common/WhatsappButton';

const PhotoGallery = () => {

  const {data:photoGallleryData, isLoading:photoDataLoading} = useQuery({
    queryKey:['photoGallleryData'],
    queryFn: async () => {
      const response = await api.get('/gallery-image/all');
      return response?.data?.data;
    }
  });

  const {data:photoGalleryMetaData, isLoading:metaLoading} = useQuery({
    queryKey:["photoGalleryMetaData"],
    queryFn: async () => {
      const response = await api.get('/seo/page/content?page=photo_gallery');
      return response?.data?.data;
    }
  })

  if(photoDataLoading) {
    return <Loader />
  }

  return (
    <div className="bg-[#121212] py-10 md:py-14 lg:py-16 xl:py-20 font-montserrat text-white mt-[84px]">
      <HelmetComponent item={photoGalleryMetaData} />
      <Container>
        {/* title */}
        <GalleryTitleContainer />

        {/* gallery section */}
        <GalleryContainer galleryItems={photoGallleryData} />
        <WhatsappButton />
      </Container>
    </div>
  );
};

export default PhotoGallery;

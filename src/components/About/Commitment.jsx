
import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { IoMdPause } from "react-icons/io";
import Container from "../container/Container";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { VscUnmute } from "react-icons/vsc";


function Commitment({data}) {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsVideoPlaying(true)
      } else {
        videoRef.current.pause();
        setIsVideoPlaying(false)
      }
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      const currentMuteState = videoRef.current.muted;
      videoRef.current.muted = !currentMuteState;
      setIsMuted(!currentMuteState);
    }
  };

  return (
    <section className="py-[60px] custom-sm:pb-[10px] custom-xs:pt-5 custom-xs:pb-0 mt-[100px] custom-md:mt-[20px] custom-sm:mt-5 custom-xs:mt-5">
      <Container>
        <div className="w-[1300px] custom-2xl:w-full custom-xl:w-full custom-lg:w-full max-md:w-full mx-auto">
          <h3 className="text-[48px] custom-md:text-[34px] custom-sm:text-[30px] custom-xs:text-[26px] custom-md:mb-10 custom-sm:mb-5 custom-xs:mb-5 text-center font-bold text-headingColor mb-[60px]">Core Values</h3>
          <div>
          <div className="core-video-box relative z-[1]">
          <video ref={videoRef} src={`${import.meta.env.VITE_SERVER_URL}/${data?.file_url}`} className="w-full rounded-lg" autoPlay
          loop
          muted={isMuted}  ></video>
          <button
                onClick={togglePlayPause}
                className="absolute bottom-6 custom-xs:bottom-4 cursor-pointer left-6 custom-xs:left-3 bg-primaryOrange text-white h-10 w-10 custom-xs:h-8 custom-xs:w-8 flex items-center justify-center rounded-full"
              >
                {
                  isVideoPlaying ? <IoMdPause /> : <FaPlay />
                }
              </button>
              <button
        onClick={handleMuteToggle}
        className="absolute bottom-6 custom-xs:bottom-4 cursor-pointer left-20 custom-xs:left-14 bg-primaryOrange text-white h-10 w-10 custom-xs:h-8 custom-xs:w-8 flex items-center justify-center rounded-full"
      >
        {isMuted ? <IoVolumeMuteSharp /> : <VscUnmute />}
      </button>
          </div>
          </div>
          <p
            className="text-[20px] custom-md:text-[18px] custom-sm:text-[18px] custom-xs:text-[18px] custom-xs:font-semibold font-semibold w-[1300px] custom-xl:w-full custom-2xl:w-full max-xl:w-full mx-auto mt-20 custom-sm:mt-10 custom-xs:mt-10 custom-xs:text-base"
            data-aos="fade-up"
          >
            We are committed to making a positive impact on the planet and we contribute 2% of our profits towards poverty and supporting countries in need of assistance. This initiative was born out of our extensive travels across the globe and interactions with various individuals. Our goal is to repay the kindness and hospitality shown to us by less privileged countries, ensuring that they benefit from our contributions! We utilize environmentally friendly recycled materials in all of our products to support and enhance the safety of the environment.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Commitment;

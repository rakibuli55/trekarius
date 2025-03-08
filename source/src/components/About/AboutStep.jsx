import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { IoMdPause } from "react-icons/io";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { VscUnmute } from "react-icons/vsc";

function AboutStep({ data,text, img, shapeColor, isReversed }) {

  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);
  
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
    <div className={`flex max-md:flex-col items-center gap-[134px] max-md:gap-10 custom-xs:!gap-8 justify-center mt-[30px] max-md:mt-0 ${isReversed ? 'flex-row-reverse' : ''}`}>
      <div className="w-[530px] custom-sm:w-full custom-xs:w-full max-md:order-2" data-aos={isReversed ? 'fade-left' : 'fade-right'}>
        <p className="text-[24px] custom-md:text-[20px] custom-sm:text-[18px] custom-sm:leading-[30px] custom-xs:text-base custom-xs:leading-[28px] font-semibold text-headingColor leading-[36px]">
          {text}
        </p>
      </div>
      <div className="max-w-[650px] w-full max-md:order-1 h-[520px] custom-sm:h-[335px] custom-xs:h-[300px] p-3 custom-xs:p-0 about-step-img relative z-[1] mt-[30px] max-md:mt-0" data-aos={isReversed ? 'fade-right' : 'fade-left'}>
      {data.type === 'image' ? (
          <img
            className="h-full w-full rounded-[20px] object-cover"
            src={`${import.meta.env.VITE_SERVER_URL}/${img}`}
            alt="img"
          />
        ) : (
          <video
          ref={videoRef}
            className="h-full w-full rounded-[20px] object-cover"
            src={`${import.meta.env.VITE_SERVER_URL}/${img}`}
            autoPlay
            muted
            loop
          />
        )}


        {
          data?.type === 'video' ? (
            <>
            <button
    onClick={togglePlayPause}
    className="absolute bottom-8 custom-xs:bottom-4 cursor-pointer left-9 custom-xs:left-3 bg-primaryOrange text-white h-10 w-10 custom-xs:h-8 custom-xs:w-8 flex items-center justify-center rounded-full"
  >
    {isVideoPlaying ? <IoMdPause /> : <FaPlay />}
  </button>
  <button
    onClick={handleMuteToggle}
    className="absolute bottom-8 custom-xs:bottom-4 cursor-pointer left-[90px] custom-xs:left-14 bg-primaryOrange text-white h-10 w-10 custom-xs:h-8 custom-xs:w-8 flex items-center justify-center rounded-full"
  >
    {isMuted ? <IoVolumeMuteSharp /> : <VscUnmute />}
  </button>
            </>
          ) : ('')
        }



        <div
          className="back-shape absolute w-[97%] h-[96%] custom-2xl:w-[97%] custom-2xl:h-[97%] custom-xl:w-[97%] custom-xl:h-[97%] custom-sm:w-[95%] custom-sm:h-[93%] left-5 top-5 z-[-1] rounded-[20px]"
          style={{ backgroundColor: shapeColor }}
        ></div>
        
      </div>
    </div>
  );
}

export default AboutStep;

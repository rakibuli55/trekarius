import { useRef, useState } from 'react';
import { PauseButtonSvg, PlayButtonSvg } from '../SvgContainer/SvgContainer';

const VideoGalleryContainer = ({video,idx}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);
  return (
    <div data-aos="fade-up"
    data-aos-delay={100*idx}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[300px] flex items-end relative"
    >
      {/* Play/Pause button container */}

      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-4 rounded-full cursor-pointer z-20">
        <div
          className={`size-16 flex items-center justify-center bg-black/20 rounded-full backdrop-blur-sm ${
            isPlaying ? 'hidden' : 'block'
          }`}
          onClick={() => {
            setIsPlaying(true);
            videoRef.current.loop = true;
            videoRef.current.play();
          }}
        >
          <PlayButtonSvg />
        </div>
        <div
          className={`size-16 flex items-center justify-center bg-black/20 rounded-full backdrop-blur-sm transition-all duration-300 ${
            isPlaying && hovered ? 'block' : 'hidden'
          }`}
          onClick={() => {
            setIsPlaying(false);
            videoRef.current.pause();
          }}
        >
          <PauseButtonSvg />
        </div>
      </div>

      {/* Video container */}
      <div className="h-full w-full border border-[rgba(255,255,255,0.8)] rounded-2xl overflow-hidden">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={`${import.meta.env.VITE_SERVER_URL}/${video}`}
        ></video>
      </div>
    </div>
  );
};

export default VideoGalleryContainer;

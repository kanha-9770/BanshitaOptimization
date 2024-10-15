import { useRef } from "react";
import data from "../Constants/hero.json";

const ImageSlider: React.FC = () => {
  const homeData = data.find((item) => item.category === "HeroSection")?.data;
  const videoSources = homeData?.video?.sources || [];
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!videoSources.length) {
    return <p>No video available.</p>;
  }

  return (
    <div className="relative w-full mx-auto h-full">
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-2xl"
        autoPlay={true}
        loop
        muted
        controls={false}
        playsInline
        preload="metadata" // Preload only metadata for faster loading
      >
        {videoSources.map((source, index) => (
          <source key={index} src={source.src} type={source.type} />
        ))}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ImageSlider;
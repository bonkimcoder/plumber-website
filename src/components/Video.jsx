import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import sliderImage from "../assets/slider_1.jpg"; // Background image

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section
      style={{
        backgroundImage: `url(${sliderImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative flex justify-center items-center text-center text-white font-semibold w-full h-screen overflow-hidden"
    >
      {/* If video is playing, show iframe; otherwise show play button and text */}
      {!isPlaying && (
        <div className="relative z-10 flex flex-col justify-center items-center mb-10 cursor-pointer">
          <FaPlay
            size={80}
            className="mb-6 hover:text-gray-300 transition-colors duration-300"
            onClick={handlePlayClick}
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 font-extrabold tracking-wider">
            Experience Excellence in Every Drop
          </h2>
          <p className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            See how our expert plumbing services transform homes and businesses
            across Kenya. Trust us for solutions that last.
          </p>
        </div>
      )}

      {/* YouTube video as the background */}
      {isPlaying && (
        <div className="absolute inset-0 w-full h-full z-10">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/nrbq_t0chB0?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; fullscreen; controls"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Fallback background image dark overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      )}
    </section>
  );
};

export default Video;

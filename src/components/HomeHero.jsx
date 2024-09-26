import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider_1 from "../assets/slider_1.jpg";
import slider_2 from "../assets/slider_2.jpg";
import slider_3 from "../assets/slider_3.jpg";
import slider_4 from "../assets/slider_4.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomeHero = () => {
  // Animation for deleting and rewriting the text
  const textAnimation = {
    initial: { scale: 1, x: 0 },
    animate: {
      scale: [1, 0.5, 1], // Scale down to 0, then back to 1
      x: [0, 0, 0], // Move to the right and back
      transition: {
        duration: 6,
        ease: "easeInOut",
        times: [0, 0.5, 1], // At 0s scale 1, at 1s scale 0, at 2s scale back to 1
        repeat: Infinity, // Make it repeat indefinitely
        repeatType: "loop", // Ensure it loops
      },
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  const images = [slider_1, slider_2, slider_3, slider_4];

  return (
    <Slider {...settings} className="h-full relative">
      {images.map((image, index) => (
        <div key={index} className="relative h-full">
          <div
            className="h-full bg-cover bg-center relative"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div
              className="absolute inset-0 bg-black bg-opacity-70"
              style={{ zIndex: 1 }}
            ></div>

            <div
              className="relative h-screen flex items-center justify-center"
              style={{ zIndex: 2 }}
            >
              <div className="text-center text-white px-4">
                {/* Apply animation only to h1 */}
                <motion.h1
                  className="text-4xl md:text-5xl font-bold"
                  initial="initial"
                  animate="animate"
                  variants={textAnimation}
                  key="animated-text"
                >
                  Professional plumbers for a professional job
                </motion.h1>

                {/* Static paragraph */}
                <p className="mt-4 text-lg md:text-2xl">
                  Your go-to team for all your plumbing issues either at home,
                  office or business premises
                </p>

                <div className="flex gap-8 justify-center items-center">
                  <Link
                    to="/about-us"
                    className="mt-8 text-xl inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 ease-in-out"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="mt-8 text-xl inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 ease-in-out"
                    id="booking"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HomeHero;

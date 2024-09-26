import { Link } from "react-router-dom";
import ctaImage from "../assets/slider_4.jpg";

const CTA = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${ctaImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative h-96 w-full py-20 my-16 bg-gray-800 bg-opacity-60"
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="relative flex flex-col md:flex-row justify-between items-center max-w-7xl w-full mx-auto px-5 md:px-0 text-center md:text-left">
        {/* Left Text Section */}
        <div className="flex-1 mb-10 md:mb-0 text-white space-y-6">
          <p className="text-lg md:text-xl font-medium">
            Call us now:{" "}
            <a
              href="tel:+254724617731"
              className="underline hover:text-yellow-400"
            >
              0724617731
            </a>
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-10 tracking-wider">
            Are you looking for professional plumbing services?
          </h2>
        </div>

        {/* CTA Button */}
        <div className="flex flex-1 justify-center items-end md:justify-end w-full md:w-auto">
          <Link
            to="/contact"
            className="bg-yellow-500 text-black py-4 px-8 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 ease-in-out"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;

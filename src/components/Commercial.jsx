import { FaCheck } from "react-icons/fa";
import commercialImg from "../assets/commercial.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Commercial = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <section id="commercial" className="my-16 py-16 px-5 md:px-10">
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-12 text-gray-800">
        Commercial Plumbing
      </h2>
      <div className="flex flex-col lg:flex-row max-w-7xl w-full mx-auto items-start">
        {/* Left container */}
        <div
          data-aos="zoom-in"
          className="flex flex-col flex-1 lg:pr-12 space-y-6"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            We understand the complexities and demands of commercial plumbing
            systems. Whether it’s a flat, an office building or a large
            industrial complex, our team is equipped to handle a wide range of
            plumbing needs. We work efficiently to minimize disruptions to your
            business operations while ensuring your plumbing is functional and
            reliable.
          </p>
          <h4 className="text-2xl font-semibold text-gray-800 mt-6">
            Our Residential Plumbing Services Include:
          </h4>

          {/* Service List */}
          <div className="space-y-4">
            <p className="flex items-start space-x-2">
              <FaCheck size={20} className="text-green-600 flex-shrink-0" />
              <span className="text-lg">
                <strong>Leak Detection and Repair:</strong> We quickly identify
                and repair leaks, preventing costly water damage and wasted
                water.
              </span>
            </p>
            <p className="flex items-start space-x-2">
              <FaCheck size={20} className="text-green-600 flex-shrink-0" />
              <span className="text-lg">
                <strong>Pipe Installation and Replacement:</strong> Whether
                you’re building a new home or replacing old pipes, our experts
                ensure that your plumbing system is installed with precision and
                care.
              </span>
            </p>
            <p className="flex items-start space-x-2">
              <FaCheck size={20} className="text-green-600 flex-shrink-0" />
              <span className="text-lg">
                <strong>Bathroom and Kitchen Plumbing:</strong> From faucet
                repairs to complete bathroom or kitchen overhauls, we handle all
                aspects of plumbing installation and upgrades.
              </span>
            </p>
            <p className="flex items-start space-x-2">
              <FaCheck size={20} className="text-green-600 flex-shrink-0" />
              <span className="text-lg">
                <strong>Clog Removal:</strong> We resolve stubborn clogs in
                sinks, toilets, and drains using advanced tools, restoring your
                plumbing system to full functionality.
              </span>
            </p>
            <p className="flex items-start space-x-2">
              <FaCheck size={20} className="text-green-600 flex-shrink-0" />
              <span className="text-lg">
                <strong>Water Heater Installation and Repair:</strong> Keep your
                hot water flowing with our water heater services, including
                installation, maintenance, and repair.
              </span>
            </p>
          </div>

          {/* Contact Us Button */}
          <div className="mt-8 flex justify-start lg:justify-end">
            <Link
              to="/contact"
              className="py-3 px-8 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md transition-colors duration-300 cursor-pointer"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right container - Image */}
        <div data-aos="zoom-in" className="flex-1 mt-10 lg:mt-0 lg:pl-10">
          <img
            src={commercialImg}
            alt="Commercial Plumbing"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Commercial;

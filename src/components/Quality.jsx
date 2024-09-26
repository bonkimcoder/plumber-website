import { Link as ScrollLink } from "react-scroll";
import qImage from "../assets/slider_2.jpg";

const Quality = () => {
  return (
    <section className="py-20  bg-gray-100">
      <div className="flex flex-col-reverse lg:flex-row max-w-7xl  w-full mx-auto py-20 px-5 lg:py-28 lg:px-0">
        {/* Left Side: Image */}
        <div className="flex-1 mt-10 lg:mt-0">
          <img
            src={qImage}
            alt="Our Commitment to Quality"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="flex flex-col flex-1 gap-6 lg:gap-8 lg:pl-20">
          <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
            Our Commitment to Quality
          </h2>
          <p className="text-gray-700 text-lg leading-8">
            At the core of our service is an unwavering dedication to quality.
            We take pride in using the best materials, following industry best
            practices, and delivering workmanship that exceeds expectations.
            Whether it’s a small repair or a large-scale installation, we
            guarantee reliable, long-lasting solutions that meet your needs and
            ensure your satisfaction.
          </p>
          <ScrollLink
            to="booking"
            smooth={true}
            duration={500}
            className="cursor-pointer font-semibold max-w-52 py-5 px-8 text-white rounded shadow-md bg-black hover:bg-green-900 transition duration-300 ease-in-out"
          >
            Get Started
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Quality;

import { FaCheck } from "react-icons/fa";
import ilImage from "../assets/slider_1.jpg";

const IndustryLeaders = () => {
  return (
    <section className="flex flex-col lg:flex-row max-w-7xl w-full mx-auto py-20 px-5 lg:py-28 lg:px-0">
      {/* Left Side: Text Content */}
      <div className="flex flex-col flex-1 gap-6 lg:gap-8 lg:pr-20">
        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
          We are Industry Leaders
        </h2>
        <p className="text-gray-700 text-lg leading-8">
          With years of experience and a proven track record, we stand at the
          forefront of the plumbing industry. Our commitment to quality,
          innovation, and customer satisfaction sets us apart, making us the
          trusted choice for both residential and commercial plumbing solutions.
          We continuously invest in the latest tools and techniques to ensure
          every job is done right the first time.
        </p>

        {/* Benefits List */}
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center font-semibold text-xl">
            <FaCheck className="text-green-600 mr-3" /> Worry-free services
          </li>
          <li className="flex items-center font-semibold text-xl">
            <FaCheck className="text-green-600 mr-3" /> Trusted & experienced
          </li>
          <li className="flex items-center font-semibold text-xl">
            <FaCheck className="text-green-600 mr-3" /> Quality work
          </li>
          <li className="flex items-center font-semibold text-xl">
            <FaCheck className="text-green-600 mr-3" /> Service guarantee
          </li>
        </ul>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 mt-10 lg:mt-0">
        <img
          src={ilImage}
          alt="Industry Leaders"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default IndustryLeaders;

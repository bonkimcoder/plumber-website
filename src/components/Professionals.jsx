import { Link } from "react-router-dom";
import pImage from "../assets/slider_3.jpg";
import { FaPlay } from "react-icons/fa";
const Professionals = () => {
  return (
    <section className="flex flex-col lg:flex-row max-w-7xl w-full mx-auto py-20 px-5 lg:py-28 lg:px-0">
      {/* Left Side: Text Content */}
      <div className="flex flex-col flex-1 gap-6 lg:gap-8 lg:pr-20">
        <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight">
          Trusted plumbing professionals in Kenya
        </h2>
        <p className="text-gray-700 text-lg leading-8">
          We’ve built a reputation as one of Kenya’s most trusted plumbing
          companies, delivering reliable and efficient services to homes and
          businesses across the country. Our skilled and certified team ensures
          every project is handled with professionalism and care, making us the
          go-to choice for all your plumbing needs.
        </p>

        <Link
          to="#"
          className="flex gap-4 justify-center items-center text-xl cursor-pointer font-semibold max-w-52 py-5 px-8 text-white rounded shadow-md bg-black hover:bg-green-900 transition duration-300 ease-in-out"
        >
          Play Video
          <FaPlay />
        </Link>
      </div>

      {/* Right Side: Image */}
      <div className="flex-1 mt-10 lg:mt-0">
        <img
          src={pImage}
          alt="Professionals"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Professionals;

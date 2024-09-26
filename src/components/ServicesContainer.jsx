// import { Link as ScrollLink } from "react-scroll";
import { FaWrench, FaWater, FaShower } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServicesContainer = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in",
      once: true,
    });
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="grid gap-8 px-5 md:px-0 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl w-full mx-auto">
        {/* Card 1 */}
        <div
          data-aos="slide-up"
          className="bg-white md:-mt-[200px] py-12 px-7 flex flex-col justify-center items-center text-center gap-8 rounded-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300"
        >
          <div className="text-green-500 text-5xl mb-4">
            <FaWrench />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 hover:text-white transition duration-300">
            Commercial Plumbing
          </h3>
          <p className="text-gray-600 hover:text-gray-200 transition duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga,
            eaque sit consequatur eum error repellendus? Sequi esse id
            consequatur, nemo vero quam est earum itaque
          </p>
          <Link
            to={{
              pathname: "/services",
              hash: "#commercial", // Add the hash for correct section
            }}
            className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition ease-in-out duration-300"
          >
            Learn More
          </Link>
        </div>

        {/* Card 2 */}
        <div
          data-aos="slide-up"
          className="bg-white md:-mt-[200px] py-12 px-7 flex flex-col justify-center items-center text-center gap-8 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
        >
          <div className="text-green-500 text-5xl mb-4">
            <FaWater />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 hover:text-white transition duration-300">
            Residential Plumbing
          </h3>
          <p className="text-gray-600 hover:text-gray-200 transition duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga,
            eaque sit consequatur eum error repellendus? Sequi esse id
            consequatur, nemo vero quam est earum itaque
          </p>
          <Link
            to={{
              pathname: "/services",
              hash: "#residential", // Add the hash for correct section
            }}
            className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
          >
            Learn More
          </Link>
        </div>

        {/* Card 3 */}
        <div
          data-aos="slide-up"
          className="bg-white md:-mt-[200px] py-12 px-7 flex flex-col justify-center items-center text-center gap-8 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
        >
          <div className="text-green-500 text-5xl mb-4">
            <FaShower />
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 hover:text-white transition duration-300">
            Emergency Plumbing
          </h3>
          <p className="text-gray-600 hover:text-gray-200 transition duration-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fuga,
            eaque sit consequatur eum error repellendus? Sequi esse id
            consequatur, nemo vero quam est earum itaque
          </p>
          <Link
            to={{
              pathname: "/services",
              hash: "#emergency", // Add the hash for correct section
            }}
            className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-8">
        <Link
          to="/services"
          className="btn cursor-pointer font-semibold py-5 px-12 text-white p-2 rounded shadow-md bg-green-600 hover:bg-green-700 transition-colors duration-300"
        >
          View All Services
        </Link>
        <Link
          to="/contact-us"
          className="btn cursor-pointer font-semibold py-5 px-12 text-white p-2 rounded shadow-md bg-green-600 hover:bg-green-700 transition-colors duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default ServicesContainer;

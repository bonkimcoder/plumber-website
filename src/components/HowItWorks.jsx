import { FaMagento, FaPhone } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <section className="py-20  bg-gray-100">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <p className="text-green-600 font-semibold uppercase tracking-wider mb-4">
          How it works
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
          How Plumbing Service Works​
        </h2>
      </div>

      {/* Service Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full mx-auto">
        {/* Step 1 */}
        <div
          data-aos="slide-right"
          className="flex flex-col items-center text-center gap-8 max-h-[800px] h-full py-12 px-7 bg-white shadow-md rounded-lg hover:bg-gray-50 transition duration-300"
        >
          <FaPhone className="text-green-600 text-4xl mb-4" />
          <h5 className="text-xl font-bold mb-4">Consultation & Inspection</h5>
          <p className="text-gray-700 leading-relaxed">
            Get started with a thorough consultation and inspection. Our experts
            will assess the problem or project, discuss your needs, and provide
            a detailed plan of action.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center gap-8 max-h-[800px] h-full py-12 px-7 bg-white shadow-md rounded-lg hover:bg-gray-50 transition duration-300">
          <FaMagento className="text-green-600 text-4xl mb-4" />
          <h5 className="text-xl font-bold mb-4">Tailored Solutions</h5>
          <p className="text-gray-700 leading-relaxed">
            After the consultation, we’ll craft a solution that is specific to
            your needs, ensuring optimal performance and durability.
          </p>
        </div>

        {/* Step 3 */}
        <div
          data-aos="slide-left"
          className="flex flex-col items-center text-center gap-8 max-h-[700px] h-full py-12 px-7 bg-white shadow-md rounded-lg hover:bg-gray-50 transition duration-300"
        >
          <FaPerson className="text-green-600 text-4xl mb-4" />
          <h5 className="text-xl font-bold mb-4">Professional Execution</h5>
          <p className="text-gray-700 leading-relaxed">
            Our skilled team carries out the work efficiently and professionally
            while keeping you informed at every step of the process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

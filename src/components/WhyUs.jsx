import { FaCheck } from "react-icons/fa";
import whyUsImage from "../assets/commercial.jpg";
import whyUsImg from "../assets/slider_3.jpg";

const WhyUs = () => {
  return (
    <section
      className="relative py-16 my-16 w-full h-screen"
      style={{
        backgroundImage: `url(${whyUsImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      <div className="relative flex items-center flex-col md:flex-row max-w-7xl h-full w-full mx-auto  text-white px-5 md:px-0">
        {/* left-content */}
        <div className="flex-1 mb-10 md:mb-0 md:pr-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why choose us?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            With a team of experienced, licensed plumbers, we deliver prompt,
            professional service for both residential and commercial needs.
            Whether it’s routine maintenance or emergency repairs, we use
            top-grade materials and the latest techniques to ensure long-lasting
            solutions. More reasons why you should choose us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-10">
            <ul>
              <li className="flex items-center mb-3">
                <FaCheck
                  size={20}
                  className="text-white mr-3 p-1 border-2 rounded-full"
                />
                <span className="text-lg">Quality Service</span>
              </li>
              <li className="flex items-center mb-3">
                <FaCheck
                  size={20}
                  className="text-white mr-3 p-1 border-2 rounded-full"
                />
                <span className="text-lg">Affordable Service</span>
              </li>
              <li className="flex items-center mb-3">
                <FaCheck
                  size={20}
                  className="text-white mr-3 p-1 border-2 rounded-full"
                />
                <span className="text-lg">Efficient Service</span>
              </li>
            </ul>
            <ul>
              <li className="flex items-center mb-3">
                <FaCheck
                  size={20}
                  className="text-white mr-3 p-1 border-2 rounded-full"
                />
                <span className="text-lg">Expert Technicians</span>
              </li>
              <li className="flex items-center mb-3">
                <FaCheck
                  size={20}
                  className="text-white mr-3 p-1 border-2 rounded-full"
                />
                <span className="text-lg">Fast Response</span>
              </li>
              <li className="flex items-center mb-3">
                <FaCheck
                  size={20}
                  className="text-white mr-3 p-1 border-2 rounded-full"
                />
                <span className="text-lg">Guaranteed Satisfaction</span>
              </li>
            </ul>
          </div>
        </div>
        {/* right-img */}
        <div className="flex-1 hidden lg:block">
          <img
            src={whyUsImg}
            alt="Why Us"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

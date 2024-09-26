import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <section className="py-20 my-20 bg-gray-100">
      <div className="max-w-7xl w-full mx-auto px-5 md:px-0">
        {/* Section Title */}
        <div className="flex flex-col justify-start items-center text-center mb-12">
          <p className="text-lg text-blue-600 font-semibold">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What our customers are saying
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Testimonial 1 */}
          <div
            data-aos="slide-right"
            className="bg-white p-6 shadow-lg rounded-lg flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <RiDoubleQuotesL className="text-blue-600 text-4xl mb-4" />
            <p className="text-gray-600 mb-6">
              We’ve worked with them on several commercial projects, and they
              always deliver exceptional results. Reliable, timely, and great
              attention to detail.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://placehold.co/150x150"
                alt="Customer photo"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h6 className="font-bold text-lg text-gray-800">Judy Otieno</h6>
                <p className="text-sm text-gray-500">Kitale</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div
            data-aos="slide-up"
            className="bg-white p-6 shadow-lg rounded-lg flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <RiDoubleQuotesL className="text-blue-600 text-4xl mb-4" />
            <p className="text-gray-600 mb-6">
              We’ve worked with them on several commercial projects, and they
              always deliver exceptional results. Reliable, timely, and great
              attention to detail.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://placehold.co/150x150"
                alt="Customer photo"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h6 className="font-bold text-lg text-gray-800">
                  Denni Muikaria
                </h6>
                <p className="text-sm text-gray-500">Meru</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div
            data-aos="slide-left"
            className="bg-white p-6 shadow-lg rounded-lg flex-1 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          >
            <RiDoubleQuotesL className="text-blue-600 text-4xl mb-4" />
            <p className="text-gray-600 mb-6">
              We’ve worked with them on several commercial projects, and they
              always deliver exceptional results. Reliable, timely, and great
              attention to detail.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://placehold.co/150x150"
                alt="Customer photo"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h6 className="font-bold text-lg text-gray-800">Tess Wambui</h6>
                <p className="text-sm text-gray-500">Kisumu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

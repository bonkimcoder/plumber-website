import qImage from "../assets/slider_2.jpg";

const Mission = () => {
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
          <div>
            <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-8">
              At the core of our service is an unwavering dedication to quality.
              We take pride in using the best materials, following industry best
              practices, and delivering workmanship that exceeds expectations.
              Whether it’s a small repair or a large-scale installation, we
              guarantee reliable, long-lasting solutions that meet your needs
              and ensure your satisfaction.
            </p>
          </div>
          <div>
            <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-6">
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg leading-8">
              At the core of our service is an unwavering dedication to quality.
              We take pride in using the best materials, following industry best
              practices, and delivering workmanship that exceeds expectations.
              Whether it’s a small repair or a large-scale installation, we
              guarantee reliable, long-lasting solutions that meet your needs
              and ensure your satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

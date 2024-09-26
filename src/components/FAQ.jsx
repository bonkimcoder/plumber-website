import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { faqsRight, faqsLeft } from "../assets/data";

const FAQ = () => {
  const [openIndexLeft, setOpenIndexLeft] = useState(null);
  const [openIndexRight, setOpenIndexRight] = useState(null);

  const toggleFAQLeft = (index) => {
    setOpenIndexLeft(openIndexLeft === index ? null : index);
  };

  const toggleFAQRight = (index) => {
    setOpenIndexRight(openIndexRight === index ? null : index);
  };

  return (
    <section className="py-20 my-20">
      <h2 className="text-center text-3xl md:text-5xl font-bold mb-8 md:mb-16">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row max-w-7xl w-full mx-auto px-5 lg:px-0">
        {/* left-side */}
        <div className="flex-1 pr-2">
          {faqsLeft.map((faq, index) => (
            <div key={index} className="p-5">
              <h2
                className="flex justify-between text-xl cursor-pointer"
                onClick={() => toggleFAQLeft(index)}
              >
                {faq.question}{" "}
                {openIndexLeft === index ? (
                  <FaAngleDown size={27} />
                ) : (
                  <FaAngleUp size={27} />
                )}{" "}
              </h2>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndexLeft === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-lg ml-4 mt-5 p-5 bg-gray-100">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* right-side */}
        <div className="flex-1 pl-2">
          {faqsRight.map((faq, index) => (
            <div key={index} className="p-5">
              <h2
                className="flex justify-between text-xl cursor-pointer"
                onClick={() => toggleFAQRight(index)}
              >
                {faq.question}{" "}
                {openIndexRight === index ? (
                  <FaAngleDown size={27} />
                ) : (
                  <FaAngleUp size={27} />
                )}{" "}
              </h2>
              <div
                className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndexRight === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-lg ml-4 mt-5 p-5 bg-gray-100">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

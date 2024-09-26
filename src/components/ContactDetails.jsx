import { useState } from "react";
import { FaPhone, FaVoicemail } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { Link } from "react-scroll";

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 my-16 bg-gray-50">
      <div className="flex flex-col lg:flex-row max-w-7xl w-full mx-auto px-5 md:px-0 gap-12">
        {/* Left - Map & Contact Info */}
        <div className="w-full lg:w-1/3 h-[500px] lg:h-[700px]">
          <div className="h-1/2 w-full mb-6 lg:mb-0">
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=platnum%20plaza&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
              title="platnum plaza"
              aria-label="platnum plaza"
              className="w-full h-full rounded-lg shadow-md"
            ></iframe>
          </div>
          <div className="bg-black w-full h-1/2 p-8 text-white shadow-md">
            <h4 className="text-2xl lg:text-3xl font-semibold mb-6">
              Contact us today
            </h4>
            <ul className="flex flex-col justify-center items-start space-y-4">
              <li className="flex items-center text-lg">
                <FaPhone className="mr-3" />
                <span>+254724617....</span>
              </li>
              <li className="flex items-center text-lg">
                <FaVoicemail className="mr-3" />
                <span>info@plumbers.co.ke</span>
              </li>
              <li className="flex items-center text-lg">
                <FaMapLocation className="mr-3" />
                <span>Platinum Plaza</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right - Contact Form */}
        {isSubmitted ? (
          <div className="flex justify-center items-center flex-1 lg:pl-12 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center">
              Thank you for contacting Prime Plumbers, <br /> we will get back
              to you soon.
            </h2>
          </div>
        ) : (
          <div className="flex-1 lg:pl-12 bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Send us a message
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have a question, need a quote, or want to schedule a service?
                We’re here to help! Whether it’s a small repair or a large
                project, we’re ready to provide the plumbing solutions you need.
              </p>

              {/* Name Inputs */}
              <div className="flex flex-col lg:flex-row gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  required
                  value={formData.fname}
                  onChange={handleChange}
                  className="p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className="p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Email & Phone Inputs */}
              <div className="flex flex-col lg:flex-row gap-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Your Number"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              {/* Service Selection */}
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                >
                  <option value="">Select Service *</option>
                  <option value="Pipe Installation and Replacement">
                    Pipe Installation and Replacement
                  </option>
                  <option value="Leak Detection and Repair">
                    Leak Detection and Repair
                  </option>
                  <option value="Clog Removal">Clog Removal</option>
                  <option value="Water Heater Installation and Repair">
                    Water Heater Installation and Repair
                  </option>
                  <option value="Drain and Sewer Line Services">
                    Drain and Sewer Line Services
                  </option>
                  <option value="Fixture Installation and Repair">
                    Fixture Installation and Repair
                  </option>
                </select>
              </div>

              {/* Message Input */}
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="p-4 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <input
                type="submit"
                className="inline-block py-3 px-10 bg-green-800 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 cursor-pointer"
                value="Send Message"
              />
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactDetails;

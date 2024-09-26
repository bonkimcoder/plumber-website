import { useState } from "react";

const Booking = () => {
  // Form state for controlled inputs
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, like sending data to a server
    console.log(formData);
  };

  return (
    <section className="flex flex-col justify-center items-center bg-gray-100 py-10 px-5 max-w-7xl w-full mx-auto shadow-md rounded-lg my-28">
      <h2 className="text-3xl font-semibold text-center mb-8" >
        Book Appointment
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-full sm:flex-row sm:gap-4"
      >
        {/* Name input */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 flex-1"
        />

        {/* Phone Number input */}
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 flex-1"
        />

        {/* Service dropdown */}
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 flex-1"
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

        {/* Submit Button */}
        <input
          type="submit"
          value="Book Appointment"
          className="p-4 bg-green-600 text-white rounded-md cursor-pointer hover:bg-green-700 transition duration-200"
        />
      </form>
    </section>
  );
};

export default Booking;

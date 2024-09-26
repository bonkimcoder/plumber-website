import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-20 pb-5 mt-20 bg-green-900 text-white">
      <div className="max-w-7xl w-full mx-auto px-5 md:px-0">
        <div className="flex">
          <div className="flex-1 pr-10">
            <Link to="/" className="mb-16">
              <img src={logo} alt="" className="mb-8 w-28" />
            </Link>
            <p>
              We deliver prompt, professional service for both residential and
              commercial needs.
            </p>
            <p className="pt-5">
              Whether it’s routine maintenance or emergency repairs, we ensure
              long-lasting solutions.
            </p>
          </div>
          <div className="flex flex-col items-center flex-1">
            <h2 className="text-3xl font-semibold mb-8">Quick Links</h2>
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
            <Link to="/about-us" className="hover:text-yellow-500 mt-2">
              About
            </Link>
            <Link to="/services" className="hover:text-yellow-500 mt-2">
              Services
            </Link>
            <Link to="/blog" className="hover:text-yellow-500 mt-2">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-yellow-500 mt-2">
              Contact
            </Link>
          </div>
          <div className="flex flex-col items-center flex-1">
            <h2 className="text-3xl font-semibold mb-8">Services</h2>
            <Link to="/services#commercial" className="hover:text-yellow-500">
              Commercial
            </Link>
            <Link
              to="/services#residential"
              className="hover:text-yellow-500 mt-2"
            >
              Residential
            </Link>
            <Link
              to="/services#emergency"
              className="hover:text-yellow-500 mt-2"
            >
              Emergency
            </Link>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-8">Contact Info</h2>
            <div>
              <h2 className="text-xl font-bold">Location</h2>
              <p>Tom Mboya Street</p>
            </div>
            <div className="py-10">
              <h2 className="text-xl font-bold">Opening Hours</h2>
              <p>8:00 AM-5:00 PM</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Phone Number</h2>
              <p>+254724617...</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          Copyright &copy; - {currentYear}.{" "}
          <span>
            Developed By{" "}
            <a
              href="https://github.com/bonkimcoder"
              target="_blank"
              className="font-bold tracking-wide hover:text-blue-500 hover:underline transition-all duration-300"
            >
              Boniface Kimani
            </a>
            , Founder{" "}
          </span>
          <a
            href="https://finytab.com/"
            target="_blank"
            className="font-bold tracking-wide hover:text-blue-500 hover:underline transition-all duration-300"
          >
            Finytab Solutions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

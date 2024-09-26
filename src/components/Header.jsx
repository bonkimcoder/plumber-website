import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  return (
    <>
      <nav className="fixed z-40 top-10 left-1/2 -translate-x-1/2 max-w-7xl w-full h-[80px] bg-white shadow-lg">
        <div className="flex items-center justify-between h-full px-4 lg:px-5">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="w-28" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-semibold text-xl h-full">
            <li className="flex items-center justify-center h-full">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-800 text-white px-4 py-2 w-full h-full flex items-center justify-center"
                    : "hover:bg-green-800 hover:text-white px-4 py-2 w-full h-full flex items-center justify-center"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="flex items-center justify-center h-full">
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-800 text-white px-4 py-2 w-full h-full flex items-center justify-center"
                    : "hover:bg-green-800 hover:text-white px-4 py-2 w-full h-full flex items-center justify-center"
                }
              >
                About
              </NavLink>
            </li>
            <li className="flex items-center justify-center h-full">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-800 text-white px-4 py-2 w-full h-full flex items-center justify-center"
                    : "hover:bg-green-800 hover:text-white px-4 py-2 w-full h-full flex items-center justify-center"
                }
              >
                Services
              </NavLink>
            </li>
            <li className="flex items-center justify-center h-full">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-800 text-white px-4 py-2 w-full h-full flex items-center justify-center"
                    : "hover:bg-green-800 hover:text-white px-4 py-2 w-full h-full flex items-center justify-center"
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="flex items-center justify-center h-full">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-800 text-white px-4 py-2 w-full h-full flex items-center justify-center"
                    : "hover:bg-green-800 hover:text-white px-4 py-2 w-full h-full flex items-center justify-center"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Contact and Search (always visible) */}
          <div className="hidden md:flex text-xl justify-center items-center">
            <div className="mr-5">
              Call us:
              <a
                href="tel:+254724617731"
                className="font-semibold text-green-800 hover:text-green-600"
              >
                +254724617731
              </a>
            </div>
            <FaSearch
              size={27}
              color="#aaa"
              className="cursor-pointer"
              onClick={toggleSearch}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={handleMenuToggle}>
              {isMobileMenuOpen ? (
                <FaTimes size={27} color="#333" />
              ) : (
                <FaBars size={27} color="#333" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden bg-white absolute top-16 left-0 w-full p-4 shadow-lg`}
        >
          <ul className="flex flex-col gap-4 font-semibold text-xl">
            <li className="hover:bg-green-800 hover:text-white px-4 py-2 rounded">
              <Link to="/" onClick={handleMenuToggle}>
                Home
              </Link>
            </li>
            <li className="hover:bg-green-800 hover:text-white px-4 py-2 rounded">
              <Link to="/about-us" onClick={handleMenuToggle}>
                About
              </Link>
            </li>
            <li className="hover:bg-green-800 hover:text-white px-4 py-2 rounded">
              <Link to="/services" onClick={handleMenuToggle}>
                Services
              </Link>
            </li>
            <li className="hover:bg-green-800 hover:text-white px-4 py-2 rounded">
              <Link to="/blog" onClick={handleMenuToggle}>
                Blog
              </Link>
            </li>
            <li className="hover:bg-green-800 hover:text-white px-4 py-2 rounded">
              <Link to="/contact" onClick={handleMenuToggle}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Contact and Search */}
          <div className="flex flex-col items-start mt-4 text-lg">
            <div className="mb-4">
              Call us:
              <a
                href="tel:+254724617731"
                className="font-semibold text-green-800 hover:text-green-600"
              >
                +254724617731
              </a>
            </div>
            <FaSearch
              size={27}
              color="#aaa"
              className="cursor-pointer"
              onClick={toggleSearch}
            />
          </div>
        </div>
      </nav>
      {showSearch && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <input
            type="text"
            placeholder="Search..."
            className="w-2/3 md:w-1/3 p-4 text-xl rounded-md shadow-lg outline-none text-black"
            autoFocus
            ref={searchRef}
          />
        </div>
      )}
    </>
  );
};

export default Header;

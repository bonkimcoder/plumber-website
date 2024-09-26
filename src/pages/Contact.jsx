import HeroAll from "../components/HeroAll";
import slider_2 from "../assets/slider_2.jpg";
import slider_3 from "../assets/slider_3.jpg";
import slider_4 from "../assets/slider_4.jpg";
import { useEffect } from "react";
import ContactDetails from "../components/ContactDetails";
import FAQ from "../components/FAQ";
import Subscribe from "../components/Subscribe";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const images = [slider_3, slider_4, slider_2];
  useEffect(() => {
    document.title = "Contact Us - " + window.location.hostname;
  }, []);

  const { hash } = useLocation();

  useEffect(() => {
    // Smoothly Scroll to the top of the page initially
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Scroll to the specific section if there's a hash
    if (hash) {
      const element = document.getElementById(hash.replace("#", "")); // Remove the hash for ID matching
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="relative">
      <HeroAll title="Contact Us" images={images} />
      <ContactDetails />
      <FAQ />
      <Subscribe />
    </div>
  );
};

export default Contact;

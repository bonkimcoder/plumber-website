import HeroAll from "../components/HeroAll";
import slider_2 from "../assets/slider_2.jpg";
import slider_3 from "../assets/slider_3.jpg";
import slider_4 from "../assets/slider_4.jpg";
import { useEffect } from "react";
import Commercial from "../components/Commercial";
import Emergency from "../components/Emergency";
import Residential from "../components/Residential";
import { useLocation } from "react-router-dom";
import WhyUs from "../components/WhyUs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";

const Services = () => {
  const images = [slider_4, slider_3, slider_2];
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

  useEffect(() => {
    document.title = "Our Services - " + window.location.hostname;
  }, []);

  return (
    <div className="relative">
      <HeroAll title="Our Services" images={images} />
      <Commercial />
      <Residential />
      <Emergency />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Services;

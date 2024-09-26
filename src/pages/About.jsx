import HeroAll from "../components/HeroAll";
import slider_2 from "../assets/slider_2.jpg";
import slider_3 from "../assets/slider_3.jpg";
import slider_4 from "../assets/slider_4.jpg";
import History from "../components/History";
import Mission from "../components/Mission";
import SubHero from "../components/SubHero";
import Services from "../components/ServicesContainer";
import Video from "../components/Video";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Booking from "../components/Booking";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  useEffect(() => {
    document.title = "About Us - " + window.location.hostname;
  }, []);
  const images = [slider_2, slider_3, slider_4];

  const { hash } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="relative">
      <HeroAll title="About Us" images={images} />
      <History />
      <Mission />
      <SubHero />
      <Services />
      <Video />
      <Testimonials />
      <Booking />
      <CTA />
    </div>
  );
};

export default About;

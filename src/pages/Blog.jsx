import HeroAll from "../components/HeroAll";
import Blogs from "../components/Blogs";
import slider_2 from "../assets/slider_2.jpg";
import slider_3 from "../assets/slider_3.jpg";
import slider_4 from "../assets/slider_4.jpg";
import { useEffect } from "react";
import CTA from "../components/CTA";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - " + window.location.hostname;
  }, []);
  const images = [slider_4, slider_3, slider_2];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="relative">
      <HeroAll title="Blog" images={images} />
      <Blogs />
      <CTA />
    </div>
  );
};

export default Blog;

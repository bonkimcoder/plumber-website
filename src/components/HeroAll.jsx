import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroAll = ({ title, images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="h-full ">
      {images.map((image, index) => (
        <div key={index} className="h-full">
          <div
            className="h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div
              className={`h-screen bg-black bg-opacity-70 flex items-center justify-center`}
            >
              <div className="text-center text-white px-4 z-50">
                <h1 className="text-4xl md:text-7xl font-bold leading-10 ">
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroAll;

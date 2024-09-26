import gallery_1 from "../assets/gallery_1.jpg";
import gallery_2 from "../assets/gallery_2.jpg";
import gallery_3 from "../assets/gallery_3.jpg";
import gallery_4 from "../assets/gallery_4.jpg";
import gallery_5 from "../assets/gallery_5.jpg";
import gallery_6 from "../assets/gallery_6.jpg";

const Gallery = () => {
  const gImages = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
  ];

  return (
    <section className="py-16 my-16">
      <div className="text-center mb-10">
        <p className="text-xl font-semibold text-gray-600">Photo Gallery</p>
        <h2 className="text-4xl font-bold my-4">Our Latest Projects</h2>
        <p className="text-lg text-gray-500">
          Check out our recent works and get inspired!
        </p>
      </div>
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-0">
          {gImages.map((g, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={g}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

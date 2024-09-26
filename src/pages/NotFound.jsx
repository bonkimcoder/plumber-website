import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.title = "NotFound - " + window.location.hostname;
  }, []);
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-gray-50 text-center px-5">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
        Oops...
      </h2>

      <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-500 mb-8">
        404 - Page Not Found
      </h2>

      <p className="text-lg md:text-2xl lg:text-3xl text-gray-600 mb-8">
        Sorry, the page you're looking for doesn't exist.
      </p>

      {/* Button to Home */}
      <Link
        to="/"
        className="py-3 px-8 bg-green-700 text-white text-lg md:text-xl font-semibold rounded-md hover:bg-green-500 transition-colors duration-300 ease-in-out"
      >
        Go to Home Page
      </Link>
    </section>
  );
};

export default NotFound;

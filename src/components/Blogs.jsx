import { Link } from "react-router-dom";
import { blogs } from "../assets/data";
import { FaArrowRight } from "react-icons/fa";

const Blogs = () => {
  return (
    <section className="py-16 my-16 bg-gray-50">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">News Articles</h2>
        <p className="text-lg text-gray-500 mt-4">
          Stay updated with our latest insights and stories.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full mx-auto px-5 md:px-0">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 "
          >
            {/* Blog Image */}
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-48 object-cover cursor-pointer"
            />
            {/* Blog Content */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center text-sm text-gray-500">
                <p>{blog.date}</p>
                <span className="mx-2">/</span>
                <p>{blog.category}</p>
              </div>
              <Link to="#" className="hover:underline">
                <h2 className="text-2xl font-semibold text-gray-800 hover:text-green-700">
                  {blog.title}
                </h2>
              </Link>
              <Link
                to="#"
                className="flex items-center text-green-600 hover:text-green-500 font-medium"
              >
                Read More
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;

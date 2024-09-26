import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import subImage from "../assets/gallery_2.jpg";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const messages = [
    "to our newsletter now",
    "and get our latest news",
    "for more information",
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [messages.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setIsSubscribed(true);
  };

  const textAnimation = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  };

  return (
    <section
      className="relative py-20 my-20 w-full max-h-[700px] h-full"
      style={{
        backgroundImage: `url(${subImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      <div className="relative max-w-7xl w-full mx-auto px-5 md:px-0">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-white flex justify-center items-center">
          <span>Subscribe&nbsp;</span>
          <div
            style={{
              width: "360px",
              overflow: "hidden",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentMessageIndex}
                initial={textAnimation.initial}
                animate={textAnimation.animate}
                exit={textAnimation.exit}
                transition={textAnimation.transition}
                className="inline-block"
              >
                {messages[currentMessageIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </h2>
        {isSubscribed ? (
          <div>
            <h2 className="text-3xl font-semibold text-white text-center mt-8">
              Thank you for subscribing
            </h2>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-center mt-7">
            <input
              className="py-3 px-2 mr-4 max-w-96 w-full outline-none"
              type="email"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="submit"
              value="Subscribe"
              className="py-3 px-8 bg-green-900 hover:bg-green-700 text-white uppercase cursor-pointer mt-5 md:mt-0"
            />
          </form>
        )}
      </div>
    </section>
  );
};

export default Subscribe;

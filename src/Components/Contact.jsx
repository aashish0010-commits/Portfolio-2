import React from "react";

export const Contact = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between h-auto lg:h-[320px] items-center animate-rotate-x px-4 lg:px-0">
        <div className="w-full lg:w-[50%] text-justify">
          <h1 className="font-bold text-4xl pb-2 text-[#fff]">Contact Us</h1>
          <h3 className="text-white text-xl font-semibold py-2">GET IN TOUCH</h3>
          <p className="text-white text-lg">
            Hello! I'm Aashish Nepal, a dedicated and creative developer who
            thrives on transforming ideas into seamless digital experiences. With
            a strong foundation in frontend development and a constant hunger for
            learning, I am committed to pushing the boundaries of what's possible
            in the digital landscape.
          </p>
          <div className="py-5">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-location-crosshairs text-2xl text-white"></i>
              <div className="ml-3">
                <h5 className="text-white text-base">My Location</h5>
                <p className="text-white text-base">Imadol — Lalitpur</p>
              </div>
            </div>
            <div className="flex items-center mt-4 gap-2">
              <i className="fa-solid fa-phone text-2xl text-white "></i>
              <div className="ml-3">
                <h5 className="text-white text-base">Phone Number</h5>
                <p className="text-white text-base">+977 9869100969</p>
              </div>
            </div>
            <div className="flex items-center mt-4 gap-2">
              <i className="fa-solid fa-envelope text-2xl text-white"></i>
              <div className="ml-3">
                <h5 className="text-white text-base">Email Address</h5>
                <p className="text-white text-base">nepal.aashish00@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[45%] h-auto lg:h-[400px] mt-10 lg:mt-0 bg-white rounded-xl">
          <div className="p-4">
            <input
              className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-[#680EAD]"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-[#680EAD]"
              type="email"
              placeholder="Your Email"
            />
            <input
              className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-[#680EAD]"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="w-full h-32 bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mb-3 focus:outline-none focus:ring-2 focus:ring-[#680EAD] resize-none"
              placeholder="Your Message"
            ></textarea>
            <button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-[#9107fa] text-white py-2 px-4 rounded-md focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

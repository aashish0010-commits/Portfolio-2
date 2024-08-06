import React from "react";

export const About = () => {
  return (
    <div className="animate-rotate-x">
      <div className="py-16">
        <h1 className="font-bold text-4xl text-center text-[#fff]">
          About <span className="text-[#407EF6]">Me</span>
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Left Images Section */}
          <div className="w-full lg:w-[42%] pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="hidden lg:grid w-full col-span-2 grid-rows-2 gap-7">
              <img
                className="w-full h-[250px] sm:h-[300px] lg:w-[220px] lg:h-[280px] object-cover border-transparent border-solid rounded-lg"
                src="./images/aashish1.jpg"
                alt="img"
              />
              <img
                className="w-full h-[250px] sm:h-[300px] lg:w-[220px] lg:h-[280px object-cover border-transparent border-solid rounded-lg"
                src="./images/aashish2.jpg"
                alt="img"
              />
            </div>
            <div className="hidden lg:flex w-[300px] items-center justify-center row-span-2 pr-20">
              <img
                className="w-full h-[250px] sm:h-[300px] lg:w-[220px] lg:h-[280px] border-transparent border-solid rounded-lg"
                src="./images/aashish3.jpg"
                alt="img"
              />
            </div>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-[52%] h-auto lg:h-[400px] lg:pt-[9%] text-center lg:text-left lg:mt-0">
            <h3 className="font-bold text-xl mb-6 text-[#fff]">Front-End Developer</h3>
            <p className="font-sans text-l text-justify text-[#fff]">
              My journey in the world of development began with a curiosity to
              understand how technology shapes our lives. <br />
              <br />
              Starting with basic coding exercises, I quickly found my passion
              in frontend development – the art of crafting visually appealing
              and user-friendly interfaces that bridge the gap between users
              and technology.
            </p>
            <div className="hidden lg:flex justify-center lg:justify-start mt-4">
              <a
                className="border-transparent rounded-full bg-[#407EF6] hover:bg-hoverHire px-5 py-2 text-base text-white"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Mobile and Tablet Images Section */}
        <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">
          <div className="col-span-1">
            <img
              className="w-full h-[200px] object-cover sm:h-[320px] sm:w-[full] border-transparent border-solid rounded-lg"
              src="./images/aashish1.jpg"
              alt="img"
            />
          </div>
          <div className="col-span-1">
            <img
              className="w-full h-[200px] sm:object-cover sm:h-[320px] sm:w-[full] border-transparent border-solid rounded-lg"
              src="./images/aashish2.jpg"
              alt="img"
            />
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <img
              className="w-[175px] h-[200px] sm:h-[320px] sm:w-[300px] border-transparent border-solid rounded-lg"
              src="./images/aashish3.jpg"
              alt="img"
            />
          </div>
        </div>

        {/* Mobile and Tablet Learn More Button */}
        <div className="lg:hidden flex justify-center mt-12">
          <a
            className="border border-transparent rounded-full bg-[#407EF6] hover:bg-hoverHire px-5 py-2 text-base text-white"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

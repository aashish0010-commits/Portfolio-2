import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-2 py-2">
      {/* Image Section */}
      <div className="w-full lg:w-[30%] lg:order-2 mb-0 lg:mb-12 lg:mt-0 lg:ml-12 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start">
          <div className="relative p-7 sm:p-6 md:p-8">
            {/* Image */}
            <img
              className="relative w-[200px] sm:w-[230px] md:w-[280px] lg:w-[350px] h-auto border-transparent border-solid rounded-lg shadow-custom-black-medium animate-rotate-y hover:animate-zoom-in"
              src="./images/Aashish.jpg"
              alt="Aashish Nepal"
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-[60%] mt-7 lg:mt-0 lg:order-1 text-center lg:text-left">
        <h1 className="text-3xl lg:text-6xl font-sans font-bold">
          Hi, I'm <span className="text-gradient">Aashish Nepal</span>
        </h1>
        <p className="text-customPara mt-5 lg:mt-10 font-sans text-lg lg:text-xl hover:text-white transition duration-300">
          Front-End Developer
        </p>
        <p className="text-customPara font-sans text-lg lg:text-xl mt-4 lg:mt-0 w-full lg:w-[94%] text-justify hover:font-bold py-3 lg:py-5">
          Hello! I'm Aashish Nepal, a dedicated and creative developer who
          thrives on transforming ideas into seamless digital experiences. With
          a strong foundation in frontend development and a constant hunger for
          learning, I am committed to pushing the boundaries of what's possible
          in the digital landscape.
        </p>
        <ul className="flex gap-3 my-5 items-center py-2 justify-center lg:justify-start">
          <li className="border-4 p-2 border-solid border-transparent rounded-md bg-customSpan animate-upDown transform transition-transform duration-300 bg-[#407EF6] hover:bg-hoverHire">
            <a className="text-sm lg:text-base p-3 text-white font-semibold" href="#">
              Hire Me
            </a>
          </li>
          <li className="border-4 p-2 border-solid border-transparent shadow rounded-md animate-upDown transform transition-transform duration-300 hover:bg-hoverCv ">
            <a className="text-sm lg:text-base p-3 font-semibold text-[#407EF6]" href="#">
              My CV
            </a>
          </li>
        </ul>
        <ul className="flex gap-5 text-2xl py-5 justify-center lg:justify-start">
          <li>
            <a href="#" className="animate-fade">
              <i className="text-customFB fa-brands fa-facebook hover:animate-zoom-in"></i>
            </a>
          </li>
          <li>
            <a href="#" className="animate-fade">
              <i className="fa-brands fa-square-instagram text-[#EC499A] hover:animate-zoom-in"></i>
            </a>
          </li>
          <li>
            <a href="#" className="animate-fade">
              <i className="fa-brands fa-github hover:animate-zoom-in"></i>
            </a>
          </li>
          <li>
            <a href="#" className="animate-fade">
              <i className="text-customLink fa-brands fa-linkedin hover:animate-zoom-in"></i>
            </a>
          </li>
          <li>
            <a href="#" className="animate-fade">
              <i className="text-customUpwork fa-brands fa-upwork hover:animate-zoom-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;

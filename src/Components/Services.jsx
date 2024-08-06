import React, { useState, useEffect, useRef } from "react";

const Services = () => {
  const servicesData = [
    {
      imgSrc: 'https://static.vecteezy.com/system/resources/previews/010/795/086/original/web-development-3d-illustration-png.png',
      title: 'Web App Development',
      description: 'Creating fully customized web applications from scratch to meet your unique requirements.'
    },
    {
      imgSrc: 'https://www.freeiconspng.com/uploads/responsive-web-design-icon-21.png',
      title: 'Responsive Design',
      description: 'Designing websites and web applications that adapt to various devices and screen sizes.'
    },
    {
      imgSrc: 'https://vectorified.com/images/developer-icon-33.png',
      title: 'Front-End Development',
      description: 'Building user-friendly interfaces and experiences using modern front-end technologies.'
    },
  ];

  const [isAnimated, setIsAnimated] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.unobserve(servicesRef.current);
        }
      },
      {
        threshold: 0.5, // Adjust threshold as needed
      }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  return (
    <div id="services-section" className="py-20" ref={servicesRef}>
      <h1 className="text-white font-bold text-center pb-6 text-4xl">
        My Services
      </h1>
      <p className="font-bold text-[24px] text-center text-[#0CF5B3] pb-8">
        Expertise That Powers My Web Success
      </p>
      <div className="container mx-auto px-4">
        <ul className="list-none p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <li
              key={service.title}
              className={`p-6 bg-[#6F52EE] border border-transparent rounded-lg flex flex-col items-center text-center ${
                isAnimated ? 'animate-rotate-y' : ''
              }`}
            >
              <img src={service.imgSrc} alt={service.title} className="w-16 h-16 mb-4" />
              <h4 className="text-white font-bold mb-2">{service.title}</h4>
              <p className="text-white">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;

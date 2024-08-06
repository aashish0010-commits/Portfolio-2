import React, { useState } from 'react';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('');

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <Navigation scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <div id="hero" className={`section ${activeSection === 'hero' ? 'active' : ''} bg-[#fff]`}>
        <div className='pt-20 max-w-7xl px-5 box-border m-auto'>
          <Hero />
        </div>
      </div>

      {/* About Section */}
      <div id="about" className={`section ${activeSection === 'about' ? 'active' : ''} bg-gradient-to-b from-gray-800 to-black p-4`}>
        <div className='max-w-7xl px-5 box-border m-auto'>
          <About />
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className={`section ${activeSection === 'skills' ? 'active' : ''} bg-gradient-to-b from-gray-100 to-white`}>
        <div className='max-w-7xl px-5 box-border m-auto'>
          <Skills />
        </div>
      </div>
      
      {/* Services Section */}
      <div id="services" className={`section ${activeSection === 'services' ? 'active' : ''} bg-gradient-to-b from-gray-800 to-black`}>
        <div className='max-w-7xl px-5 box-border m-auto'>
          <Services />
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className={`section ${activeSection === 'contact' ? 'active' : ''} bg-gradient-to-b from-orange-400 to-orange-600`}>
        <div className='max-w-7xl px-5 box-border m-auto'>
          <Contact />
        </div>
      </div>
     
      {/* Footer Section */}
      <div id="footer" className={`section ${activeSection === 'footer' ? 'active' : ''} bg-gradient-to-b from-gray-800 to-black p-2`}>
        <div className='max-w-7xl px-5 box-border m-auto'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

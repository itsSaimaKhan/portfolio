import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/images.png)]"
      style={{
        backgroundSize: 'contain',
        backgroundPosition: 'top left',
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)] px-4">
        {/* Empty space for layout adjustment on large screens */}
        <div className="hidden lg:block"></div>

        {/* Hero Text */}
        <div className="flex justify-center items-center">
          <div className="text-center lg:text-left">
            <p
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              data-aos="fade-up-left"
            >
              I am
            </p>
            <p
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              data-aos="fade-up-left"
            >
              Saima
            </p>
            <p
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              data-aos="fade-up-left"
            >
              Khan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

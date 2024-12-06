import React from 'react';

const About = () => {
  return (
    <div id="about" className="container mx-auto px-4 pt-32">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left"
        data-aos="fade-up-left"
      >
        About Me
      </h2>
      <p
        className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed pt-4 text-center md:text-left"
        data-aos="fade-up-left"
      >
        I am currently pursuing a web development course to build my skills in designing and developing modern
        websites. I am learning technologies like HTML, CSS, JavaScript, and frameworks like React and Next.js. 
        My goal is to create user-friendly and visually appealing websites while continuously improving my knowledge 
        in this field.
      </p>
    </div>
  );
};

export default About;

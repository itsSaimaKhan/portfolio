import React from 'react';
import Image from 'next/image';

const MobileProjects = () => {
  return (
    <div className="w-full p-4 sm:p-6 md:p-8">
      <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[500px]">
        {/* Image Component for Mobile Responsiveness */}
        <Image
          alt="Todo List App"
          src="/images/Todolist.png"
          
          layout="fill" // This makes the image responsive
          objectFit="cover"
          objectPosition="center"
          className="rounded-lg"
        />
      </div>

      <h2
        className="scroll-m-20 border-b border-blue-500 pb-2 text-xl font-semibold
        tracking-tight sm:text-2xl md:text-3xl lg:text-4xl mt-4"
      >
        Education
      </h2>

      <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
        A comprehensive overview of educational projects designed for students and professionals to track learning progress effectively.
      </p>
    </div>
  );
};

export default MobileProjects;

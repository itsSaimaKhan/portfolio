import React from 'react';
import Image from 'next/image';

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div
      className="border border-accent rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto overflow-hidden"
      data-aos="fade-up-left"
    >
      {/* Image Section */}
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center md:text-left">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-700 text-center md:text-left">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {tags.map((el) => (
            <span
              key={el}
              className="px-3 py-1 text-xs sm:text-sm bg-accent text-white rounded-full"
            >
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

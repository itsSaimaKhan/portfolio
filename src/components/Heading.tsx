import React from 'react';

interface propsType {
  title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
  return (
    <div className="text-center">
      <p
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold pb-4 border-b-4 border-purple-400 inline-block"
      >
        {title}
      </p>
    </div>
  );
};

export default Heading;

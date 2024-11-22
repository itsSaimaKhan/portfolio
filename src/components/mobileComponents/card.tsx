import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { IoLogoLinkedin } from 'react-icons/io5';
import Link from 'next/link';
import { FaDownload, FaGithubSquare } from 'react-icons/fa';
import { Button } from '../ui/button';

const MobileCard = () => {
  return (
    <div className="h-auto min-h-[90vh] flex flex-col items-center py-6">
      <div className="card bg-blue-100 glass w-72 sm:w-80 md:w-96 p-4 sm:p-5 flex flex-col justify-center items-center rounded-lg shadow-lg">
        {/* Profile Image */}
        <Image
          src="/images/profile.jpg"
          alt="profile-pic"
          width={300}
          height={300}
          className="rounded-full mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
        />

        <div className="card-body text-center">
          {/* Name */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight uppercase">
            Saima Khan
          </h1>

          {/* Typewriter Effect */}
          <h2 className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-gray-600 mt-2">
            <Typewriter
              options={{
                strings: ['Web Developer', 'Graphic Designer', 'UI/UX Enthusiast'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 mt-4">
            {/* LinkedIn */}
            <Link
              href="#"
              target="_blank"
              className="text-gray-600 hover:text-[#0762cB]"
            >
              <IoLogoLinkedin className="text-3xl sm:text-4xl" />
            </Link>

            {/* GitHub */}
            <Link
              href="#"
              target="_blank"
              className="text-gray-600 hover:text-[#6e5494]"
            >
              <FaGithubSquare className="text-3xl sm:text-4xl" />
            </Link>
          </div>

          {/* Download CV Button */}
          <Link href="#" target="_blank" className="mt-6">
            <Button className="w-full sm:w-auto">
              <FaDownload className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;

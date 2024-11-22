import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const MobileEducation = () => {
  return (
    <Card
      data-aos="zoom-in"
      className="h-auto md:h-[85%] overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8"
    >
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight uppercase">
          Education
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Education Item */}
        <div className="divide-y divide-gray-200">
          <div className="py-4 sm:py-6 flex flex-col md:flex-row">
            {/* Date Section */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0 flex-shrink-0 text-center md:text-left">
              <span className="font-semibold text-gray-700 uppercase block text-sm sm:text-base">
                Intermediate
              </span>
              <span className="mt-1 text-gray-500 text-xs sm:text-sm">
                12 Jun 2019
              </span>
            </div>

            {/* Content Section */}
            <div className="w-full md:flex-grow">
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 mb-2 uppercase text-center md:text-left">
                Allama Iqbal College
              </h2>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify">
                Glossier echo park pug, church-key sartorial biodiesel
                vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon
                party messenger bag selfies, poke vaporware kombucha lumbersexual
                pork belly polaroid hoodie portland craft beer.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MobileEducation;

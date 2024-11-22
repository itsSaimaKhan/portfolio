import React from 'react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button'

const Education = () => {
  return (

    <Card data-aos="zoom-in" className='"h-[85%] overflow-y-auto'>
    <CardHeader> 
      <CardTitle className='text-2xl font-semibold tracking-tight uppercase'>Education</CardTitle>
      
    </CardHeader>
    <CardContent className="space-y-2">
     
    
    
      <div className="-my-8 divide-y-2 divide-gray-100">
  
  <div className="py-8 flex flex-wrap md:flex-nowrap">
    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
      <span className="font-semibold title-font text-gray-700 uppercase">
      
      </span>
      <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
    </div>
    <div className="md:flex-grow">
      <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 uppercase">
       Allaba Iqbal Collage
      </h2>
      <p className="leading-relaxed ">
        Glossier echo park pug, church-key sartorial biodiesel vexillologist
        pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger
        bag selfies, poke vaporware kombucha lumbersexual pork belly
        polaroid hoodie portland craft beer.
      </p>
      
    </div>
  </div>
 
  </div>
  

    </CardContent>
   
  </Card>

    
  )
}

export default Education 
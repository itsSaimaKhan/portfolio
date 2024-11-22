import React from 'react'

import { FaCheck } from "react-icons/fa";


import {
    Card,
    CardContent,
   
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button'

const Skills = () => {
  return (

    <Card data-aos="zoom-in" className='"h-[85%] overflow-y-auto'>
    <CardHeader> 
      <CardTitle className='text-2xl font-semibold tracking-tight uppercase'>Skills</CardTitle>
      
    </CardHeader>
    <CardContent className="space-y-2">
     {/* SKILLS HERE */}
   
   
    <div className="flex flex-wrap -m-4">

      {/* HTML */}
      <div className="p-4 w-full md:w-1/3">
        
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
             bg-blue-500 text-white flex-shrink-0">
             
            <FaCheck className="text-white text-lg"/>

            </div>
            <h2 className="text-xl font-semibold tracking-tight">
              HTML
            </h2>
            </div>
            <div className='w-full h-1 rounded-lg bg-gray-500'>
              <div className='w-[100%] h-1 bg-blue-500 rounded-lg'/>

              </div>
              <h3 className=" text-blue-500 text-sm text-right font-semibold tracking-tight">100%</h3>
              
          </div>

           {/* CSS */}
      <div className="p-4 w-full md:w-1/3">
        
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
           bg-blue-500 text-white flex-shrink-0">
           
          <FaCheck className="text-white text-lg"/>

          </div>
          <h2 className="text-xl font-semibold tracking-tight">
            CSS
          </h2>
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
            <div className='w-[97%] h-1 bg-blue-500 rounded-lg'/>

            </div>
            <h3 className=" text-blue-500 text-sm text-right font-semibold tracking-tight">97%</h3>
            
        </div>

         {/* Typescript/js */}
      <div className="p-4 w-full md:w-1/3">
        
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
           bg-blue-500 text-white flex-shrink-0">
           
          <FaCheck className="text-white text-lg"/>

          </div>
          <h2 className="text-xl font-semibold tracking-tight">
            Tyepescript / Javascript
          </h2>
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
            <div className='w-[90%] h-1 bg-blue-500 rounded-lg'/>

            </div>
            <h3 className=" text-blue-500 text-sm text-right font-semibold tracking-tight">90%</h3>
            
        </div>

         {/* Graphic Designing */}
      <div className="p-4 w-full md:w-1/3">
        
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full
           bg-blue-500 text-white flex-shrink-0">
           
          <FaCheck className="text-white text-lg"/>

          </div>
          <h2 className="text-xl font-semibold tracking-tight">
            Graphic Designing
          </h2>
          </div>
          <div className='w-full h-1 rounded-lg bg-gray-500'>
            <div className='w-[90%] h-1 bg-blue-500 rounded-lg'/>

            </div>
            <h3 className=" text-blue-500 text-sm text-right font-semibold tracking-tight">90%</h3>
            
        </div>
         
        </div>
    
    
    
 

  


    
  

    </CardContent>
   
  </Card>

    
  )
}

export default Skills
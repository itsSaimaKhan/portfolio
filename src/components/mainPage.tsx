"use client"
import { useEffect } from "react";
// for animate on scroll library
import AOS from "aos"
import "aos/dist/aos.css";
// my components


import { Sidebar } from "./sidebar";
import { Detail } from "./detail";
import MobileCard from "./mobileComponents/card";
import MobileEducation from "./mobileComponents/education";
import Mobileskills from "./mobileComponents/skills";
import MobileProjects from "./mobileComponents/projects";
import MobileExperience from "./mobileComponents/experience";


const mainPage = () => {
    // useEffect for AOS
    useEffect(() => {
        AOS.init({
          once: false,
        });
      }, []);

  return (
    <div>
      {/* mobile view */}
      <div className="over-flow-x-hidden bg-white text-xl  h-screen md:hidden">
        {/* card */}
        <div data-aos="zoom-in">
        <MobileCard/>
        </div>
        {/* education */}
        <MobileEducation/>
          {/* skills */}
          <Mobileskills/>
        {/* projects */}
        <MobileProjects/>
        
        {/* experience */}
        <MobileExperience/>
        


      </div>

    <div className=" hidden md:flex md:overflow-hidden md:h-screen">
    {/* side bar */}
    <div className="w-1/5">
      <Sidebar/>
      </div>
      {/* main */}
      <div className="w-full">
        <Detail/>
    
       </div> 
    </div>
  </div>
    
  )
}

export default mainPage
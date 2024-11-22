import Image from "next/image";
import { Button } from "./ui/button";
import Typewriter from 'typewriter-effect';
import { IoLogoLinkedin } from "react-icons/io5";
import Link from "next/link";
import { Target } from "lucide-react";
import { FaDownload, FaGithubSquare } from "react-icons/fa";



export function Sidebar(){
  return (
    <div className="h-screen flex flex-col justify-center items-center p-3 ">
     {/* image */}
     <Image src="/images/profile.jpg" alt="profile-pic" width={1000} height={1000} className="rounded-sm"/>

     {/* Name here */}

      <div className="mt-2">
     <h1 className=" text-2xl font-bold tracking-tight uppercase">SaimaKhan</h1>
     <h2  className="text-md font-semibold tracking-tight  text-gray-600">

     <Typewriter
  options={{
    strings: ['Web Developer', 'Graphic Designer', ''],
    autoStart: true,
    loop: true,
  }}
/>
</h2>

</div>
     {/* Social Media Account*/}

     <div className=" grid grid-cols-3 gap-2">
        {/*linked*/}
        <div className="mt-4">
            <Link href="" target="_blank" className="text-gray-600 hover:text-[#0762cB]">
        <IoLogoLinkedin className="text-4xl " />
        </Link>

        </div>
         {/*github*/}
         <div className="mt-4">
            <Link href="" target="_blank" className="text-gray-600 hover:text-[#6e5494]">
        <FaGithubSquare className="text-4xl " />
        </Link>
</div>
          {/**/}
     </div>

     {/* Download CV Button */}
      <Link href={"#"} className="mt-4 target:_blank">
     <Button>
      <FaDownload className="mr-2 h-2 w-4"/>Download CV
    </Button>
    </Link>

                      
         
          
         
        </div>
      
    
  )
}
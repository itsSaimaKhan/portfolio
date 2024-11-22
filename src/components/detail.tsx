import { Button } from "@/components/ui/button"


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Experience from "./experience"
import Skills from "./skills"
import Education from "./education"
import Projects from "./projects"

export function Detail() {
  return (
    <Tabs defaultValue="education" className="w-full p-3">
      <TabsList className="grid w-full grid-cols-4">

        {/* Tab content Button */}
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="experience">Experience</TabsTrigger>
        <TabsTrigger value="projects">Projects</TabsTrigger>
      </TabsList>
      {/* Tab  content here*/}

      {/* Education */}
      <TabsContent value="education">
       <Education/>
      </TabsContent>  

       {/* Skills */}
       <TabsContent value="skills">
        <Skills/>
       
       </TabsContent>  

       {/* Experience */}
      <TabsContent value="experience">
       <Experience/>
      </TabsContent>  

      {/* Projects */}
      <TabsContent value="projects">
       <Projects/>
      </TabsContent>  
      
    </Tabs>
  )
}

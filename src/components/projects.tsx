import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  // Project data
  const projects = [
    {
      name: "TodoList App",
      details:
        "A simple way to organize daily tasks and track progress effectively. Helps prioritize tasks, manage time better, and achieve goals efficiently.",
      link: "#",
      image: "/images/Todolist.png",
    },
    {
      name: "Website",
      details:
        "A basic website template to showcase responsive design and content organization.",
      link: "#",
      image: "/images/Website.png",
    },
  ];

  return (
    <Card data-aos="zoom-in" className="h-[85%] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-wrap -m-4">
          {projects.map((item, i) => (
            <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative h-64">
                {/* Image Component with Proper src Attribute */}
                {item.image ? (
                  <Image
                    alt={item.name}
                    width={1000}
                    height={1000}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={item.image}
                  />
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {item.name}
                  </h2>
                  <p className="mt-2 leading-relaxed line-clamp-3">
                    {item.details}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="text-sm font-medium tracking-tight hover:text-blue-500 hover:underline"
                  >
                    <p className="mt-2">View Project</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;

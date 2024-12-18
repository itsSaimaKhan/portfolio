import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: "Todo List",
    desc: "A React & TypeScript based app for managing and organizing tasks.",
    img: '/Todolist.png',
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 1,
    title: "Portfolio",
    desc: "A React & TypeScript based portfolio website to showcase projects.",
    img: '/project.png',
    tags: ["HTML", "Node", "CSS", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32 px-4 ">
      {/* Heading */}
      <Heading title="My Projects" />

      {/* Grid for project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16 place-items-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

// import { title } from 'process'
import React from 'react'
import Heading from './Heading'
import Card from './Card'



const data = [
    {
        id:0,
        title: "Todo List",
        desc: "A React & TypeScript based app for managing and organizion ",
        img: '/Todolist.png',
        tags: ["React", "Node", "CSS", "TypeScript"],
    },

    {
      id:0,
      title: "Portfolio",
      desc: "A React & TypeScript based app for managing and organizion ",
      img: '/project.png',
      tags: ["HTML", "Node", "CSS", "TypeScript"],
  },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl-gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
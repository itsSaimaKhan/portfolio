import React from 'react'

const Skills = () => {
  return (
    <div id='Skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div data-aos="fade-up-left">
                <h2 className='text-4xl md:text-5xl'> Technologies I work with</h2>
                <p className='text-white pt-2'>
                Skilled in web development I specialize in creating responsive and user-friendly websites
                 With expertise in HTML CSS  JavaScript and modern frameworks like Next js I build efficient 
                 and dynamic web solutions My focus is on delivering high-quality projects that enhance user 
                 experience and meet client goals
                </p>
            </div>
            <div className='grid grid-cols-2 text-purple-500 text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="fade-up-left">Typescript</h2>
                    <h2 data-aos="fade-up-left">React.js</h2>
                    <h2 data-aos="fade-up-left">Next.js</h2>
                </div>

                <div className='grid grid-cols-2 text-purple-500 text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="fade-up-left">Tailwind</h2>
                    <h2 data-aos="fade-up-left">CSS</h2>
                    <h2 data-aos="fade-up-left">Node.js</h2>
                </div>
            </div>
        </div>
</div>
    </div>
  )
}

export default Skills
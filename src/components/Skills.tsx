import React from "react";

const Skills = () => {
  return (
    <div id="Skills" className="container pt-32 px-4">
      <div className="grid gap-20 md:grid-cols-2 items-center">
        {/* Left Section: Description */}
        <div data-aos="fade-up-left">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Technologies I work with
          </h2>
          <p className="text-white pt-2 text-lg md:text-xl">
            Skilled in web development, I specialize in creating responsive and
            user-friendly websites. With expertise in HTML, CSS, JavaScript, and
            modern frameworks like Next.js, I build efficient and dynamic web
            solutions. My focus is on delivering high-quality projects that
            enhance user experience and meet client goals.
          </p>
        </div>

        {/* Right Section: Skills List */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 text-purple-500 text-3xl sm:text-4xl">
          {/* Column 1 */}
          <div className="space-y-1">
            <h2 data-aos="fade-up-left">JavaScript</h2>
            <br />
            <h2 data-aos="fade-up-left">Node.js</h2> <br />
            <h2 data-aos="fade-up-left">TailwindCSS</h2>
            <br />
            <h2 data-aos="fade-up-left">Next.js</h2> <br />
          </div>

          {/* Column 3 (if needed) */}
          <div className="space-y-1">
            <h2 data-aos="fade-up-left">TypeScript</h2> <br />
            <h2 data-aos="fade-up-left">React.js</h2> <br />
            <h2 data-aos="fade-up-left">HTML</h2> <br />
            <h2 data-aos="fade-up-left">CSS</h2> <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

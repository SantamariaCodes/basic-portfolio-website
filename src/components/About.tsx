import React from "react";

const About = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div
    ref={ref}
    className="section pb-[1000px] flex flex-col items-center md:pt-10 p-5"
  >
    <h2 className="mb-4 pb-4 420px:text-lg sm:text-2xl md:text-3xl lg:text-4xl text-center relative font-extrabold">
      ABOUT ME
      <span className="absolute left-1/2 bottom-0 transform translate-x-[-50%] w-[70%] h-1 bg-deepBlue"></span>
    </h2>
    <div className="text-left w-full">
      <h3 className="text-xl font-semibold mb-4">Get to Know Me!</h3>
      <p className="mb-8">
        Hello! I am passionate about web development and love to work on exciting
        projects.
      </p>
    </div>
    <button className="bg-deepBlue text-white py-2 px-6 rounded mb-8">
      CONTACT
    </button>
    <div className="text-left w-full">
      <h3 className="text-xl font-semibold mb-4">My Skills</h3>
      <div className="flex flex-wrap">
        {['HTML', 'CSS', 'JavaScript', 'REACT', 'SASS', 'GIT','Terminal','Tailwind','AI','Boilerplate', 'SCRUM'].map((skill, index) => (
          <span key={index} className="bg-gray-400 text-white py-1 px-4 rounded-md m-2">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
));

export default About;

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
    <div className="text-left w-full md:flex md:space-x-4 gap-10">
      <div className="md:w-1/2 md:p-5">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-left">
          Get to Know Me!
        </h3>
        <div className="mb-8 leading-8">
          <div className="mb-4">
            Greetings! As a <strong>proficient front-end developer</strong>, I
            take pride in crafting <strong>pixel-perfect UIs</strong>. With
            extensive knowledge in modern frameworks, I ensure responsiveness
            across all devices. My dedication is evident in every line of code,
            ensuring optimal performance and user experience.
          </div>

          <div className="mb-4">
            Collaborating closely with design and backend teams, I
            <strong>bridge the gap</strong> to bring visions to life. Leveraging
            the <strong>latest web technologies</strong>, I'm always at the
            forefront of the digital landscape. My code is clean, maintainable,
            and in line with the best industry practices.
          </div>

          <div>
            Collaborating closely with design and backend teams, I
            <strong>bridge the gap</strong> to bring visions to life. Leveraging
            the <strong>latest web technologies</strong>
          </div>
        </div>

        <button className="bg-deepBlue text-white py-2 px-6 lg:py-3 font-bold lg:px-8 rounded mb-8">
          CONTACT
        </button>
      </div>
      <div className="md:w-1/2 md:p-5">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-left">
          My Skills
        </h3>
        <div className="flex flex-wrap">
  {[
    "HTML",
    "CSS",
    "JavaScript",
    "REACT",
    "SASS",
    "GIT",
    "Terminal",
    "Tailwind",
    "AI",
    "Boilerplate",
    "SCRUM",
  ].map((skill, index) => (
    <span
      key={index}
      className="bg-gray-300 text-sm sm:text-base md:text-base lg:text-lg text-gray-500 font-bold py-2 px-3 sm:py-2 sm:px-4 md:py-2 md:px-4 lg:py-3 lg:px-5 rounded-md m-2"
    >
      {skill}
    </span>
  ))}
</div>

      </div>
    </div>
  </div>
));

export default About;

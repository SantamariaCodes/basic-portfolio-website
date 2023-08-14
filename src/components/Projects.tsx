import React from "react";

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} className="section  pb-[1000px]">
    <h2>Projects Section</h2>
    {/* Add your content here */}
  </div>
));

export default Projects;

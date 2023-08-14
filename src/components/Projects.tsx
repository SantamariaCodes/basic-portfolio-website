import React from "react";
import SocialIcons from "./SocialIcons/SocialIcons";

const Projects = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} className="section  pb-[1000px]">
    <h2>Projects Section</h2>
  <SocialIcons></SocialIcons>
  </div>
));

export default Projects;

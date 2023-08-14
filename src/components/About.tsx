import React from "react";

const About = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} className="section pb-[1000px]">
    <h2>About Section</h2>
    {/* Add your content here */}
  </div>
));

export default About;

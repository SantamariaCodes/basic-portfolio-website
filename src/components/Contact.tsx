import React from "react";

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} className="section pt-20">
    <h2>Contact Section</h2>
    {/* Add your content here */}
  </div>
));

export default Contact;

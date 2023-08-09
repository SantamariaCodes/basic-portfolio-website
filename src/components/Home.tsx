import React from "react";

const Home = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} className="section">
    <h2>Home Section</h2>
    {/* Add your content here */}
  </div>
));

export default Home;

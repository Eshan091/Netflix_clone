import React from "react";
import "./Scroll.css";

function Scroll_component({ title, paragraph, image }) {
  return (
    <div className="features">
      <div className="content">
        <div className="text">
          <h1>{title}</h1>
          <p>{paragraph}</p>
        </div>
        <div className="img">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Scroll_component;

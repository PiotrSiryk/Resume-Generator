import React, { useContext } from "react";
import { dataContext } from "../../../App";
import "./view1.css";

export default function ResumeView() {
  const context = useContext(dataContext);
  const { basic, bio, skill, education, experience } = context.data;
  const { language } = context;
  console.log(context.data);
  return (
    <>
      <div className="resume-container">
        <div className="resume"></div>
      </div>
    </>
  );
}

{
  /* <div className="display-image">
            <canvas className="my-canvas" ref={context.canvasRef}></canvas>
          </div> */
}

import React, { useContext } from "react";
import { dataContext } from "../../../App";
import View1Nav from "./view1Nav";
import View1Header from "./view1Header";
import View1Main from "./view1Main";
import "./view1.css";

export default function ResumeView() {
  const context = useContext(dataContext);
  const { basic, bio, skill, education, experience, hobby } = context.data;
  const { language } = context;
  console.log(context.data);
  return (
    <>
      <div className="resume-container">
        <div className="resume">
          <View1Header />
          <View1Nav />
          <View1Main />
        </div>
      </div>
    </>
  );
}

{
  /* <div className="display-image">
            <canvas className="my-canvas" ref={context.canvasRef}></canvas>
          </div> */
}

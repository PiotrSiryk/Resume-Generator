import React from "react";
import View1Nav from "./view1Nav";
import View1Header from "./view1Header";
import View1Main from "./view1Main";
import "./view1.css";

export default function ResumeView() {
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

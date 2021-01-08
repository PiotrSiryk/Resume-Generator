import React, { useContext } from "react";
import { dataContext } from "../App";

export default function ResumeView() {
  const context = useContext(dataContext);
  console.log(context.data);
  const { basic, bio, skill, education } = context.data;

  return (
    <div className="resume-container">
      <div className="resume">
        <h4>{basic && basic.name}</h4>
        <h4>{basic && basic.phone}</h4>
        <h4>{basic && basic.email}</h4>
        <p>{bio && bio.bio}</p>

        {skill &&
          skill.map((element, index) => {
            return <div key={index}>{element}</div>;
          })}
        {education &&
          education.map((element, index) => {
            return <div key={index}>{element.degree}</div>;
          })}
      </div>
    </div>
  );
}

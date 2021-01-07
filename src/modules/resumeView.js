import React, { useContext } from "react";
import { dataContext } from "../App";

export default function ResumeView() {
  const context = useContext(dataContext);
  const { basic } = context.data;

  return (
    <div className="resume-container">
      <div className="resume">
        <h4>{basic && basic.name}</h4>
        <h4>{basic && basic.phone}</h4>
        <h4>{basic && basic.email}</h4>
      </div>
    </div>
  );
}

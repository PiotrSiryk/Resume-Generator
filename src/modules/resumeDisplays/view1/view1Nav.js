import React, { useContext } from "react";
import { dataContext } from "../../../App";

export default function View1Nav() {
  const context = useContext(dataContext);
  const { basic, bio, skill, education, experience, hobby } = context.data;
  const { language } = context;
  console.log(context.data);
  return (
    <>
      <nav>
        <div className="display-image">
          <canvas className="my-canvas" ref={context.canvasRef}></canvas>
        </div>
        <div className="info">
          <section>
            <label htmlFor="cv-skills">{language.cv.skill}</label>
            <ul id="cv-skills">
              {skill.map((element) => {
                return <li key={Math.random()}>{element.skill}</li>;
              })}
            </ul>
          </section>
          <section>
            <label htmlFor="cv-education">{language.cv.education}</label>
            <ul id="cv-education">
              {education.map((element) => {
                return (
                  <div key={Math.random()}>
                    <h3>{element.degree}</h3>
                    <h4>{element.school}</h4>
                    <h4>
                      {element.start.slice(0, 4)}
                      {" - "}
                      {element.start.slice(0, 4)}
                    </h4>
                  </div>
                );
              })}
            </ul>
          </section>
          <section>
            <label htmlFor="cv-hobbies">{language.cv.hobby}</label>
            <ul id="cv-hobbies">
              {hobby.map((element) => {
                return <li key={Math.random()}>{element.hobby}</li>;
              })}
            </ul>
          </section>
          <section>
            <label htmlFor="cv-contact">{language.cv.contact}</label>
            <ul id="cv-contact">
              <li>
                {language.cv.email}: {basic.email}
              </li>
              <li>
                {language.cv.phone}:{basic.phone}
              </li>
            </ul>
          </section>
        </div>
      </nav>
    </>
  );
}

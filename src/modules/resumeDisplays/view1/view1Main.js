import React, { useContext, useEffect } from "react";
import { dataContext } from "../../../App";

export default function View1Main() {
  const context = useContext(dataContext);
  const { bio, experience } = context.data;

  useEffect(() => {
    const head = document.querySelector(".resume>header").offsetHeight;
    const bioSection = document.querySelector(".bio-section").offsetHeight;
    const expSection = document.querySelector(".experience-section")
      .offsetHeight;

    if (head + bioSection + expSection > 1137) {
      document.querySelector(".resume").style.height = `${2 * 1137}px`;
    }
  }, []);
  return (
    <>
      <main>
        <section className="bio-section">
          <label>About Me</label>
          <div>{bio.bio}</div>
        </section>
        <section className="experience-section">
          <label>About Me</label>
          <div>
            {experience.map((element, index) => {
              return (
                <div className="experience" key={index}>
                  <h4>{element.job}</h4>
                  <h5>
                    {element.company} / {element.start} - {element.end}
                  </h5>
                  <p>{element.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

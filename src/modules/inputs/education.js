import React, { useContext, useState } from "react";
import { dataContext } from "../../App";
import { FaTrash } from "react-icons/fa";

export default function Education() {
  const context = useContext(dataContext);
  const [current, setCurrent] = useState({
    degree: "",
    school: "",
    start: "",
    end: "",
  });
  const { dispatch, data, language } = context;
  const add = (ev) => {
    ev.preventDefault();
    dispatch({ name: "education", type: "add-array", data: current });
  };
  const remove = (index) => {
    dispatch({ name: "education", type: "remove-element", data: index });
  };

  return (
    <div className="add-education">
      <form action="">
        <div>
          <label htmlFor="degree">{language.nav.degree}</label>
          <input
            type="text"
            id="degree"
            onChange={(event) =>
              setCurrent((prev) => {
                return { ...prev, degree: event.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="school">{language.nav.school}</label>
          <input
            type="text"
            id="school"
            onChange={(event) =>
              setCurrent((prev) => {
                return { ...prev, school: event.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="start">{language.nav.start}</label>
          <input
            type="date"
            id="start"
            onChange={(event) =>
              setCurrent((prev) => {
                return { ...prev, start: event.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="end">{language.nav.end}</label>
          <input
            type="date"
            id="end"
            onChange={(event) =>
              setCurrent((prev) => {
                return { ...prev, end: event.target.value };
              })
            }
          />
        </div>
        <button onClick={(event) => add(event)}>{language.nav.add}</button>
      </form>

      <div className="display-education">
        {data.education &&
          data.education.map((element, index) => {
            return (
              <div key={index}>
                <div>
                  <h4>{element.degree}</h4>
                  <h4>{element.school}</h4>
                  <h4>
                    {element.start} - {element.end}
                  </h4>
                </div>
                <button onClick={() => remove(index)}>
                  <FaTrash />
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

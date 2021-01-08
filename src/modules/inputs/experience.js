import React, { useContext, useState } from "react";
import { dataContext } from "../../App";
import { FaTrash } from "react-icons/fa";

export default function Experience() {
  const context = useContext(dataContext);
  const [current, setCurrent] = useState({
    job: "",
    company: "",
    description: "",
    start: "",
    end: "",
  });
  const { dispatch, data } = context;
  const add = (ev) => {
    console.log(data.education);
    ev.preventDefault();
    dispatch({ type: "add-experience", data: current });
  };
  const remove = (index) => {
    dispatch({ type: "remove-experience", data: index });
  };

  return (
    <div className="add-education">
      <form action="">
        <div>
          <label htmlFor="job">job</label>
          <input
            type="text"
            id="job"
            onChange={(event) =>
              setCurrent((prev) => {
                return { ...prev, job: event.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="company">company</label>
          <input
            type="text"
            id="company"
            onChange={(event) =>
              setCurrent((prev) => {
                return { ...prev, company: event.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="start">start</label>
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
          <label htmlFor="end">end</label>
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
        <div>
          <label htmlFor="desc">Job description</label>
          <textarea
            name=""
            id="desc"
            cols="30"
            rows="10"
            onChange={(event) =>
              setCurrent((prev) => {
                return { ...prev, description: event.target.value };
              })
            }
          ></textarea>
        </div>
        <button onClick={(event) => add(event)}>Add</button>
      </form>

      <div className="display-experience">
        {data.experience &&
          data.experience.map((element, index) => {
            return (
              <div key={index}>
                <div>
                  <h4>{element.job}</h4>
                  <h4>{element.company}</h4>
                  <h4>{element.start}</h4>
                  <h4>{element.end}</h4>
                  <h4>{element.description}</h4>
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

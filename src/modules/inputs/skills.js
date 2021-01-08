import React, { useContext, useState } from "react";
import { dataContext } from "../../App";
import { FaTrash } from "react-icons/fa";

export default function Skills() {
  const context = useContext(dataContext);
  const [current, setCurrent] = useState({
    skill: [],
  });
  const { dispatch, data } = context;
  const add = (ev) => {
    ev.preventDefault();
    console.log(context);
    dispatch({ type: "add-skill", data: current });
  };
  const remove = (index) => {
    dispatch({ type: "remove-skill", data: index });
  };

  return (
    <div className="add-skill">
      <form action="">
        <div>
          <label htmlFor="skill">Skill</label>
          <input
            type="text"
            id="skill"
            onChange={(event) =>
              setCurrent((prev) => {
                return { ...prev, skill: event.target.value };
              })
            }
          />
        </div>
        <button onClick={(event) => add(event)}>Add</button>
      </form>

      <div className="display-skills">
        {data.skill &&
          data.skill.map((element, index) => {
            return (
              <div key={index}>
                <div>{element}</div>
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

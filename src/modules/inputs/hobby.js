import React, { useContext, useState } from "react";
import { dataContext } from "../../App";
import { FaTrash } from "react-icons/fa";

export default function Hobby() {
  const context = useContext(dataContext);
  const [current, setCurrent] = useState({
    hobby: [],
  });
  const { dispatch, data, language } = context;
  const add = (ev) => {
    ev.preventDefault();
    dispatch({ name: "hobby", type: "add-array", data: current });
  };
  const remove = (index) => {
    dispatch({ name: "hobby", type: "remove-element", data: index });
  };
  return (
    <div className="add-hobby">
      <form action="">
        <div>
          <label htmlFor="hobby">{language.nav.hobby}</label>
          <input
            type="text"
            id="hobby"
            onChange={(event) =>
              setCurrent((prev) => {
                return { ...prev, hobby: event.target.value };
              })
            }
          />
        </div>
        <button onClick={(event) => add(event)}>{language.nav.add}</button>
      </form>

      <div className="display-skills">
        {data.hobby &&
          data.hobby.map((element, index) => {
            return (
              <div key={index}>
                <div>{element.hobby}</div>
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

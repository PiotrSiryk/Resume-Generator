import React, { useContext, useState } from "react";
import { dataContext } from "../../App";

export default function BasicInfo() {
  const context = useContext(dataContext);
  const [current, setCurrent] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const addBasicInfo = (ev) => {
    ev.preventDefault();
    const { dispatch } = context;
    dispatch({ type: "add-basic-info", data: current });
  };

  return (
    <div className="add-basic-info">
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(event) =>
              setCurrent((prev) => {
                return { ...prev, name: event.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(event) =>
              setCurrent((prev) => {
                return { ...prev, phone: event.target.value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            onChange={(event) =>
              setCurrent((prev) => {
                return { ...prev, email: event.target.value };
              })
            }
          />
        </div>
        <button onClick={(event) => addBasicInfo(event)}>AAAA</button>
      </form>
    </div>
  );
}

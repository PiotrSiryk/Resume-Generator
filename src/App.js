import React, { useReducer, useEffect } from "react";
import InputBar from "./modules/inputbar";
import ResumeView from "./modules/resumeView";
import Print from "./modules/print";

export const dataContext = React.createContext();

const reducer = (state, action) => {
  const { name, data } = action;
  switch (action.type) {
    case "add-object":
      return { ...state, [action.name]: action.data };
    case "add-array":
      if (state[name]) {
        return {
          ...state,
          [action.name]: [...state[name], data],
        };
      } else {
        return { ...state, [action.name]: [data] };
      }
    case "remove-element":
      const removed = state[name].filter((el, index) => index !== action.data);
      return { ...state, [name]: removed };
    default:
      return state;
  }
};

export default function App() {
  const localData = JSON.parse(localStorage.getItem("ResumeData"));
  const [data, dispatch] = useReducer(reducer, localData || {});

  useEffect(() => {
    localStorage.setItem("ResumeData", JSON.stringify(data));
  }, [data]);

  return (
    <dataContext.Provider value={{ dispatch, data }}>
      <Print />
      <div className="all">
        <InputBar />
        <ResumeView />
      </div>
    </dataContext.Provider>
  );
}

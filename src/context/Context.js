import { createContext, useReducer } from "react";
//import { useNavigate } from "react-router-dom";

export const Context = createContext();

const initialState = {
  genre: "",
  datetime: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT-DATE":
      return { ...state, datetime: action.payload };

    default:
      return;
  }
};
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;

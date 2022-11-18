import { createContext, useReducer } from "react";
//import { useNavigate } from "react-router-dom";

export const Context = createContext();

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case "":
      //console.log(action.payload);
      return;

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

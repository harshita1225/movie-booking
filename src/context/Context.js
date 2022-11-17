import { createContext, useReducer } from "react";
//import { useNavigate } from "react-router-dom";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {};

  const reducer = (state, action) => {
    switch (action.type) {
      case "":
        return;

      default:
        return;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;

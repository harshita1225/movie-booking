import { createContext, useReducer } from "react";
//import { useNavigate } from "react-router-dom";

export const Context = createContext();

const initialState = {
  title: "",
  date: "",
  year: "2022",
  time: "",
  jump: "#MovieContainerTop",
  backgroundblur: false,
  selectedseat: [],
  priceArray: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT-DATE":
      return { ...state, date: action.payload };
    case "SELECT-TIME":
      return { ...state, time: action.payload };
    case "BLUR-BACKGROUND":
      return { ...state, backgroundblur: action.payload };
    case "SELECTED-SEAT":
      return {
        ...state,
        selectedseat: [...state.selectedseat, action.payload],
        priceArray: [...state.priceArray, action.price],
      };
    case "SELECTED-MOVIE":
      return {
        ...state,
        title: action.title,
        genre: action.genre,
        poster: action.poster,
      };
    case "RESET":
      return { ...state, date: "", time: "", selectedseat: [], priceArray: [] };
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

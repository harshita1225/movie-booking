import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import SingleMoviePage from "./components/singlepage/SingleMoviePage";
function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/:singlemovie" element={<SingleMoviePage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;

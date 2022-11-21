import { Route, Routes } from "react-router-dom";
import DateTime from "./components/booking/DateTime";
import Seat from "./components/booking/Seat";
import HomePage from "./components/homepage/HomePage";
import LoginForm from "./components/login/LoginForm";
import SingleMoviePage from "./components/singlepage/SingleMoviePage";
import TermsandConditions from "./components/termsandcondition/TermsandConditions";
import Offers from "./components/offers/Offers";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/:singlemovie" element={<SingleMoviePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/datetime/:singledate" element={<DateTime />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/seats" element={<Seat />} />
      <Route path="/terms" element={<TermsandConditions />} />
      <Route path="/offers" element={<Offers />} />
    </Routes>
  );
}

export default App;

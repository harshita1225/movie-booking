import { Route, Routes } from "react-router-dom";
import DateTime from "./components/booking/DateTime";
import Seat from "./components/booking/Seat";
import HomePage from "./components/homepage/HomePage";
import LoginForm from "./components/login/LoginForm";
import SingleMoviePage from "./components/singlepage/SingleMoviePage";
import TermsandConditions from "./components/termsandcondition/TermsandConditions";
<<<<<<< HEAD
import ConfirmationPage from "./components/booking/ConfirmationPage";
import "./App.css";
=======
import Offers from "./components/offers/Offers";

>>>>>>> c4b72dc313bb0a7272f4033437a65e2ebff92a9f
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
<<<<<<< HEAD
      <Route path="/confirmation" element={<ConfirmationPage />} />
=======
      <Route path="/offers" element={<Offers />} />
>>>>>>> c4b72dc313bb0a7272f4033437a65e2ebff92a9f
    </Routes>
  );
}

export default App;

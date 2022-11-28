import React from "react";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    username: "invalid username",
    password: "invalid password",
  };

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();

    const { username, password } = document.forms[0];

    const userData = database.find((user) => user.username === username.value);

    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="w-screen h-screen bg-zinc-900 flex items-center justify-center">
          <div className="flex justify-center items-center">
            <div className="w-[450px] h-[620px] py-3 px-10 bg-white rounded-2xl">
              <div
                onClick={() => navigate("/home")}
                className="flex justify-end text-[1.5rem] cursor-pointer"
              >
                <AiFillCloseCircle className="hover:fill-orange-500 hover:text-white" />
              </div>
              <div className="text-center text-[1.25rem]">
                Log in to Crown Club
              </div>

              <div className="w-full h-[94px] text-[1rem] mt-5">
                <label for="username">
                  <p>Email address</p>
                </label>
                <input
                  name="username"
                  text="text"
                  className="border-2 border-slate-700 outline-none w-full rounded-md h-[40px] mt-2"
                />
                <div className="text-red-500">
                  {" "}
                  {renderErrorMessage("username")}
                </div>
              </div>

              <div className="w-full h-[94px] text-[1rem]">
                <label for="password">
                  <p>Password</p>
                </label>
                <input
                  name="password"
                  text="password"
                  type="password"
                  className="border-2 border-slate-700 outline-none w-full rounded-md h-[40px] mt-2"
                />
                <div className="text-red-500">
                  {renderErrorMessage("password")}
                </div>
              </div>

              <button className="w-full text-[1rem] p-[1rem] bg-orange-500  hover:bg-orange-700 hover:scale-y-110 rounded-md text-white">
                <input type="submit" value="LOG IN" />
              </button>

              <div className=" w-full h-[30px] flex  justify-center mt-3">
                <p>Don't have an account yet?</p>
                <p className="text-orange-500">Join for Free</p>
              </div>
              <div className="flex w-full h-[30px] justify-center mb-3">
                <p>Forgot Password?</p>
                <p className="text-orange-500">Reset it</p>
              </div>

              <hr />

              <button className="w-full text-[1rem] p-[1rem] bg-slate-900  hover:bg-slate-600 hover:scale-y-110 text-white rounded-md mt-10">
                CONTINUE AS GUEST
              </button>

              <div className="w-[368px] mx-auto mt-2 text-center">
                <p>
                  This site is protected by reCAPTCHA and the{" "}
                  <span className="text-orange-500">GooglePrivacy Policy</span>{" "}
                  and <span className="text-orange-500">Terms of Service </span>
                  apply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <div>{isSubmitted ? navigate("/bookinghistory") : renderForm}</div>
    </div>
  );
};

export default LoginForm;

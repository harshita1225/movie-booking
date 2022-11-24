import React, { useContext, useState } from "react";
import Header from "../header/Header";
import { FaCalendarDay } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BiHandicap } from "react-icons/bi";

import { useNavigate, useParams } from "react-router-dom";
import { oldMovies } from "../localdata/LocalData";
import { Context } from "../../context/Context";
import paymentoptions from "../images/payment-method-background.png";

const DateTime = () => {
  const { state, dispatch } = useContext(Context);
  const { singledate } = useParams();
  const navigate = useNavigate();

  const [selectdate, setSelectDate] = useState({
    id1: false,
    id2: false,
    id3: false,
    id4: false,
    id5: false,
    id6: false,
    id7: false,
  });

  const [selecttime, setSelectTime] = useState({ id: "", value: false });

  const filteredDate = oldMovies.filter(
    (item, i) => +item.id === +singledate
  )[0];

  console.log(selectdate);
  console.log(selecttime);
  return (
    <div className="bg-zinc-900 pb-20">
      <Header />
      <div className="w-[1040px] h-[611px] border-2 mx-auto mt-20 bg-zinc-900">
        <div className="flex justify-center mb-10 mt-5">
          <p className="text-[2rem] text-slate-700 bg-orange-500 p-2">
            <FaCalendarDay />
          </p>
        </div>
        <div className="w-full h-[90px] flex gap-4 justify-center mb-10">
          <div
            onClick={(e) => {
              setSelectDate({ id1: true });
              dispatch({ type: "SELECT-DATE", payload: e.target.innerText });
            }}
            className={`w-[130px] h-[78px] px-6 py-12 font-[400] border-2 shadow-xl flex flex-col justify-center items-center cursor-pointer   ${
              selectdate.id1
                ? "bg-orange-500 text-white "
                : "text-slate-500  hover:border-orange-500  hover:text-orange-500  border-slate-300"
            }   `}
          >
            <p className="text-[12px]">HEUTE</p>
            <p id="one" className="text-[30px]">
              28.11
            </p>
          </div>
          <div
            onClick={(e) => {
              setSelectDate({ id2: true });
              dispatch({ type: "SELECT-DATE", payload: e.target.innerText });
            }}
            className={`w-[130px] h-[78px] px-6 py-12 font-[400] border-2 shadow-xl flex flex-col justify-center items-center cursor-pointer ${
              selectdate.id2
                ? "bg-orange-500 text-white "
                : "text-slate-500  hover:border-orange-500  hover:text-orange-500  border-slate-300"
            }   `}
          >
            <p className="text-[12px]">TUESDAY</p>
            <p className="text-[30px]">29.11</p>
          </div>
          <div
            onClick={(e) => {
              setSelectDate({ id3: true });
              dispatch({ type: "SELECT-DATE", payload: e.target.innerText });
            }}
            className={`w-[130px] h-[78px] px-6 py-12 font-[400] border-2 shadow-xl flex flex-col justify-center items-center cursor-pointer ${
              selectdate.id3
                ? "bg-orange-500 text-white "
                : "text-slate-500  hover:border-orange-500  hover:text-orange-500  border-slate-300"
            }   `}
          >
            <p className="text-[12px]">WEDNESDAY</p>
            <p className="text-[30px]">30.11</p>
          </div>
          <div
            onClick={(e) => {
              setSelectDate({ id4: true });
              dispatch({ type: "SELECT-DATE", payload: e.target.innerText });
            }}
            className={`w-[130px] h-[78px] px-6 py-12 font-[400] border-2 shadow-xl flex flex-col justify-center items-center cursor-pointer ${
              selectdate.id4
                ? "bg-orange-500 text-white "
                : "text-slate-500  hover:border-orange-500  hover:text-orange-500  border-slate-300"
            }   `}
          >
            <p className="text-[12px]">THURSDAY</p>
            <p className="text-[30px]">01.12</p>
          </div>
          <div
            onClick={(e) => {
              setSelectDate({ id5: true });
              dispatch({ type: "SELECT-DATE", payload: e.target.innerText });
            }}
            className={`w-[130px] h-[78px] px-6 py-12 font-[400] border-2 shadow-xl flex flex-col justify-center items-center cursor-pointer ${
              selectdate.id5
                ? "bg-orange-500 text-white "
                : "text-slate-500  hover:border-orange-500  hover:text-orange-500  border-slate-300"
            }   `}
          >
            <p className="text-[12px]">FRIDAY</p>
            <p className="text-[30px]">02.12</p>
          </div>
          <div
            onClick={(e) => {
              setSelectDate({ id6: true });
              dispatch({ type: "SELECT-DATE", payload: e.target.innerText });
            }}
            className={`w-[130px] h-[78px] px-6 py-12 font-[400] border-2 shadow-xl flex flex-col justify-center items-center cursor-pointer ${
              selectdate.id6
                ? "bg-orange-500 text-white "
                : "text-slate-500  hover:border-orange-500  hover:text-orange-500  border-slate-300"
            }   `}
          >
            <p className="text-[12px]">SATURDAY</p>
            <p className="text-[30px]">03.12</p>
          </div>
          <div
            onClick={(e) => {
              setSelectDate({ id7: true });
              dispatch({ type: "SELECT-DATE", payload: e.target.innerText });
            }}
            className={`w-[130px] h-[78px] px-6 py-12 font-[400] border-2 shadow-xl flex flex-col justify-center items-center cursor-pointer ${
              selectdate.id7
                ? "bg-orange-500 text-white "
                : "text-slate-500  hover:border-orange-500  hover:text-orange-500  border-slate-300"
            }   `}
          >
            <p className="text-[12px]">SUNDAY</p>
            <p className="text-[30px]">04.12</p>
          </div>
        </div>

        <hr className="m-10" />
        <div className="w-[1040px]">
          <div className="flex justify-center mb-10">
            <p className="text-[2rem] text-slate-700  bg-orange-500 p-2">
              <MdOutlineAccessTimeFilled />
            </p>
          </div>
          <div className="w-full h-[90px] flex gap-4 justify-center mb-10">
            {filteredDate?.Date?.map((item) => {
              if (+item.value === +state?.date) {
                return item.time;
              }
            })?.map((el, i) =>
              el?.map((value, idx) => (
                <div
                  key={idx}
                  id={idx}
                  onClick={(e) => {
                    /* const newValue = [...selecttime];
                    const newArray = newValue.splice(idx, 2, !selecttime[idx]);
                     setSelectTime(selecttime);  */
                    setSelectTime({ id: idx, value: true });
                    dispatch({
                      type: "SELECT-TIME",
                      payload: e.target.innerText,
                    });
                  }}
                  className={`w-[130px] h-[78px] px-6 py-12 font-[400] border-2 shadow-xl flex flex-col justify-center items-center cursor-pointer ${
                    selecttime.id === idx
                      ? "bg-orange-500 text-white "
                      : "text-slate-500  hover:border-orange-500  hover:text-orange-500  border-slate-300"
                  }   `}
                >
                  <p className="text-[15px] mt-5">
                    <BiHandicap />
                  </p>
                  <p className="text-[35px]">{value}</p>
                </div>
              ))
            )}
          </div>

          <div
            onClick={() => navigate("/seats")}
            className="w-full flex justify-center mt-20"
          >
            <button className="border-orange-500 border-4 text-orange-500 bg-zinc-900 w-[246px] h-[53px] text-[28px] font-[300] hover:font-[500]">
              NEXT
            </button>
          </div>
        </div>
      </div>

      <footer className="w-full flex flex-col items-center mt-20">
        {" "}
        <div className="text-[14px] font-light text-slate-400">
          <ul className="flex gap-8">
            <li>AGB</li>
            <li>PRIVACY</li>
            <li>TERMS & CONDITIONS</li>
            <li>POLICY</li>
            <li>CONTACT</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="text-slate-400 text-[10px] font-thin flex gap-4">
          <p className="mt-3">
            Payment Options:Debit Card, Master-/Visa-Card,PayPal,Klarna
          </p>{" "}
          <img
            style={{ height: "40px" }}
            src={paymentoptions}
            alt="paymentProviders"
          />
        </div>
      </footer>
    </div>
  );
};

export default DateTime;

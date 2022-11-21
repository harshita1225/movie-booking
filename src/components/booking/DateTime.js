import React, { useContext, useState } from "react";
import Header from "../header/Header";
import { FaCalendarDay } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BiHandicap } from "react-icons/bi";
import paymentImg from "../images/footer.png";
import { useParams } from "react-router-dom";
import { oldMovies } from "../localdata/LocalData";
import { Context } from "../../context/Context";

const DateTime = () => {
  const { state, dispatch } = useContext(Context);
  const { singledate } = useParams();

  const [selectbutton, setSelectButton] = useState(false);

  const filteredDate = oldMovies.filter(
    (item, i) => +item.id === +singledate
  )[0];

  //console.log(filteredDate);

  return (
    <div>
      <Header />
      <div className="w-[1040px] h-[611px] border-2 mx-auto mt-20 ">
        <div className="flex justify-center mb-10 mt-5">
          <p className="text-[2rem] text-slate-700 bg-orange-500 p-2">
            <FaCalendarDay />
          </p>
        </div>
        <div className="w-full h-[90px] flex gap-4 justify-center mb-10">
          <div
            onClick={(e) => {
              setSelectButton(true);
              dispatch({ type: "SELECT-DATE", payload: e.target.innerText });
            }}
            className={`w-[130px] h-[78px] px-6 py-12 font-[400] border-2 shadow-xl flex flex-col justify-center items-center cursor-pointer   ${
              selectbutton
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
              dispatch({ type: "SELECT-DATE", payload: e.target.innerText });
            }}
            className={`w-[130px] h-[78px] px-6 py-12 font-[400] border-2 shadow-xl flex flex-col justify-center items-center cursor-pointer ${
              selectbutton
                ? "bg-orange-500 text-white "
                : "text-slate-500  hover:border-orange-500  hover:text-orange-500  border-slate-300"
            }   `}
          >
            <p className="text-[12px]">TUESDAY</p>
            <p className="text-[30px]">29.11</p>
          </div>
          <div
            onClick={(e) =>
              dispatch({ type: "SELECT-DATE", payload: e.target.innerText })
            }
            className="w-[130px] h-[78px] px-6 py-12 font-[400] border-2 border-slate-300 hover:border-orange-500 text-slate-500 hover:text-orange-500 shadow-xl flex flex-col justify-center items-center cursor-pointer"
          >
            <p className="text-[12px]">WEDNESDAY</p>
            <p className="text-[30px]">30.11</p>
          </div>
          <div
            onClick={(e) =>
              dispatch({ type: "SELECT-DATE", payload: e.target.innerText })
            }
            className="w-[130px] h-[78px] px-6 py-12 font-[400] border-2 border-slate-300 hover:border-orange-500 text-slate-500 hover:text-orange-500 shadow-xl flex flex-col justify-center items-center cursor-pointer"
          >
            <p className="text-[12px]">THURSDAY</p>
            <p className="text-[30px]">01.12</p>
          </div>
          <div
            onClick={(e) =>
              dispatch({ type: "SELECT-DATE", payload: e.target.innerText })
            }
            className="w-[130px] h-[78px] px-6 py-12 font-[400] border-2 border-slate-300 hover:border-orange-500 text-slate-500 hover:text-orange-500 shadow-xl flex flex-col justify-center items-center cursor-pointer"
          >
            <p className="text-[12px]">FRIDAY</p>
            <p className="text-[30px]">02.12</p>
          </div>
          <div
            onClick={(e) =>
              dispatch({ type: "SELECT-DATE", payload: e.target.innerText })
            }
            className="w-[130px] h-[78px] px-6 py-12 font-[400] border-2 border-slate-300 hover:border-orange-500 text-slate-500 hover:text-orange-500 shadow-xl flex flex-col justify-center items-center cursor-pointer"
          >
            <p className="text-[12px]">SATURDAY</p>
            <p className="text-[30px]">03.12</p>
          </div>
          <div
            onClick={(e) =>
              dispatch({ type: "SELECT-DATE", payload: e.target.innerText })
            }
            className="w-[130px] h-[78px] px-6 py-12 font-[400] border-2 border-slate-300 hover:border-orange-500 text-slate-500 hover:text-orange-500 shadow-xl flex flex-col justify-center items-center cursor-pointer"
          >
            <p className="text-[12px]">SUNDAY</p>
            <p className="text-[30px]">04.12</p>
          </div>
        </div>

        <hr className="m-10" />
        <div className="w-[1040px] h-[611px] ">
          <div className="flex justify-center mb-10">
            <p className="text-[2rem] text-slate-700  bg-orange-500 p-2">
              <MdOutlineAccessTimeFilled />
            </p>
          </div>
          <div className="w-full h-[90px] flex gap-4 justify-center mb-10">
            {
              filteredDate?.Date?.map((item) => {
                if (+item.value === +state?.datetime) {
                  return item.time;
                }
              })?.map((el, i) =>
                el?.map((value, idx) => (
                  <div
                    key={idx}
                    className="w-[130px] h-[78px] px-6 py-12 font-[400] border-2 border-slate-300 hover:border-orange-500 text-slate-500 hover:text-orange-500 shadow-xl flex flex-row-reverse justify-center items-center"
                  >
                    <p className="text-[15px] mt-5">
                      <BiHandicap />
                    </p>
                    <p className="text-[35px]">{value}</p>
                  </div>
                ))
              )

              /*   item?.time?.map((el, idx) => (
                <div
                  key={idx}
                  className="w-[130px] h-[78px] px-6 py-12 font-[400] border-2 border-slate-300 hover:border-orange-500 text-slate-500 hover:text-orange-500 shadow-xl flex flex-row-reverse justify-center items-center"
                >
                  <p className="text-[15px] mt-5">
                    <BiHandicap />
                  </p>
                  <p className="text-[35px]">{el}</p>
                </div>
             )) */
            }
            {/*{" "}
            <div className="w-[130px] h-[78px] px-6 py-12 font-[400] border-2 border-slate-300 hover:border-orange-500 text-slate-500 hover:text-orange-500 shadow-xl flex flex-row-reverse justify-center items-center">
              <p className="text-[15px] mt-5">
                <BiHandicap />
              </p>
              <p className="text-[35px]">17:45</p>
            </div>
            <div className="w-[130px] h-[78px] px-6 py-12 font-[400] border-2 border-slate-300 hover:border-orange-500 text-slate-500 hover:text-orange-500 shadow-xl flex flex-row-reverse justify-center items-center">
              <p className="text-[15px] mt-5">
                <BiHandicap />
              </p>
              <p className="text-[35px]">19:10</p>
            </div>
            <div className="w-[130px] h-[78px] px-6 py-12 font-[400] border-2 border-slate-300 hover:border-orange-500 text-slate-500 hover:text-orange-500 shadow-xl flex flex-row-reverse justify-center items-center">
              <p className="text-[15px] mt-5">
                <BiHandicap />
              </p>
              <p className="text-[35px]">20:00</p>
            </div>{" "}
  */}
          </div>

          <div className="w-full flex justify-center mt-20">
            <button className="border-orange-500 border-4 text-orange-500 bg-white w-[246px] h-[53px] text-[28px] font-[300] hover:font-[500]">
              NEXT
            </button>
          </div>
        </div>
      </div>

      <footer className="w-[1040px] mx-auto mt-10">
        {" "}
        <img className="mx-auto" src={paymentImg} alt="payment" />
      </footer>
    </div>
  );
};

export default DateTime;

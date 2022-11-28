import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import TermsandCoditions from "../termsandcondition/TermsandConditions";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Seat = () => {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();

  const row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [showTerms, setShowTerms] = useState(false);
  const [showTotal, setShowTotal] = useState(false);
  const [selected, setSelected] = useState({ id: "" });

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setShowTerms(true);
      dispatch({ type: "BLUR-BACKGROUND", payload: true });
    }, 1000);
    return () => {
      setShowTerms(false);
      // 👇️ clear timeout when component unmounts
      clearTimeout(timeoutID);
    };
  }, []);

  console.log(state);
  console.log(selected);

  return (
    <div className="terms w-screen h-screen flex flex-col justify-center text-slate-500 relative">
      <div
        className={`flex flex-col  h-screen items-center ${
          state?.backgroundblur ? " blur-sm" : "blur-none"
        }`}
      >
        <div className={` w-[980px] h-[250px] `}>
          <div className="relative flex justify-center">
            <div className="blur-sm">
              <img
                style={{
                  width: "5000px",
                  height: "250px",
                  opacity: 1,
                  margin: "auto",
                  zIndex: -2,
                }}
                src={state?.poster}
                alt=""
              />
            </div>
            <div className="absolute top-0 shadow-xl ">
              <img
                style={{
                  width: "300px",
                  height: "250px",
                  opacity: 0.9,
                  margin: "auto",
                }}
                src={state?.poster}
                alt=""
              />
            </div>
          </div>
          <div className="relative text-[14px] font-bold text-center  flex gap-3 ">
            <p>{state?.title}</p> <p>{state?.date}/2022</p>{" "}
            <p>{state?.time} </p>
          </div>
        </div>
        <div className="w-[980px] h-[70px] flex justify-center gap-2 items-start mt-2">
          <p className="text-[20px]">
            {" "}
            <BsFillArrowUpCircleFill />{" "}
          </p>
          <p>SCREEN THIS WAY</p>
        </div>

        <div className="w-[980px] h-[50px] flex justify-center gap-20 mx-auto">
          <div className="text-16px flex items-center gap-3">
            <div
              style={{
                background:
                  "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
              }}
              className="w-[22.11px] h-[29.62px] rounded-md"
            ></div>
            <p>Avaliable</p>
          </div>
          <div className="text-16px flex items-center gap-3">
            <div
              style={{
                background: "linear-gradient(to top,#dc6601,orange)",
              }}
              className="w-[22.11px] h-[29.62px] rounded-md"
            ></div>
            <p>Selected</p>
          </div>
          <div className="text-16px flex items-center gap-3">
            <div
              style={{
                background:
                  "linear-gradient(to top,#535353,#535353,#535353,gray,gray)",
              }}
              className="w-[22.11px] h-[29.62px] rounded-md"
            ></div>
            <p>Unavaliable</p>
          </div>
        </div>

        <div>
          <div className="text-center mt-5">
            {" "}
            <p>CLASSIC ($10)</p>
          </div>
          <div className="w-full h-[80px] text-[16px]  mr-14 relative ">
            <div className="flex items-center">
              <p className="mr-[157px] font-bold">A</p>
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `A${item}`,
                        price: 10,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`A${item}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                      ${
                        state?.selectedseat.includes(`A${i + 1}`)
                          ? "border-4 border-orange-500"
                          : "hover:-translate-y-1.5 cursor-pointer"
                      }
                    `}
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `A${item + 10}`,
                        price: 10,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`A${item + 10}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                      ${
                        state?.selectedseat.includes(`A${i + 11}`)
                          ? "border-4 border-orange-500"
                          : "hover:-translate-y-1.5 cursor-pointer"
                      }
                    `}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center relative bottom-[17px] right-[2px]">
              <p className="mr-[158px] mt-1 font-bold">B</p>
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `B${item}`,
                        price: 10,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`B${item}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                    ${
                      state?.selectedseat.includes(`B${i + 1}`)
                        ? "border-4 border-orange-500"
                        : "hover:-translate-y-1.5 cursor-pointer"
                    }
                  `}
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `B${item + 10}`,
                        price: 10,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`B${item + 10}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                      ${
                        state?.selectedseat.includes(`B${i + 11}`)
                          ? "border-4 border-orange-500"
                          : "hover:-translate-y-1.5 cursor-pointer"
                      }
                    `}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center relative bottom-[29px] right-[5px]">
              <p className="mr-[160px] font-bold">C</p>
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `C${item}`,
                        price: 10,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`C${item}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                      ${
                        state?.selectedseat.includes(`C${i + 1}`)
                          ? "border-4 border-orange-500"
                          : "hover:-translate-y-1.5 cursor-pointer"
                      }
                    `}
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `C${item + 10}`,
                        price: 10,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`C${item + 10}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                      ${
                        state?.selectedseat.includes(`C${i + 11}`)
                          ? "border-4 border-orange-500"
                          : "hover:-translate-y-1.5 cursor-pointer"
                      }
                    `}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mt-2">
            {" "}
            <p>PRIME ($12)</p>
          </div>
          <div className="w-full h-[80px] text-[16px]  mr-14 relative right-4">
            <div className="flex items-center">
              <p className="mr-[165px] font-bold">D</p>
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `D${item}`,
                        price: 12,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`D${item}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                      ${
                        state?.selectedseat.includes(`D${i + 1}`)
                          ? "border-4 border-orange-500"
                          : "hover:-translate-y-1.5 cursor-pointer"
                      }
                    `}
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `D${item + 10}`,
                        price: 12,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`D${item + 10}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                      ${
                        state?.selectedseat.includes(`D${i + 11}`)
                          ? "border-4 border-orange-500"
                          : "hover:-translate-y-1.5 cursor-pointer"
                      }
                    `}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center mt-1 relative bottom-[20px] right-[2px]">
              <p className="mr-[167px] mt-1 font-bold">E</p>
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `E${item}`,
                        price: 12,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`E${item}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                      ${
                        state?.selectedseat.includes(`E${i + 1}`)
                          ? "border-4 border-orange-500"
                          : "hover:-translate-y-1.5 cursor-pointer"
                      }
                    `}
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `E${item + 10}`,
                        price: 12,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`E${item + 10}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                      ${
                        state?.selectedseat.includes(`E${i + 11}`)
                          ? "border-4 border-orange-500"
                          : "hover:-translate-y-1.5 cursor-pointer"
                      }
                    `}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center relative bottom-[31px] right-[3px]">
              <p className="mr-[167px] font-bold">F</p>
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `F${item}`,
                        price: 12,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`F${item}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                    ${
                      state?.selectedseat.includes(`F${i + 1}`)
                        ? "border-4 border-orange-500"
                        : "hover:-translate-y-1.5 cursor-pointer"
                    }
                  `}
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `F${item + 10}`,
                        price: 12,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`F${item + 10}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                      ${
                        state?.selectedseat.includes(`F${i + 11}`)
                          ? "border-4 border-orange-500"
                          : "hover:-translate-y-1.5 cursor-pointer"
                      }
                    `}
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex items-center relative bottom-[44px] right-[7px]">
              <p className="mr-[168px] font-bold">G</p>
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `G${item}`,
                        price: 12,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`G${item}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                    ${
                      state?.selectedseat.includes(`G${i + 1}`)
                        ? "border-4 border-orange-500"
                        : "hover:-translate-y-1.5 cursor-pointer"
                    }
                  `}
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#535353,#535353,#535353,gray,gray)",
                    }}
                    key={i}
                    id={`G${item + 10}`}
                    className="w-[22.11px] h-[29.62px] rounded-md  cursor-not-allowed"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center mt-5">
            {" "}
            <p>SUPER ($15)</p>
          </div>
          <div className="w-full h-[80px] text-[16px]  mr-14 relative right-8">
            <div className="flex items-center">
              <p className="mr-40 font-bold">J</p>
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `J${item}`,
                        price: 15,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`J${item}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                    ${
                      state?.selectedseat.includes(`J${i + 1}`)
                        ? "border-4 border-orange-500"
                        : "hover:-translate-y-1.5 cursor-pointer"
                    }
                  `}
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `J${item + 10}`,
                        price: 15,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`J${item + 10}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                      ${
                        state?.selectedseat.includes(`J${i + 11}`)
                          ? "border-4 border-orange-500"
                          : "hover:-translate-y-1.5 cursor-pointer"
                      }
                    `}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center relative bottom-[16px] right-[4px]">
              <p className="mr-40 mt-1 font-bold">K</p>
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `K${item}`,
                        price: 15,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`K${item}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                    ${
                      state?.selectedseat.includes(`K${i + 1}`)
                        ? "border-4 border-orange-500"
                        : "hover:-translate-y-1.5 cursor-pointer"
                    }
                  `}
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `K${item + 10}`,
                        price: 15,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`K${item + 10}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                    ${
                      state?.selectedseat.includes(`K${i + 11}`)
                        ? "border-4 border-orange-500"
                        : "hover:-translate-y-1.5 cursor-pointer"
                    }
                  `}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center relative bottom-[28px] right-[3px]">
              <p className="mr-40 font-bold">L</p>
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `L${item}`,
                        price: 15,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`L${item}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                      ${
                        state?.selectedseat.includes(`L${i + 1}`)
                          ? "border-4 border-orange-500"
                          : "hover:-translate-y-1.5 cursor-pointer"
                      }
                    `}
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `L${item + 10}`,
                        price: 15,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`L${item + 10}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                      ${
                        state?.selectedseat.includes(`L${i + 11}`)
                          ? "border-4 border-orange-500"
                          : "hover:-translate-y-1.5 cursor-pointer"
                      }
                    `}
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex items-center relative bottom-[42px] right-[8px]">
              <p className="mr-40 font-bold">M</p>
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `M${item}`,
                        price: 15,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`M${item}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                    ${
                      state?.selectedseat.includes(`M${i + 1}`)
                        ? "border-4 border-orange-500"
                        : "hover:-translate-y-1.5 cursor-pointer"
                    }
                  `}
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `M${item + 10}`,
                        price: 15,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`M${item + 10}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                      ${
                        state?.selectedseat.includes(`M${i + 11}`)
                          ? "border-4 border-orange-500"
                          : "hover:-translate-y-1.5 cursor-pointer"
                      }
                    `}
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex items-center relative bottom-[53px] right-[8px]">
              <p className="mr-40 font-bold">N</p>
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `N${item}`,
                        price: 15,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`N${item}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                    ${
                      state?.selectedseat.includes(`N${i + 1}`)
                        ? "border-4 border-orange-500"
                        : "hover:-translate-y-1.5 cursor-pointer"
                    }
                  `}
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `N${item + 10}`,
                        price: 15,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`N${item + 10}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                    ${
                      state?.selectedseat.includes(`N${i + 11}`)
                        ? "border-4 border-orange-500"
                        : "hover:-translate-y-1.5 cursor-pointer"
                    }
                  `}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center relative bottom-[64px] right-[10px]">
              <p className="mr-40 font-bold">O</p>
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#535353,#535353,#535353,gray,gray)",
                    }}
                    key={i}
                    id={`O${item}`}
                    className="w-[22.11px] h-[29.62px] rounded-md  cursor-not-allowed"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-10 gap-1">
                {row1.map((item, i) => (
                  <div
                    onClick={() => {
                      setShowTotal(true);
                      dispatch({
                        type: "SELECTED-SEAT",
                        payload: `O${item + 10}`,
                        price: 8,
                      });
                    }}
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`O${item + 10}`}
                    className={`seat w-[22.11px] h-[29.62px] rounded-md  
                    ${
                      state?.selectedseat.includes(`O${i + 11}`)
                        ? "border-4 border-orange-500"
                        : "hover:-translate-y-1.5 cursor-pointer"
                    }
                  `}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {!showTotal ? (
          <button
            onClick={() => {
              dispatch({ type: "RESET" });
              navigate(-1);
            }}
            className="bg-orange-500 p-2 mt-20 text-white rounded-xl"
          >
            Go Back
          </button>
        ) : (
          <div className="w-screen h-[80px] fixed bottom-0 bg-orange-500 text-white mt-20  px-20 mx-auto flex items-center">
            <div className="w-full flex justify-evenly px-5  items-center ">
              <MdArrowBack
                onClick={() => {
                  dispatch({ type: "RESET" });
                  navigate(-1);
                }}
                style={{
                  fontSize: "30px",
                  background: "rgb(51 65 85)",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
              <div className="flex gap-5 items-center">
                {" "}
                <span className="text-[18px] font-bold">SEATS:</span>
                {state?.selectedseat?.map((seat, idx) => (
                  <div
                    style={{
                      clipPath:
                        "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                    }}
                    className="w-[50px] h-[25px] bg-slate-700 text-slate-100  border-2 border-black text-center font-semibold tracking-[2px]"
                    key={idx}
                  >
                    {" "}
                    {seat}
                  </div>
                ))}
              </div>
              <div
                style={{ fontFamily: "inherit" }}
                className=" text-white font-bold flex items-center"
              >
                <p className="font-bold text-[26px] flex items-center">
                  <span className="text-[18px]">TOTAL: </span> ${" "}
                  {state?.priceArray?.reduce((acc, curr) => (acc += curr), 0)}
                </p>
              </div>
              <MdArrowForward
                onClick={() => navigate("/offers")}
                style={{
                  fontSize: "30px",
                  background: "rgb(51 65 85)",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        )}
      </div>

      {showTerms && <TermsandCoditions />}
    </div>
  );
};

export default Seat;

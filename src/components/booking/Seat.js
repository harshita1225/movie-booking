import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import TermsandCoditions from "../termsandcondition/TermsandConditions";

const Seat = () => {
  const { state, dispatch } = useContext(Context);
  const row1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [showTerms, setShowTerms] = useState(false);
  // const [blurbackground, setBlurBackground] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTerms(true);
      dispatch({ type: "BLUR-BACKGROUND", payload: true });
    }, 1000);
  }, []);

  return (
    <div className="terms w-screen h-screen flex flex-col justify-center text-slate-500">
      <div
        className={`flex flex-col  items-center ${
          state?.backgroundblur ? " blur-md" : "blur-none"
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
                src="https://dubaitrippackages.files.wordpress.com/2017/11/2-imgdinosaurs_base.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-0 shadow-lg ">
              <img
                style={{
                  width: "700px",
                  height: "250px",
                  opacity: 0.9,
                  margin: "auto",
                }}
                src="https://dubaitrippackages.files.wordpress.com/2017/11/2-imgdinosaurs_base.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="relative bottom-10 text-[25px] text-center">
            <p>Movie Date,DATE :TIME </p>
          </div>
        </div>
        <div className="w-[980px] h-[50px] flex justify-center">
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
                background:
                  "linear-gradient(to right bottom, rgb(202, 138, 4), rgb(220, 38, 38)",
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
          <div className="text-center mt-5 mb-1">
            {" "}
            <p>CLASSIC ($8)</p>
          </div>
          <div className="w-full h-[80px] text-[16px] border-2">
            <div className="flex items-center">
              <p className="mr-40 font-bold">A</p>
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`A${item}`}
                    className=" seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`A${item + 10}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center relative bottom-[15px] right-[1px]">
              <p className="mr-40 mt-1 font-bold">B</p>
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`B${item}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md  hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`B${item + 10}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center relative bottom-[25px] right-[3px]">
              <p className="mr-40 font-bold">C</p>
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`C${item}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`C${item + 10}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center my-1">
            {" "}
            <p>PRIME ($10)</p>
          </div>
          <div className="w-full h-[80px] text-[16px] mr-4 relative right-2">
            <div className="flex items-center ">
              <p className="mr-40 font-bold">D</p>
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`D${item}`}
                    className=" seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`D${item + 10}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center relative bottom-[15px]">
              <p className="mr-40 mt-1 font-bold">E</p>
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`E${item}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md  hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`E${item + 10}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center relative bottom-[25px] right-[1px]">
              <p className="mr-40 font-bold">F</p>
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`F${item}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`F${item + 10}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex items-center relative bottom-[38px] right-[4px]">
              <p className="mr-40 font-bold">G</p>
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`G${item}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`G${item + 10}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex items-center relative bottom-[50px] right-[6px]">
              <p className="mr-40 font-bold">H</p>
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`H${item}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`H${item + 10}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center relative bottom-[63px] right-[2px]">
              <p className="mr-40 font-bold">I</p>
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`I${item}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`I${item + 10}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center mt-16 mb-1">
            {" "}
            <p>SUPER ($15)</p>
          </div>
          <div className="w-full h-[80px] text-[16px]  mr-14 relative right-2">
            <div className="flex items-center">
              <p className="mr-40 font-bold">J</p>
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`J${item}`}
                    className=" seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`J${item + 10}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center relative bottom-[16px] right-[4px]">
              <p className="mr-40 mt-1 font-bold">K</p>
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`K${item}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md  hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`K${item + 10}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center relative bottom-[28px] right-[3px]">
              <p className="mr-40 font-bold">L</p>
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`L${item}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`L${item + 10}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex items-center relative bottom-[42px] right-[8px]">
              <p className="mr-40 font-bold">M</p>
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`M${item}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`M${item + 10}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>

            <div className="flex items-center relative bottom-[53px] right-[8px]">
              <p className="mr-40 font-bold">N</p>
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`N${item}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`N${item + 10}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center relative bottom-[64px] right-[10px]">
              <p className="mr-40 font-bold">O</p>
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`O${item}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>{" "}
              <div className="flex mr-20 gap-1">
                {row1.map((item, i) => (
                  <div
                    style={{
                      background:
                        "linear-gradient(to top,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#c5c5c5,#eee,#fff)",
                    }}
                    key={i}
                    id={`O${item + 10}`}
                    className="seat w-[22.11px] h-[29.62px] rounded-md hover:-translate-y-1.5 cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  mt-[100px] h-[100px] bg-black px-20">
        <div>
          <div>
            <button className="bg-orange-500 p-3 text-white rounded-xl">
              Go Back
            </button>
          </div>
        </div>
      </div>
      {showTerms && <TermsandCoditions />}
    </div>
  );
};

export default Seat;

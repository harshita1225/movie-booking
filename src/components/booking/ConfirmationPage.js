import React, { useContext, useEffect, useState } from "react";
import { FaDirections } from "react-icons/fa";
import { Context } from "../../context/Context";
import MapMovieTheater from "./MapMovieTheater";

const ConfirmationPage = () => {
  const { state } = useContext(Context);
  let [currDate, setCurrDate] = useState(new Date().toLocaleString());
  let [currTime, setCurrTime] = useState("");
  let [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let options = { hour12: false };
    //console.log(new Date().toLocaleString("en-US", options).slice(-9));
    setCurrDate(currDate.slice(0, 10));
    setCurrTime(new Date().toLocaleString("en-US", options).slice(-9));
  }, [currDate]);

  console.log(currDate);

  return (
    <div>
      <div className="w-full h-screen bg-zinc-900 flex justify-center items-center gap-5">
        <div className="w-[400px] h-[636px] border-2 p-5 border-t-4 border-t-orange-500 bg-zinc-700 rounded-b-lg">
          <div>
            <div className="w-full flex flex-col h-[180px] border-b-2 border-gray-600">
              <div className="flex gap-10 h-[100px] items-center">
                {" "}
                <img
                  style={{
                    width: "100px",
                    height: "150px",
                    borderRadius: 5,
                    position: "relative",
                    top: -30,
                  }}
                  src={state?.poster}
                  alt="poster"
                />
                <div className="flex flex-col ">
                  <p className="text-[26px] text-orange-500">{state?.title}</p>
                  <p className="text-[12px] text-slate-400">
                    English,{state?.genre}
                  </p>
                </div>
              </div>

              <div className="w-full flex justify-between mt-5">
                <div className="flex flex-col">
                  <p className="text-slate-400 font-light text-[14px]">
                    AUDI NO.
                  </p>
                  <p className="text-white font-semi-bold">
                    {Math.ceil(Math.random() * 10 + 1)}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-400 font-light text-[14px]">
                    TICKETS
                  </p>
                  <p className="text-white font-semi-bold">
                    {state?.selectedseat.length}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-slate-400 font-light text-[14px]">SEAT</p>
                  <p className="text-white font-semi-bold text-[14px]">
                    {state?.selectedseat.join(",")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-5 border-b-2 border-slate-500 border-dashed">
            <div className="flex flex-col mb-5">
              <p className="text-slate-400 font-light text-[12px]">
                DATE & TIME
              </p>
              <p className="font-light  text-white text-[14px]">
                {state?.date}/{state?.year} | {state?.time}
              </p>
            </div>
            <div className="flex flex-col mb-5">
              <p className="text-slate-400 font-light text-[12px]">
                VENUE DETAILS
              </p>
              <div className="flex justify-between items-center">
                <div className="flex flex-col text-[14px] text-white font-light">
                  <p>REGAL UNION :</p>
                  <p>33 Lecount Pl, New Rochelle, NY 10801</p>
                </div>
                <div
                  onClick={() => setShowModal(!showModal)}
                  className="cursor-pointer"
                >
                  <FaDirections style={{ fill: "orange", fontSize: "25px" }} />
                  {/* <p>40.74081488402601,- 73.98799908235267</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-5 border-b-2 border-slate-600 justify-between">
            <div>
              <div className="flex flex-col mb-5">
                <p className="text-slate-400 font-light text-[12px]">
                  BOOKING DATE & TIME
                </p>
                <p className="font-light text-white text-[14px]">
                  {/* SATURDAY, 29 NOV,2022 | 11:30{" "} */}
                  {currDate} |{currTime}
                </p>
              </div>

              <div className="flex justify-between items-center gap-5 mb-5">
                <div className="flex flex-col text-[14px] text-white font-light">
                  <p className="text-slate-400 font-light text-[12px]">
                    PAYMENT TYPE
                  </p>
                  <p>Credit Card</p>
                </div>
                <div className="flex flex-col text-[14px] text-white font-light">
                  <p className="text-slate-400 font-light text-[12px]">
                    CONFIRMATION
                  </p>
                  <p>#14587916</p>
                </div>
              </div>
            </div>
            <div>
              <img
                style={{ width: "100px", height: "100px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/3/37/MITC2013_QR_Code.jpg"
                alt="barcode"
              />
            </div>
          </div>
          <div className="my-5">
            <div className="flex justify-between text-[14px]">
              <p className=" text-white font-light">
                Tickets {state?.selectedseat.length}
              </p>
              <p className="text-white font-semi-bold">
                ${state?.priceArray.reduce((acc, curr) => (acc += curr), 0)}
              </p>
            </div>
            <div className="flex justify-between text-[14px]">
              <p className=" text-white font-light">Convenience Fees</p>
              <p className="text-white font-semi-bold">$1,99</p>
            </div>
          </div>
          <div className="flex  text-orange-500 text-[16px] font-bold justify-between">
            <p>Total</p>
            <p>
              {" "}
              $
              {state?.priceArray
                .reduce((acc, curr) => (acc += curr), 1.99)
                .toFixed(2)}
            </p>
          </div>
        </div>
        {showModal && (
          <div className="w-[300px] h-[370px] border-2 p-3  bg-zinc-700">
            <div className="flex flex-col">
              <div className="text-white text-[14px] ">
                <p>REGAL UNION</p>
                <p>33 Lecount Pl, New Rochelle, NY 10801</p>
              </div>
              <div>
                <MapMovieTheater />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmationPage;

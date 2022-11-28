import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

const BookingHistory = () => {
  const { state, dispatch } = useContext(Context);
  let [currDate, setCurrDate] = useState(new Date().toDateString());

  console.log(currDate);
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-[980px] h-screen mx-auto mt-5">
        <div className="flex items-center justify-center w-full h-[50px]">
          <h1 className=" bg-orange-500 text-[25px] font-bold px-3 py-2 mb-2">
            BOOKING HISTORY
          </h1>
        </div>

        {state?.title && (
          <div className="w-full flex justify-between bg-white my-2">
            <div className="bg-orange-500 text-white w-[650px] p-5">
              <div className="text-[22px] ">{state?.title}</div>
              <div className="text-[16px]">
                <p>
                  <span className="font-bold text-[16px]">Booking Date:</span>{" "}
                  {currDate}
                </p>
                <p>
                  <span className="font-bold">Quantity: </span>
                  {state?.selectedseat?.length}
                </p>
                <p>
                  <span className="font-bold">Payment Status:</span>{" "}
                  <span className="text-green-900 font-bold">Success</span>
                </p>
              </div>
              <div className="flex items-center justify-between ">
                <p className="font-bold text-[16px]">Amount Paid:</p>
                <p className="text-bold text-[28px]">
                  ${" "}
                  {(
                    +state?.priceArray.reduce(
                      (acc, curr) => (acc += curr),
                      1.99
                    ) +
                    +state?.foodpriceArray.reduce(
                      (acc, curr) => (acc += curr),
                      0
                    )
                  ).toFixed(2)}
                </p>{" "}
              </div>
            </div>
            <div className="bg-white flex flex-col items-center justify-center w-[300px]">
              <div className="w-[100px] h-[100px]">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[16px]">Payment: Credit Card</p>
                <p className="text-[16px]">Card used: **** **** **** 2512</p>
              </div>
            </div>
          </div>
        )}
        <div className="  w-full flex justify-between bg-white my-2">
          <div className="bg-orange-500 text-white w-[650px] p-5">
            <div className="text-[22px] ">The Polar Express</div>
            <div className="text-[16px]">
              <p>
                <span className="font-bold text-[16px]">Booking Date:</span> Tue
                Oct 13 2022
              </p>
              <p>
                <span className="font-bold">Quantity: </span>2
              </p>
              <p>
                <span className="font-bold">Payment Status:</span>{" "}
                <span className="text-green-900 font-bold">Success</span>
              </p>
            </div>
            <div className="flex items-center justify-between ">
              <p className="font-bold text-[16px]">Amount Paid:</p>
              <p className="text-bold text-[28px]">$44.99</p>{" "}
            </div>
          </div>
          <div className="bg-white flex flex-col items-center justify-center w-[300px]">
            <div className="w-[100px] h-[100px]">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png" />
            </div>
            <div>
              <p className="text-[16px]">Payment: Credit Card</p>
              <p className="text-[16px]">Card used: **** **** **** 2512</p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between bg-white my-2">
          <div className="bg-orange-500 text-white w-[650px] p-5">
            <div className="text-[22px] ">Rainbow Dairy</div>
            <div className="text-[16px]">
              <p>
                <span className="font-bold text-[16px]">Booking Date:</span> Fri
                Aug 11 2022
              </p>
              <p>
                <span className="font-bold">Quantity: </span>2
              </p>
              <p>
                <span className="font-bold">Payment Status:</span>{" "}
                <span className="text-green-900 font-bold">Success</span>
              </p>
            </div>
            <div className="flex items-center justify-between ">
              <p className="font-bold text-[16px]">Amount Paid:</p>
              <p className="text-bold text-[28px]">$34.99</p>{" "}
            </div>
          </div>
          <div className="bg-white flex flex-col items-center justify-center w-[300px]">
            <div className="w-[100px] h-[100px]">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png" />
            </div>
            <div>
              <p className="text-[16px]">Payment: Credit Card</p>
              <p className="text-[16px]">Card used: **** **** **** 2512</p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-between bg-white my-2">
          <div className="bg-orange-500 text-white w-[650px] p-5">
            <div className="text-[22px] ">The Son</div>
            <div className="text-[16px]">
              <p>
                <span className="font-bold text-[16px]">Booking Date:</span> Sun
                May 08 2022
              </p>
              <p>
                <span className="font-bold">Quantity: </span>4
              </p>
              <p>
                <span className="font-bold">Payment Status:</span>{" "}
                <span className="text-green-900 font-bold">Success</span>
              </p>
            </div>
            <div className="flex items-center justify-between ">
              <p className="font-bold text-[16px]">Amount Paid:</p>
              <p className="text-bold text-[28px]">$74.59</p>{" "}
            </div>
          </div>
          <div className="bg-white flex flex-col items-center justify-center w-[300px]">
            <div className="w-[100px] h-[100px]">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png" />
            </div>
            <div>
              <p className="text-[16px]">Payment: Credit Card</p>
              <p className="text-[16px]">Card used: **** **** **** 2512</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button
            onClick={() => navigate("/home")}
            className="bg-orange-500 text-white text-[16px] px-3 py-2 rounded-md"
          >
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;

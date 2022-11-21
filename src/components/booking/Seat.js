import React from "react";
import { MdOutlineEventSeat } from "react-icons/md";

const Seat = () => {
  return (
    <div className="w-screen h-screen flex justify-center bg-black text-white">
      <div className="flex flex-col  items-center">
        <div className="border-2 w-[980px] h-[250px] bg-slate-100">
          <div>Movie name</div>
          <div>DATE :TIME</div>
        </div>
        <div className="w-[980px] h-[50px] flex justify-center">
          <p>⬆ SCREEN THIS WAY</p>
        </div>

        <div className="w-[980px] h-[50px] flex justify-center gap-20 mx-aut">
          <div className="text-16px flex items-center gap-3">
            <div className="w-[24px] h-[29px] rounded-md bg-white"></div>
            <p>Avaliable</p>
          </div>
          <div className="text-16px flex items-center gap-3">
            <div className="w-[24px] h-[29px] rounded-md bg-yellow-400"></div>
            <p>Selected</p>
          </div>
          <div className="text-16px flex items-center gap-3">
            <div className="w-[24px] h-[29px] rounded-md bg-slate-500"></div>
            <p>Unavaliable</p>
          </div>
        </div>

        <div>
          <div className="w-full h-[80px] text-[16px]">
            <div className="flex items-center p-5">
              <p className="mr-40 font-bold">A</p>
              <div className="flex mr-20 gap-1">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex gap-1 ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
            <div className="flex items-center p-5 relative top-[-2rem]">
              <p className="mr-40 font-bold">B</p>
              <div className="flex mr-20 gap-1">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex gap-1">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
            <div className="flex bg-red-400 items-center ">
              <p className="mr-40">C</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-[100px] text-[16px]">
            <div className="flex bg-red-400 items-center">
              <p className="mr-40">D</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
            <div className="flex bg-red-400 items-center">
              <p className="mr-40">E</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
            <div className="flex bg-red-400 items-center ">
              <p className="mr-40">F</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
            <div className="flex bg-red-400 items-center ">
              <p className="mr-40">G</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
          </div>
          <div className="w-full h-[100px] text-[16px]">
            <div className="flex bg-red-400 items-center">
              <p className="mr-40">H</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
            <div className="flex bg-red-400 items-center">
              <p className="mr-40">I</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
            <div className="flex bg-red-400 items-center ">
              <p className="mr-40">J</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
            <div className="flex bg-red-400 items-center ">
              <p className="mr-40">K</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
            <div className="flex bg-red-400 items-center ">
              <p className="mr-40">L</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
            <div className="flex bg-red-400 items-center ">
              <p className="mr-40">M</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
            <div className="flex bg-red-400 items-center ">
              <p className="mr-40">N</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
            <div className="flex bg-red-400 items-center ">
              <p className="mr-40">O</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
            <div className="flex bg-red-400 items-center ">
              <p className="mr-40">P</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>{" "}
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>

            <div className="flex bg-red-400 items-center ">
              <p className="mr-40">Q</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
            <div className="flex bg-red-400 items-center ">
              <p className="mr-40">R</p>
              <div className="flex mr-20 t">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>

            <div className="flex bg-red-400 items-center">
              <p className="mr-40">S</p>
              <div className="flex mr-[15rem]">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
              <div className="flex ">
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
                <div className="w-[22.11px] h-[29.62px] rounded-md bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seat;

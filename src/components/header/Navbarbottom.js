import React from "react";

const Navbarbottom = () => {
  return (
    <div className=" bg-orange-500  text-white font-light h-[35px] flex justify-center items-center">
      <ul className="flex justify-end gap-8 text-[16px] items-center mr-10 ">
        <li className="hover:underline cursor-pointer">THERATERS</li>
        <li className="hover:underline cursor-pointer ">MOVIES</li>
        <li className="hover:underline cursor-pointer">GIFT CARDS</li>
        <li className="hover:underline cursor-pointer">PROMOS</li>
        <li className="hover:underline cursor-pointer">CAREERS</li>
        <li className="hover:underline cursor-pointer">CARES</li>
        <li className="hover:underline cursor-pointer">CROWN CLUB</li>
      </ul>
    </div>
  );
};

export default Navbarbottom;

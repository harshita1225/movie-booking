import React from "react";

const Navbarbottom = () => {
  return (
    <div className=" bg-orange-600  text-white font-bold h-[40px] flex justify-center items-center ">
      <ul className="flex justify-end gap-8 text-[16px] items-center mr-10 ">
        <li className="hover:underline cursor-pointer">Buzz</li>
        <li className="hover:underline cursor-pointer">Corona Cares</li>
        <li className="hover:underline cursor-pointer">Offers</li>
        <li className="hover:underline cursor-pointer">Coorporates</li>
        <li className="hover:underline cursor-pointer">Advertise</li>
        <li className="hover:underline cursor-pointer">Gift Cards</li>
        <li className="hover:underline cursor-pointer">More</li>
      </ul>
    </div>
  );
};

export default Navbarbottom;

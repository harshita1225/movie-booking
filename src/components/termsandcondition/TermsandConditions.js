import React, { useContext } from "react";
import cares from "../images/cares.png";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Context } from "../../context/Context";

const TermsandCoditions = () => {
  const { dispatch } = useContext(Context);
  return (
    <div className="section  w-full h-screen flex justify-center items-center text-white absolute z-10">
      <div className="terms w-[920px] h-[350px] border-2 border-black bg-zinc-600">
        <div className=" bg-zinc-600 w-full h-[45px] text-[30px]  flex justify-between">
          <p className="w-full px-4 text-center">Terms & Conditions</p>
          <p
            className=" flex items-center cursor-pointer"
            onClick={(e) => {
              //console.log("blur background");
              dispatch({ type: "BLUR-BACKGROUND", payload: false });
              e.target.closest(".section").remove();
            }}
          >
            <AiOutlineCloseCircle />
          </p>
        </div>
        <div className=" bg-zinc-600 flex justify-center">
          <img
            style={{ width: "100%", height: "100px" }}
            src={cares}
            alt="cares"
          />
        </div>
        <div className="px-5 text-[12px] bg-zinc-600">
          <ul>
            <li className="list-disc">
              Outside food & beverages are not allowed in the cinema premises.
            </li>
            <li className="list-disc">
              Wearing the mask is mandatory (as per guidelines of the local
              authority)
            </li>
            <li className="list-disc">
              For 3D movies, ticket price includes charges towards the usage of
              3D glasses.
            </li>
            <li className="list-disc">
              Patrons under the influence of alcohol or drugs will not be
              allowed inside the cinema premises.
            </li>
            <li className="list-disc">
              Tickets are compulsory for children of 3 years & above.
            </li>
            <li className="list-disc">
              The person below the age of 18 years cannot be admitted for movies
              certified A.
            </li>
            <li className="list-disc">
              Items like laptops, cameras, knives, lighters, matchboxes,
              cigarettes, firearms, and all types of inflammable objects are
              strictly prohibited.
            </li>
            <li className="list-disc">
              {" "}
              Items like carry-bags, eatables, helmets, handbags are not allowed
              inside the theatres and are strictly prohibited. Kindly deposit at
              the baggage counter of the mall/cinema.
            </li>
            <li className="list-disc">
              The seat Layout page for PVR Cinemas is for representational
              purposes only and the actual seat layout might vary.
            </li>
            <li className="list-disc">
              Decision(s) taken by PVR shall be final and binding, Rights of
              admission reserved.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsandCoditions;

import React from "react";
import cares from "../images/cares.png";
import { AiOutlineCloseCircle } from "react-icons/ai";

const TermsandCoditions = () => {
  return (
    <div className="section w-full h-screen flex justify-center items-center bg-black bg-opacity-70">
      <div className="w-[990px] h-[690px]">
        <div className="w-full h-[50px] text-[35px]  bg-zinc-300 flex justify-between px-10">
          <p className="flex items-center px-4">Terms & Conditions</p>
          <p
            className=" flex items-center cursor-pointer"
            onClick={(e) => e.target.closest(".section").remove()}
          >
            <AiOutlineCloseCircle />
          </p>
        </div>
        <div>
          <img src={cares} alt="cares" />
        </div>
        <div className="bg-zinc-300 px-20 py-10">
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
            <li className="list-disc">
              PVR may contact the guest to seek feedback for service
              improvement.
            </li>
            <li className="list-disc">
              Ticket prices are subject to change without any prior
              notification.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsandCoditions;

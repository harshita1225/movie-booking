import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-screen h-[400px] mt-[150px] flex flex-col text-white">
      <div className="w-[1000px] mx-auto">
        <div className="flex justify-between">
          <div>
            <h3 className="text-[orange]">OUR BRANDS</h3>
            <ul>
              <li>PVR PICTURES</li>
              <li>PLAYHOUSE</li>
              <li>PVR GOLD</li>
              <li>PVR IMAX</li>
              <li>PVR DIRECTORS CUT</li>
              <li>PVR LUXE</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[orange]">GENERAL</h3>
            <ul>
              <li>ABOUT US</li>
              <li>FAQ's</li>
              <li>CAREER</li>
              <li>NEWS</li>
              <li>INVESTORS</li>
              <li>FEEDBACK</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[orange]">CINEMAS</h3>
            <ul>
              <li>CINEMAS</li>
              <li>UPCOMING</li>
              <li>ADVERTISE</li>
              <li>BEYOND MOVIES</li>
              <li>BIRTHDAYS</li>
              <li>SUBSCRIBE</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-5 mx-auto m-[25px] items-center">
        <div>
          <img
            style={{ width: "50px" }}
            src="https://now.symassets.com/content/dam/norton/global/images/non-product/logos/norton_logo.png"
          />
        </div>
        <div> PRIVACY POLICY</div>
        <div> TERMS & CONDITIONS</div>
        <div> TERMS OF USE</div>
        <div className="flex gap-2">
          <FaFacebookSquare />
          <ImInstagram />
          <FaTwitterSquare />
          <FaYoutube />
          <FaLinkedin />
          <FaGooglePlusSquare />
        </div>
      </div>
      <div className="text-[orange] text-center">
        All rights reserved Regal Theatres 2022 ©{" "}
      </div>
    </div>
  );
};

export default Footer;

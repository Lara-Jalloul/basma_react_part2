import React from "react";
import "./Challenge.css";
import { MdOutlineTouchApp } from "react-icons/md";
import { IoFingerPrintOutline } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";

function Challenge() {
  return (
    <div className="container_feature">
      <div className="feature_top">
        <div className="code">Code Challenge</div>
        <div className="line"> </div>
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad
          minim veniam.
        </div>
      </div>
      <div className="feature_bottom">
        <div className="box">
          <div className="icon">
            <MdOutlineTouchApp />
          </div>
          <div className="full"> Fully functional </div>
          <div className="parag">
            Lorem ipsum dolor sit amet sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua sit amet, consectetur.
          </div>
        </div>

        <div className="box">
          <div className="icon">
            <IoFingerPrintOutline />
          </div>
          <div className="full"> Fully functional </div>
          <div className="parag">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <MdOutlineCheckBoxOutlineBlank />
          </div>
          <div className="full"> Fully functional </div>
          <div className="parag">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <HiOutlineLocationMarker />
          </div>
          <div className="full"> Location Tracking </div>
          <div className="parag">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua..
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <FiSettings />
          </div>
          <div className="full"> Powerful Settings </div>
          <div className="parag">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <BsGlobe2 />
          </div>
          <div className="full"> Multiple Language </div>
          <div className="parag">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge;

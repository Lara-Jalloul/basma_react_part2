import React from "react";
import thumb2 from "../../assets/thumb-2.png";
import { RiStackFill } from "react-icons/ri";
import { FaBrush } from "react-icons/fa";
import { IoIosWater } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import "./Share.css";

function Share() {
  return (
    <>
      <div className="container-share">
        <div className="share-box">
          <div className="share-left">
            <div className="share-title">
              <h1>Share you photos with friends easily</h1>
            </div>
            <ul>
              <li>
                <div className="share-icons">
                  <RiStackFill />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </li>
              <li>
                <div className="share-icons">
                  <FaBrush />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </li>
              <li>
                <div className="share-icons">
                  <IoIosWater />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </li>
              <li>
                <div className="share-icons">
                  <FaCartArrowDown />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </li>
            </ul>
            <button className="share-button">Learn More</button>
          </div>
          <div className="share-right">
            <img src={thumb2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Share;

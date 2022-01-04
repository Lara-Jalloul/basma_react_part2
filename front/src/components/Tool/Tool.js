import React from "react";
import thumb from "../../assets/thumb-2 (1).png";
import "./Tool.css";
import { BsBellFill } from "react-icons/bs";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import check from "../../assets/check.svg";

function Tool() {
  return (
    <div className="container-tool">
      <div className="container-box">
        <div className="tool-left">
          <img src={thumb} alt="" />
        </div>

        <div className="tool-right">
          <span className="tool-title">Work faster with powerful tools.</span>
          <ul>
            <li>
              <img src={check} className="check" alt="" />
              <p>
                Combined with a handful of model sentence structures looks
                reasonable.
              </p>
            </li>
            <li>
              <img src={check} className="check" alt="" />
              <p>
                Contrary to popular belief, Lorem ipsum is not simply
                randomtext.
              </p>
            </li>
            <li>
              <img src={check} className="check" alt="" />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium.
              </p>
            </li>

            <li>
              <img src={check} className="check" alt="" />
              <p>
                Natus error sit voluptatem unde omnis iste natus error sit
                volupatatem accusantium.
              </p>
            </li>
            <li>
              <img src={check} className="check" alt="" />
              <p>
                All the Lorem Ipsum generators on the Internet tend to repeat
                necessary.
              </p>
            </li>
          </ul>
          <div className="container-icons">
            <div className="icon-tool">
              <BsBellFill />
            </div>
            <div className="icon-tool">
              <FaEnvelopeOpen />
            </div>
            <div className="icon-tool">
              <FaVideo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tool;

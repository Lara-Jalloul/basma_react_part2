import React from "react";
import thumb2 from "../../assets/thumb-2.png";
import check from "../../assets/check.svg";

function Share() {
  return (
    <>
      <div className="container-share">
        <div className="share-box">
          <div className="share-left">
            <span className="share-title">Share you photos with your friends easily</span>
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

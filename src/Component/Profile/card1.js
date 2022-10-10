import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Card1(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="lols" style={{ background: "linear-gradient(359.96deg,#30ced0 .02%,#12b2c0 101.18%)" }}>
      <div className="container">
        <div className="row newHome">
          <div className="col barisHome">
            <div className="card cardHome cardPro">
              <div className="card-body" data-aos="fade-down">
                <h1 className="crd1 card-title card-titleHome">
                  {props.text1}
                  <br />
                  {props.text2}
                </h1>
                <br />
                <p className="card-text card-textHome">{props.text}</p>
              </div>
            </div>
          </div>
          <div className="col">
            <img style={{ width: "100%" }} src={props.svg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;

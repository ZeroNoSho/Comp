import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Card2(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="row">
      <div className="card cardHome1" style={{ width: "35rem" }}>
        <img src={props.svg1} className="card-img-top imgHome1" alt="..." data-aos="zoom-in" />
        <div className="card-body" data-aos="zoom-in">
          <h1 className="card-title card-titleHome1  text-center">bla by ABC Digital</h1>
          <p className="card-text card-textHome text-center">Aplikasi mobile bank digital yang bisa ini itu, dan menyatu dengan hidupmu.</p>
          <button href="#" className="btnHome btnCenter btn">
            Go somewhere
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card2;

import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Card1(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="row newHome">
      <div className="col barisHome">
        <div className="card cardHome h1d" >
          <div className="card-body" data-aos="fade-down">
            <h1 className="card-title card-titleHome">
              Ada <br />
              Karenamu
            </h1>
            <br />
            <p className="card-text card-textHome">Lahir digital. Bank yang selalu ada tanpa jarak. Semudah itu, senyaman itu. Kami hadir buat kamu. Kami ya kamu.</p>
            <Link className="btn btnHome" to={"/Profile"}>
              Kenalan, Yuk!
            </Link>
          </div>
        </div>
      </div>
      <div className="col" style={{ width: "100%" }}>
        <img style={{ width: "100%" }} src={props.svg} alt="" />
      </div>
    </div>
  );
}

export default Card1;

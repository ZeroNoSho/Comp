import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Card3(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="row cardrow cardrow12">
      <div className="row newHome">
        <div className="col">
          <img className="imgHome2" style={{ width: "100%" }} src={props.svg2} alt="" data-aos="zoom-in" />
        </div>
        <div className="col barisHome" data-aos="fade-up">
          <div className="card cardHome1 h1d">
            <div className="card-body">
              <h1 className="card-title card-titleHome3">
                Tata Kelola <br />
                Perusahaan
              </h1>
              <br />
              <p className="card-text card-textHome">Bagi BCA Digital, transparansi usaha, kualitas pelayanan, dan kepercayaan nasabah adalah kunci atas keberlangsungan perusahaan kami.</p>
              <Link className="link limq">
                <span className="link1">Selengkapnya</span> &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;

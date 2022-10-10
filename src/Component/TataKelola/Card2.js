import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Card2() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container" style={{ marginTop: "150px", marginBottom: "50px" }}>
      <div className="row cardrow21">
        <h1 className="card-title card-titleHome3 text-center" data-aos="fade-down">
          Compliance Campaign
        </h1>
        <p className="card-text card-textHome text-center" data-aos="fade-down">
          Kampanye kepatuhan yang sedang berlangsung
        </p>
        <div className="col" style={{ marginBottom: "50px" }}>
          <img src="https://bcadigital.co.id/_nuxt/img/apuppt.5bfd874.jpg" className="img-fluid" alt="..."></img>
        </div>
        <div className="col" style={{ marginBottom: "50px" }}>
          <img src="https://bcadigital.co.id/_nuxt/img/apuppt.5bfd874.jpg" className="img-fluid" alt="..."></img>
        </div>
        <div className="col" style={{ marginBottom: "50px" }}>
          <img src="https://bcadigital.co.id/_nuxt/img/apuppt.5bfd874.jpg" className="img-fluid" alt="..."></img>
        </div>
      </div>
    </div>
  );
}

export default Card2;

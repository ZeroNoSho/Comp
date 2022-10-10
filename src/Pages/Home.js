import svg from "../7.png";
import svg1 from "../3.png";
import svg2 from "../4.png";
import Card1 from "../Component/Home/card1";
import Card2 from "../Component/Home/card2";
import Card3 from "../Component/Home/card3";
import Card4 from "../Component/Home/card4";
import Card5f from "../Component/Home/card5";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    document.title = "ABC DIGITAL | Home";
  }, []);

  return (
    <div className="ar">
      <div className="container container1 lols" style={{ background: "linear-gradient(359.96deg,#30ced0 .02%,#12b2c0 101.18%)" }}>
        <Card1 svg={svg} />
      </div>

      <div className="container container1">
        <Card2 svg1={svg1} />
      </div>

      <div className="container container1">
        <Card3 svg2={svg2} />
      </div>

      <div className="container con">
        <Card4 />
      </div>

      <footer>
        <Card5f />
      </footer>

      <div className="footer-credit">
        <div className="container">
          <footer className="footers">Terima kasih sudah mampir! Laman ini lebih nyaman dinikmati di ponsel pintar. Coba sekarang untuk pengalaman yang lebih maksimal.</footer>
        </div>
      </div>
    </div>
  );
}

export default Home;

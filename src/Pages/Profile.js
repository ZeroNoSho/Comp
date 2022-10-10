import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import svg from "../7.png";
import Card1 from "../Component/Profile/card1";
import Card2 from "../Component/Profile/card2";
import Card3 from "../Component/Profile/card3";
import Card4 from "../Component/Profile/card4";
import Card5 from "../Component/Profile/card5";
import Card6 from "../Component/Profile/card6";
import Card5f from "../Component/Home/card5";

function Profile() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    document.title = "ABC DIGITAL | Media";
  }, []);
  const [stts, setName] = useState(true);
  const [read, setRead] = useState("Read more");

  function handelNameOnclick() {
    if (stts === true) {
      setName(false);
      setRead("Read less");
    } else {
      setName(true);
      setRead("Read more");
    }
  }

  const text = "Kami adalah bank yang lahir seutuhnya dalam dunia digital";
  const text1 = "Tentang ";
  const text2 = "ABC Digital";

  return (
    <div>
      <Card1 svg={svg} text={text} text1={text1} text2={text2}></Card1>
      <Card2 stts={stts} read={read} handelNameOnclick={handelNameOnclick}></Card2>
      <Card3></Card3>
      <Card4></Card4>
      <Card5></Card5>
      <Card6></Card6>
      <div className="profile12">
        <div className="container" style={{ marginTop: "100px" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "700" }}>Milestone</h1>
        </div>
        <img style={{ width: "100%" }} src="https://bcadigital.co.id/_nuxt/img/img-milestone-desktop.a9174e2.svg" alt="" />
      </div>
      <div className="profile123">
        <div className="container" style={{ marginTop: "100px" }}>
          <h1 style={{ fontSize: "42px", fontWeight: "700" }}>Milestone</h1>
        </div>
        <img style={{ width: "100%" }} src="https://bcadigital.co.id/_nuxt/img/img-milestone-mobile.20e5f7e.svg" alt="" />
      </div>
     
      <Card5f />
    </div>
  );
}

export default Profile;

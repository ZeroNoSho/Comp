import Card1 from "../Component/Profile/card1";
import Card5f from "../Component/Home/card5";
import Card1T from "../Component/kontak/Card1";
import Card2 from "../Component/kontak/Card2";
import svg from "../7.png"
import React, { useEffect } from "react";
function Kontak() {
  useEffect(() => {
    document.title = "ABC DIGITAL | Kontak";
  });
  const text = "KORPORASI";
  const text1 = "Ada yang bisa";
  const text2 = "dibantu?";

  return (
    <div>
      <Card1 svg={svg} text={text} text1={text1} text2={text2}></Card1>
      <Card1T />
      <Card2 />
      <Card5f />
    </div>
  );
}

export default Kontak;

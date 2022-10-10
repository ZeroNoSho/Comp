import svg from "../7.png";
import Card1 from "../Component/Profile/card1";
import Card2 from "../Component/TataKelola/Card2";
import Card1T from "../Component/TataKelola/Card1";
import Card5f from "../Component/Home/card5";
import React, { useEffect } from "react";
function TataKelola() {
  useEffect(() => {
    document.title = "ABC DIGITAL | Media";
  });
  const text = "Segala transparansi mengenai seluk-beluk perusahaan BCA Digital sesuai prinsip-prinsip tata kelola dan regulasi yang berlaku bisa kamu lihat di laman ini.";
  const text1 = "Tata kelola";
  const text2 = "perusahaan";

  return (
    <div>
      <Card1 svg={svg} text={text} text1={text1} text2={text2}></Card1>
      <Card1T></Card1T>
      <Card2></Card2>
      <Card5f />
    </div>
  );
}

export default TataKelola;

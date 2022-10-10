import React, { useEffect } from "react";
import svg from "../7.png";
import Card1 from "../Component/Profile/card1";
import Card5f from "../Component/Home/card5";
import Card1K from "../Component/Karir/card1";

function Karir() {
  useEffect(() => {
    document.title = "ABC DIGITAL | Karir";
  });
  const karir = {
    nama: [
      "Java Back End Developer",
      "Java Middleware Developer",
      "Mobile Developer Developer",
      "Web Front End Developer",
      "Software Test Engineer",
      "Business Analyst/Product Owner - Funding",
      "Product Manager - Funding",
      "Business Analyst/Product Owner - Lending",
      "Product Manager - Lending",
      "Business Development - Lending",
      "Risk Operasional",
    ],
  };
  const text = "ABC Digital konsisten menciptakan pengalaman personal tidak hanya untuk nasabah. Tapi juga untuk kamu.";
  const text1 = "ABC Digital";
  const text2 = "Karir";

  return (
    <div>
      <Card1 svg={svg} text={text} text1={text1} text2={text2}></Card1>
      <div className="container" style={{ marginBottom: "100px", marginTop: "100px" }}>
        <div className="row wid1k">
          <h1 className="card-titleHome3 text-center ">Cari Kesempatanmu</h1>
          <p className="card-textHome text-center carrier-new">
            Setiap milestone yang kami raih merupakan kebanggaan bersama. Untuk itu, dengan senang hati kami sampaikan setiap pencapaian melalui rangkaian laporan berkala yang telah kami siapkan teruntuk seluruh pemangku kepentingan BCA
            Digital.
          </p>
        </div>
      </div>
      <Card1K karir={karir.nama}></Card1K>
      <Card5f />
    </div>
  );
}

export default Karir;

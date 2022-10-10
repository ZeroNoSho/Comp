import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Card2(props) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container" style={{ marginTop: "130px" }}>
      <div className="row">
        <div style={{ width: "80%" }} className="card cardHome cardHome" data-aos="fade-up">
          <p style={{ textAlign: "justify" }} className="card-text card-textHome">
            Kami hadir untuk kamu, para digital savvy yang menginginkan cara baru dalam urusan perbankan. Lewat platform yang akan terus dikembangkan sesuai kemajuan teknologi, ABC Digital akan selalu berusaha untuk bisa menjadi{" "}
            <b>jawaban atas kebutuhan finansial kamu</b>
          </p>
          <p hidden={props.stts} style={{ textAlign: "justify" }} className="card-text card-textHome text-justify">
            Layaknya teman, ABC Digital ingin tumbuh bersama dengan para nasabah. Kami ada untuk menyebarkan good vibes dan memberikan semangat dalam memulai langkahmu mewujudkan mimpi jadi kenyataan. <br />
            <br />
            Katanya tak kenal maka tak sayang. Biar lebih akrab, berikut sekilas sejarah tentang kami. Sebelumnya PT Bank Digital ABC (ABC Digital) itu adalah PT Bank Royal Indonesia (Royal Bank) yang diakuisisi oleh PT Bank Central Asia
            Tbk (ABC) pada akhir tahun 2019. Dengan identitas baru ini, ABC Digital berkomitmen untuk terus meracik ide baru untuk inovasi layanan dan produk perbankan yang selalu bikin kamu berkata, “untung ada ABC Digital!” <br />
            <br />
            Dan tanpa melupakan hal terpenting, ABC Digital akan selalu meninggalkan dampak positif dalam setiap jejak langkah kami demi menciptakan dunia yang sustain dan lebih baik. <br />
            <br />
            Sesuai Surat Keputusan Deputi Komisioner Pengawas Perbankan I Otoritas Jasa Keuangan Nomor KEP-92/PB.1/2020 tertanggal 19 Mei 2020 Tentang Penetapan Penggunaan Izin Usaha Atas Nama PT Bank Royal Indonesia menjadi Izin Usaha Atas
            Nama PT Bank Digital ABC
          </p>
          <button onClick={props.handelNameOnclick} style={{ padding: "0px", color: "GrayText" }} className="btn12">
            <u>{props.read}</u>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card2;

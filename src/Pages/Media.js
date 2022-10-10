import svg from "../7.png";
import Card1 from "../Component/Profile/card1";
import Card5f from "../Component/Home/card5";
import Card1M from "../Component/Media/Card1";
import Card2 from "../Component/Media/Card2";
import Card3G from "../Component/Media/Card3";
import React, { useEffect } from "react";

function Media() {
  useEffect(() => {
    document.title = "ABC DIGITAL | Media";
  });
  const jumlah1 = [
    "https://bcadigital.co.id/_nuxt/img/datamurahasiamu_photo2.9c74b36.png",
    "https://bcadigital.co.id/_nuxt/img/blu-by-BCA-Digital.7afe4f0.png",
    "https://bcadigital.co.id/_nuxt/img/Benni,%20Lea,%20Utta.0552c1b.png",
    "https://bcadigital.co.id/_nuxt/img/datamurahasiamu_photo2.9c74b36.png",
    "https://bcadigital.co.id/_nuxt/img/blu-by-BCA-Digital.7afe4f0.png",
    "https://bcadigital.co.id/_nuxt/img/Benni,%20Lea,%20Utta.0552c1b.png",
    "https://bcadigital.co.id/_nuxt/img/datamurahasiamu_photo2.9c74b36.png",
    "https://bcadigital.co.id/_nuxt/img/blu-by-BCA-Digital.7afe4f0.png",
    "https://bcadigital.co.id/_nuxt/img/Benni,%20Lea,%20Utta.0552c1b.png",
    "https://bcadigital.co.id/_nuxt/img/datamurahasiamu_photo2.9c74b36.png",
    "https://bcadigital.co.id/_nuxt/img/blu-by-BCA-Digital.7afe4f0.png",
    "https://bcadigital.co.id/_nuxt/img/Benni,%20Lea,%20Utta.0552c1b.png",
  ];
  const nam1 = [
    "BINA NUSANTARA Gandeng BCA Digital untuk Layanan Bank as a Service (BaaS) Pertama di Sektor Pendidikan",
    "Platform Bank Digital blu Berusia Satu Tahun, BCA Digital Tempuh Strategi Bisnis Berbeda dengan Bank Digital Lainnya",
    "Dukung Pemulihan Ekonomi UMKM, BCA Digital Salurkan Kredit Lewat P2P Komunal Indonesia",
    "blu by BCA Digital Resmi Terapkan Layanan BI-Fast, Transfer Antar Bank Hanya Rp2.500",
    "BCA Digital dan Zemangat Jalin Kolaborasi Memperluas Akses Ekosistem Digital Demi Tingkatkan Inklusi untuk Pelaku UKM",
    "Beat the Best by blu, Bawa Pejuang Solo Ranked Mobile Legends Jajal Skena Turnamen Profesional",
    "Pacu Laju Solusi Kerusakan Lingkungan BCA Digital berkolaborasi dengan Greeneration Foundation dan Kitabisa Dalam Inisiatif #blubuatbaik Tuntaskan Masalah Sampah Di Banyuwangi",
    "Kolaborasi Telkomsel redi dan blu by BCA Digital, Integrasikan Layanan Perbankan untuk Akses Keuangan Digital yang Lebih Mudah dan Nyaman",
    "Jenius dari Bank BTPN, blu by BCA Digital, BCA, BNI, dan Twitter Indonesia Kolaborasi Kampanyekan Edukasi Keamanan #DatamuRahasiamu",
    "Kolaborasi dengan Yura Yunita, BCA Digital Tingkatkan Literasi Finansial Millennials Lewat Persembahan bluMusical",
    "Lewat Integrasi Aplikasi blu dan Blibli, BCA Digital Perkuat Ekosistem Digital untuk Indonesia",
    "BCA Digital Resmi Luncurkan Aplikasi ‘blu’, Lengkap dengan Fitur Keuangan Menarik",
  ];
  const foto = [
    "https://bcadigital.co.id/_nuxt/img/binus-x-blu.a070250.png",
    "https://bcadigital.co.id/_nuxt/img/its-bluday.06b83cd.jpg",
    "https://bcadigital.co.id/_nuxt/img/bcadigital-komunal.625ac18.png",
    "https://bcadigital.co.id/_nuxt/img/bcadigital-bifast.4945048.png",
    "https://bcadigital.co.id/_nuxt/img/kolaborasi-zemangat-blu.7d88222.png",
    "https://bcadigital.co.id/_nuxt/img/beatthebest_press.4303473.png",
    "https://bcadigital.co.id/_nuxt/img/blubuatbaik.5a9c0f9.png",
    "https://bcadigital.co.id/_nuxt/img/redixblu.b0f8cf2.jpg",
    "https://bcadigital.co.id/_nuxt/img/datamurahasiamu.24c9edd.jpg",
    "https://bcadigital.co.id/_nuxt/img/bluMusical_thumbnail.28c7096.jpg",
    "https://bcadigital.co.id/_nuxt/img/20210723-thumbnail-small.0434f26.jpg",
    "https://bcadigital.co.id/_nuxt/img/blu-by-BCA-Digital-thumbnail-small.6dbeff4.png",
  ];
  const text = "Menghadirkan berita terkini terkait produk, aksi korporasi, CSI, dan berita lainnya seputar ABC Digital yang aktual dan terpercaya.";
  const text1 = "BCA Digital";
  const text2 = "Pos";

  return (
    <div>
      <Card1 svg={svg} text={text} text1={text1} text2={text2}></Card1>
      <Card1M />
      <Card2 nam1={nam1} foto={foto}></Card2>
      <Card3G jumlah1={jumlah1}></Card3G>
      <Card5f />
    </div>
  );
}

export default Media;

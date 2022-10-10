import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Card2() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col">
          <div className="card cardHome wid1k">
            <div className="card-body">
              <div className="wid5k card-title card-titleHome12" data-aos="fade-up">
                <h1 className="card-title card-titleHome12">Mekanisme Pengaduan Nasabah</h1>
              </div>
              <br />
              <p className="card-text card-textHome" data-aos="fade-up">
                Sesuai dengan ketentuan Otoritas Jasa Keuangan yang berlaku, bla by ABC Digital menyediakan Mekanisme Pengaduan Nasabah, di mana nasabah bisa mengajukan keluhan atau pengaduan terkait dengan masalah saat bertransaksi.
                Berikut cara yang bisa nasabah ikuti jika ingin mengajukan pengajuan:
                <br></br>
                <br></br>
                1. Tertulis: email & sosial media <br></br>
                2. Lisan tanpa tatap muka: melalui telepon ke haloblu
                <br />
                <br />
                Pengaduan harus dilengkapi dengan bukti identitas dan dokumen pendukung.
                <br />
              </p>
              <h4 data-aos="fade-up">
                <b> Saluran Pengaduan Nasabah blu by ABC Digital </b>
              </h4>
              <p data-aos="fade-up">
                Twitter: @haloblu
                <br />
                Email: haloblu@bcadigital.co.id
                <br />
                WhatsApp : 0811-6500-668
                <br />
                haloblu: 1500668
              </p>
              <h4 data-aos="fade-up">
                <b> Syarat & Ketentuan Pengaduan sobatblu</b>
              </h4>
              <img style={{ width: "100%" }} src="https://bcadigital.co.id/_nuxt/img/img-t&c-complains-sobatblu.2157eff.png" alt="" data-aos="fade-up" />
              <h4 data-aos="fade-up">
                <b> Service Level Agreement yang perlu Nasabah Ketahui</b>
              </h4>
              <img style={{ width: "100%" }} src="https://bcadigital.co.id/_nuxt/img/img-service-level-agreement.fc1e7b8.png" alt="" data-aos="fade-up" />
              <h4 data-aos="fade-up">
                <b> Langkah Pengaduan Nasabah di haloblu</b>
              </h4>
              <img style={{ width: "100%" }} src="https://bcadigital.co.id/_nuxt/img/img-step-customer-complains.67612f2.png" alt="" data-aos="fade-up" />
              <h4 data-aos="fade-up">
                <b> Penyelesaian Sengketa Melalui Lembaga Alternatif Penyelesaian Sengketa Sektor Jasa Keuangan</b>
              </h4>
              <p data-aos="fade-up">
                Jika pengaduan nasabah telah melalui upaya penyelesaian oleh Bank, namun ditolak oleh nasabah atau nasabah belum menerima tanggapan pengaduan sebagaimana diatur dalam Surat Edaran OJK (SE OJK) No.17/SEOJK.07/2018 mengenai
                laporan Pengaduan Konsumen dan tindak lanjut pelayanan dan penyelesaian pengaduan konsumen di sektor jasa keuangan, maka penyelesaian atas pengaduan nasabah tersebut dapat diselesaikan melalui Lembaga Alternatif Penyelesaian
                Sengketa Sektor Jasa Keuangan.
                <br></br>
                <br></br>
                Telepon: 087876348808 atau 081908441216 <br></br>
                Email: info@lapssjk.id
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;

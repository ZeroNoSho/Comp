import Card1 from "../Component/Profile/card1";
import Card5f from "../Component/Home/card5";
import svg from "../7.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
function Laporan() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    document.title = "ABC DIGITAL | Laporan";
  }, []);
  const nama = {
    nama1: ["Laporan Tahunan", "Laporan Keberlanjutan", "Laporan Keuangan Bulanan", "Laporan Keuangan Triwulan", "Laporan Lain"],
    id: ["one", "two", "three", "four", "five"],
  };
  const link = [
    "https://bcadigital.co.id/documents/GCG2021.pdf",
    "https://bcadigital.co.id/documents/GCG2020.pdf",
    "https://bcadigital.co.id/documents/GCG2019.pdf",
    "https://bcadigital.co.id/documents/GCG2018.pdf",
    "https://bcadigital.co.id/documents/GCG2017(revisi_peringkat).pdf",
    "https://bcadigital.co.id/documents/GCG2017.pdf",
  ];
  const text = "Berikut kumpulan dan ringkasan berbagai laporan BCA Digital.";
  const text1 = "Laporan";
  const text2 = "Perusahaan";
  return (
    <div>
      <Card1 svg={svg} text={text} text1={text1} text2={text2}></Card1>
      <div className="container" style={{ marginBottom: "200px", marginTop: "100px" }}>
        <div className="row brid">
          <p className="card-textHome text-center" data-aos="fade-down">
            Setiap milestone yang kami raih merupakan kebanggaan bersama. Untuk itu, dengan senang hati kami sampaikan setiap pencapaian melalui rangkaian laporan berkala yang telah kami siapkan teruntuk seluruh pemangku kepentingan BCA
            Digital.
          </p>
          <br />
          <br />
          <div className="accordion accordion-flush" id="accordionFlushExample" style={{ width: "65rem", margin: "auto" }} data-aos="fade-down">
            {nama.nama1.map((e, i) => (
              <div className="accordion-item" key={i}>
                <h2 className="accordion-header" id={`flush-heading ${nama.id[i]}`}>
                  <button className="accordion-button collapsed card-textHome" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${nama.id[i]}`} aria-expanded="false" aria-controls={`flush-collapse${nama.id[i]}`}>
                    {e}
                  </button>
                </h2>
                <div id={`flush-collapse${nama.id[i]}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${nama.id[i]}`} data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <p style={{ fontSize: "14px", fontWeight: "400" }}>{e}</p>
                    <Swiper spaceBetween={10} slidesPerView={0}>
                      {link.map((e, i) => (
                        <SwiperSlide key={i}>
                          <div style={{ margin: "20px" }} className="d-flex">
                            <div className="download-paper" style={{ backgroundColor: "#c61f25" }}>
                              <div className="content">
                                <span>2021</span> <div className="shape"></div>
                                <p className="note">Laporan GCG 2021</p>
                                <a href={e} className="link">
                                  Get pdf
                                </a>
                              </div>
                              <a href={e}>
                                <div className="download-icon">
                                  <img
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOSAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik00LjU2MjQxIDcuMzkwNzNDNC44ODMyNiA3LjA2OTg4IDUuNDAzNTEgNy4wNjk4OCA1LjcyNDQ3IDcuMzkwNzNMOC42NzgzNCAxMC4zNDQ2TDguNjc4MjMgMS41Nzg3OUM4LjY3ODIzIDEuMTI0OTkgOS4wNDYxNCAwLjc1NzA4IDkuNDk5OTQgMC43NTcwOEM5Ljk1MzggMC43NTcwOCAxMC4zMjE2IDEuMTI0OTkgMTAuMzIxNiAxLjU3ODc5TDEwLjMyMTggMTAuMzQ0NEwxMy4yNzU0IDcuMzkwNjJDMTMuNTk2MyA3LjA2OTc3IDE0LjExNjYgNy4wNjk3NyAxNC40Mzc1IDcuMzkwNjJDMTQuNzU4NCA3LjcxMTQ3IDE0Ljc1ODQgOC4yMzE3NyAxNC40Mzc1IDguNTUyNjhMMTAuMDgxIDEyLjkwOTNDOS45MjY5IDEzLjA2MzQgOS43MTc5MSAxMy4xNSA5LjQ5OTk5IDEzLjE1QzkuMjgyMTMgMTMuMTUgOS4wNzMwOSAxMy4wNjM0IDguOTE5MDUgMTIuOTA5M0w0LjU2MjUyIDguNTUyNzhDNC4yNDE1IDguMjMxOTQgNC4yNDE1IDcuNzExNjMgNC41NjI0MSA3LjM5MDczWk0xNy40MjE0IDE4LjI0MzFIMS41Nzg3OUMxLjEyNTA0IDE4LjI0MzEgMC43NTcwOCAxNy44NzUyIDAuNzU3MDggMTcuNDIxNEMwLjc1NzA4IDE2Ljk2NzYgMS4xMjUwNCAxNi41OTk3IDEuNTc4NzkgMTYuNTk5N0gxNy40MjE0QzE3Ljg3NTEgMTYuNTk5NyAxOC4yNDMxIDE2Ljk2NzYgMTguMjQzMSAxNy40MjE0QzE4LjI0MzEgMTcuODc1MiAxNy44NzUyIDE4LjI0MzEgMTcuNDIxNCAxOC4yNDMxWiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K"
                                    alt=""
                                  />
                                </div>
                              </a>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Card5f />
    </div>
  );
}

export default Laporan;

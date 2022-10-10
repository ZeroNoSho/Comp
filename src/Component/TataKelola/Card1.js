import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
function Card1T() {
  const link = [
    "https://bcadigital.co.id/documents/GCG2021.pdf",
    "https://bcadigital.co.id/documents/GCG2020.pdf",
    "https://bcadigital.co.id/documents/GCG2019.pdf",
    "https://bcadigital.co.id/documents/GCG2018.pdf",
    "https://bcadigital.co.id/documents/GCG2017(revisi_peringkat).pdf",
    "https://bcadigital.co.id/documents/GCG2017.pdf",
  ];
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row" style={{ marginBottom: "60px" }} data-aos="fade-down">
        <p className="card-text card-textHome text-center">BCA Digital beroperasi dengan transparan dan mengikuti peraturan yang berlaku</p>
      </div>
      <div style={{width: "auto"}} className="accordion accordion-flush flaw" id="accordionFlushExample" data-aos="fade-down">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed card-textHome" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Laporan Tata Kelola perusahaan
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <p style={{ fontSize: "14px", fontWeight: "400" }}>Good Corporate Governance ( GCG )</p>
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
      </div>
    </div>
  );
}

export default Card1T;

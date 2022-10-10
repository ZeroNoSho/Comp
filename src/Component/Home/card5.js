import { Link } from "react-router-dom";
import svg3 from "../../5.png";
function Card5f() {
  return (
    <div style={{ backgroundColor: " #00a6b5", paddingTop: "50px" }}>
      <div className="container">
        <footer>
          <nav className="navbar navbar-expand-lg cardrow2">
            <Link to="/" className="navbar-brand nuxt-link-exact-active nuxt-link-active" aria-current="page">
              <img src={svg3} alt="" />
            </Link>
            <div className="justify-content-md-end navbar-collapse ">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item nav-item-new">
                  <Link className="nav-item nav-link lifot lifot1" to="/Profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item nav-item-new">
                  <Link className="nav-item nav-link lifot lifot1" to="/TataKelola">
                    Tata Kelola
                  </Link>
                </li>
                <li className="nav-item nav-item-new">
                  <Link className="nav-item nav-link lifot lifot1" to="/Laporan">
                    Laporan
                  </Link>
                </li>
                <li className="nav-item nav-item-new">
                  <Link className="nav-item nav-link lifot lifot1" to="/Kontak">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg cardrow2">
            <div className="footer-content d-flex">
              <div className="partner">
                <Link to="/" className="ojk">
                  <img src="https://bcadigital.co.id/_nuxt/img/logo-ojk.400f752.svg" alt="" />
                </Link>
                <Link to="/" className="lps">
                  <img src="https://bcadigital.co.id/_nuxt/img/logo-lps.9594c6b.svg" alt="" />
                </Link>
              </div>
              <p className="quote">
                BCA Digital terdaftar dan diawasi oleh Otoritas Jasa Keuangan. <br className="hero" />
                BCA Digital merupakan peserta penjaminan LPS.
              </p>
            </div>
            <div className="dis1 justify-content-md-end navbar-collapse ">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item nav-item-new">
                  <Link className="nav-item nav-link lifot" to="/Profile">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li className="nav-item nav-item-new">
                  <Link className="nav-item nav-link lifot" to="/TataKelola">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li className="nav-item nav-item-new">
                  <Link className="nav-item nav-link lifot" to="/Laporan">
                    <i className="fa-brands fa-tiktok"></i>
                  </Link>
                </li>
                <li className="nav-item nav-item-new">
                  <Link className="nav-item nav-link lifot" to="/Kontak">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </li>
                <li className="nav-item nav-item-new">
                  <Link className="nav-item nav-link lifot" to="/Kontak">
                    <i className="fa-brands fa-linkedin"></i>
                  </Link>
                </li>
                <li className="nav-item nav-item-new">
                  <Link className="nav-item nav-link lifot" to="/Kontak">
                    <i className="fa-brands fa-facebook"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="row">
            <p className="dis">
              <Link className="lifot lifot2" to="/Profile">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link className="lifot lifot2" to="/TataKelola">
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link className="lifot lifot2" to="/Laporan">
                <i className="fa-brands fa-tiktok"></i>
              </Link>
              <Link className="lifot lifot2" to="/Kontak">
                <i className="fa-brands fa-youtube"></i>
              </Link>
              <Link className="lifot lifot2" to="/Kontak">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link className="lifot lifot2" to="/Kontak">
                <i className="fa-brands fa-facebook"></i>
              </Link>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Card5f;

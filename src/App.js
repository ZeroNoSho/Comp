import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import svg from "./5.png";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import TataKelola from "./Pages/TataKelola";
import Laporan from "./Pages/Laporan";
import Karir from "./Pages/Karir";
import Kontak from "./Pages/kontak";
import Media from "./Pages/Media";

class App extends Component {
  render() {
    return (
      <Router basename="/">
        <div>
          <nav id="navbar" className="navbar nav1 navbar-light navbar-expand-lg">
            <div className="container-fluid navcon">
              <Link className="navbar-brand" to="/">
                <img src={svg} alt="" />
              </Link>

              <a class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                <span className="">
                  <i className="fa-solid fa-bars"></i>
                </span>
              </a>

              <div className="justify-content-md-end collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-item nav-link" to="/Profile">
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-item nav-link desaible" to="/TataKelola">
                      Tata Kelola
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-item nav-link" to="/Laporan">
                      Laporan
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-item nav-link" to="/Karir">
                      Karir
                    </Link>
                  </li>
                  <li className="nav-item nav-link dropdown">
                    <Link style={{ display: "contents" }} className="nav-item nav-link" to="/Media">
                      Media Lounge
                    </Link>
                    <Link style={{ display: "contents" }} className="nav-item nav-link dropdown-toggle" data-bs-toggle="dropdown"></Link>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li>
                        <a className="dropdown-item" href="/Media#rilis">
                          Rilis Media
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/Media#gely">
                          Galeri
                        </a>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Media">
                          Berita Pilihan
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-item nav-link" to="/Kontak">
                      Kontak
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
              <button type="button" class="btn-close1 btnser text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <button type="button" class="btn-close1 btnser text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
                <i class="fa-solid fa-x"></i>
              </button>
            </div>
            <div class="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-item nav-link ukuran" data-bs-dismiss="offcanvas" aria-label="Close" to="/Profile">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item nav-link ukuran" data-bs-dismiss="offcanvas" aria-label="Close" to="/TataKelola">
                    Tata Kelola
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item nav-link ukuran" data-bs-dismiss="offcanvas" aria-label="Close" to="/Laporan">
                    Laporan
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-item nav-link ukuran" data-bs-dismiss="offcanvas" aria-label="Close" to="/Karir">
                    Karir
                  </Link>
                </li>
                <li className="nav-item nav-link dropdown" style={{ marginLeft: "20px" }}>
                  <Link style={{ display: "contents" }} className="ukuran nav-item nav-link" data-bs-dismiss="offcanvas" aria-label="Close" to="/Media">
                    Media Lounge
                  </Link>
                  <Link style={{ display: "contents" }} className="ukuran nav-item nav-link dropdown-toggle" data-bs-toggle="dropdown"></Link>
                  <ul className="dropdown-menu sho12" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas" aria-label="Close" href="/Media#rilis">
                        Rilis Media
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas" aria-label="Close" href="/Media#gely">
                        Galeri
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" data-bs-dismiss="offcanvas" aria-label="Close" href="/Media#">
                        Berita Pilihan
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ">
                  <Link className="nav-item nav-link ukuran" data-bs-dismiss="offcanvas" aria-label="Close" to="/Kontak">
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/TataKelola" element={<TataKelola />} />
            <Route path="/Laporan" element={<Laporan />} />
            <Route path="/Karir" element={<Karir />} />
            <Route path="/Media" element={<Media />} />
            <Route path="/Kontak" element={<Kontak />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

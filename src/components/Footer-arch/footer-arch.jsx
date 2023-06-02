/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from "../../data/app.json";

const FooterArch = () => {
  return (
    <footer className="sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Numeros utiles</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="sm-post">
                    <h5>Atención al vecino</h5>
                    <h5>(3547) 628325</h5>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="sm-post">
                    <h5>Policia</h5>
                    <h5>(3547) 428177</h5>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="sm-post">
                    <h5>Defensa Civil</h5>
                    <h5>(3547) 507415</h5>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="sm-post">
                    <h5>Comuna</h5>
                    <h5>(3547) 428177</h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            {/* <div className="item md-mb50">
              <div className="title">
                <h5>Contacto</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>504 White St . Dawsonville, GA 30534 , New York</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>support@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+87986451666</p>
                  </div>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a
                  href="https://www.facebook.com/comunavilladelprado"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/villadelpradotw"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@comunavilladelprado?_t=8ZDhTxglmFS&_r=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
                <a
                  href="https://www.instagram.com/comunavilladelprado/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2022, Vie Template. Made with passion by
                  <a href="#0" className="main-color">
                    ThemesCamp
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArch;

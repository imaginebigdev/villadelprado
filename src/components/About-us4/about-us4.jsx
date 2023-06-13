/* eslint-disable @next/next/no-img-element */
import Link from "next/dist/client/link";
import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const AboutUs4 = () => {
  return (
    <section className="about-cr">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 img md-mb50">
            <img src="/img/intro/4.jpg" alt="" />
          </div>
          <div className="col-lg-4 valign">
            <div className="cont full-width">
              <h1 className="color-font">Feria de la familia</h1>
              <h6>
                Todos los jueves 20:00hs <br /> Plaza central Villa Del Prado
              </h6>

              <div className="vid-area">
                <div className="vid-icon">
                  <Link href="/cultura">
                    <a className="butn bord curve mt-30">Saber más</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs4;

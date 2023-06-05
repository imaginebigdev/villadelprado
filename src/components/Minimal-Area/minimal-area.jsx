/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                style={{
                  borderRadius: "100%",
                  boxShadow: "0 4px 12px rgba(0,0,0,.5)",
                }}
                src="/img/min-area.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">Nelson Luján</h4>
              <p className="wow txt" data-splitting>
                Presidente de la Comuna Villa del Prado, Departamento Santa
                María, Córdoba, Argentina.
              </p>
              <div className="social-icon">
                <a
                  className="portfolioSocialIcons"
                  href={`https://api.whatsapp.com/send?phone=5493547628325`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>

                <a
                  className="portfolioSocialIcons"
                  href="https://www.instagram.com/nelsonlujanok/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;

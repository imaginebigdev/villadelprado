/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import Data from "../../data/sections/works-style2-autoridades.json";

const WorksStyle2 = ({ grid, hideFilter, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section
      className={`${
        grid ? (grid === 3 ? "three-column" : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6>Portfolio</h6>
                <h3 className="wow color-font">
                  Our Recent Web Design &amp; <br /> Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={"container"}>
        <div className="row">
          <div className="gallery full-width">
            {Data?.map((n) => (
              <div
                className={`${
                  grid === 3
                    ? "col-lg-4 col-md-6"
                    : grid === 2
                    ? "col-md-6"
                    : "col-12"
                } items graphic`}
              >
                <div className="img">
                  <img
                    src={n.img}
                    alt="image"
                    style={{
                      borderRadius: "100%",
                      boxShadow: "0 4px 12px rgba(0,0,0,.5)",
                    }}
                  />
                </div>
                <div className="cont">
                  <h6>{n.tittle}</h6>
                  <span>
                    <a>{n.subtittle}</a>,
                  </span>
                  <div className="social-icon">
                    <a
                      className="portfolioSocialIcons"
                      href="https://www.facebook.com/comunavilladelprado"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a
                      className="portfolioSocialIcons"
                      href="https://twitter.com/villadelpradotw"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle2;

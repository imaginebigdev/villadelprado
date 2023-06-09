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
                <h3 className="wow color-font">Áreas de Gobierno</h3>
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
                key={n.id}
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
                    {n.whatsapp.length > 0 && (
                      <a
                        className="portfolioSocialIcons"
                        href={`https://api.whatsapp.com/send?phone=${n.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    )}
                    {n.instagram.length > 0 && (
                      <a
                        className="portfolioSocialIcons"
                        href={n.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
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

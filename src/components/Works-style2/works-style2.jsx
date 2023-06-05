/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import Data from "../../data/sections/works-style2.json";

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
                <h3 className="wow color-font">Actividades</h3>
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
                <div className="item-img">
                  <Link href={n.link}>
                    <a className="imago wow">
                      <img src={n.img} alt="image" />
                      <div className="item-img-overlay"></div>
                    </a>
                  </Link>
                </div>
                <div className="cont">
                  <h6>{n.tittle}</h6>
                  <span>
                    <a>{n.subtittle}</a>,
                  </span>
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

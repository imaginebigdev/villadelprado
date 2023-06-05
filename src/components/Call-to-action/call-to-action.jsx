import React from "react";
import Split from "../Split";
import Link from "next/link";

const CallToAction = ({ img }) => {
  return (
    <section className="call-action section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-9">
            <div className="content sm-mb30">
              <Split>
                <h6 className="wow words chars splitting" data-splitting>
                  No dudes en escribirnos
                </h6>
                <h2 className="wow words chars splitting" data-splitting>
                  Estamos para <br /> <b className="back-color">vos</b>.
                </h2>
              </Split>
            </div>
          </div>

          <div className="col-md-4 col-lg-3 valign">
            <Link href={``}>
              <a className="butn bord curve wow fadeInUp" data-wow-delay=".5s">
                <span>Contacto</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

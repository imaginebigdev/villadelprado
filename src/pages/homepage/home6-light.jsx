import React from "react";
import Navbar from "../../components/Navbar/navbar";
import IntroWithSlider from "../../components/Intro-with-slider/intro-with-slider";
import LightTheme from "../../layouts/Light";
import AboutUs4 from "../../components/About-us4/about-us4";
import Services from "../../components/Services/services";
import AboutUs2 from "../../components/About-us2/about-us2";
import WorksStyle2 from "../../components/Works-style2/works-style2";
import Works from "../../components/Works/works";
import Footer2 from "../../components/Footer2/footer2";
import FooterArch from "../../components/Footer-arch/footer-arch";

const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <LightTheme mobileappstyle>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <Services style="4item" />
        <AboutUs4 />
        <AboutUs2 />
        <WorksStyle2 grid={2} />
        <Works />
        <Footer2 />
      </div>
    </LightTheme>
  );
};

export default Homepage1;

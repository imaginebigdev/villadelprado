import React from "react";
import LightTheme from "../../layouts/Light";
import Navbar from "../../components/Navbar/navbar";
import BlogDetails from "../../components/Blog-details/blog-details-defensacivil";
import Intro5 from "../../components/Intro5/intro5";
import Footer2 from "../../components/Footer2/footer2";
import Services4 from "../../components/Services4/services4";

const BlogDetailsLight = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
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
  }, [navbarRef]);
  return (
    <LightTheme mobileappstyle>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <Intro5
        image="/img/arch/slid/4.jpg"
        title="DEFENSA CIVIL"
        subtitle="Toda la información que necesitas saber sobre seguridad la encontras aquí"
      />
      <Services4 />
      <BlogDetails theme="light" blog={"blog"} />
      <Footer2 />
    </LightTheme>
  );
};

export default BlogDetailsLight;

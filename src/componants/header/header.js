import { useState } from "react";
import NavBar from "./navBar/navbar";
import HeaderTop from "./top/headerTop";
import News from "./news/news";
import { useEffect } from "react";

function Header() {
  const [hide, setHide] = useState(0);
   useEffect(() => {
     const handelHeader = () => {
      if (window.innerWidth >= 768) {
        if (window.scrollY >= 100) {
           setHide(-40);
         } else {
           setHide(0);
         }
       }
     };

     window.addEventListener("scroll", handelHeader);

     return () => {
       window.removeEventListener("scroll", handelHeader);
     };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        top: "0",
        left: "0",
        transform: `translateY(${hide}px)`,
        transition: ".2s",
        zIndex: "80",
      }}
    >
      <HeaderTop />
      <NavBar />
      <News />
    </div>
  );
}

export default Header;

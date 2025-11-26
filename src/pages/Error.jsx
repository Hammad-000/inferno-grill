import React from "react";
import Footer from "../components/FooterContent";
import Home from "./Home";
import FooterContent from "../components/FooterContent";

function Error() {
  return (
    <div>
      <h1  >Error 404 Page not Found</h1>

      <button onClick={Home} >

      </button>
     
     <FooterContent />
    </div>
  );
}

export default Error;
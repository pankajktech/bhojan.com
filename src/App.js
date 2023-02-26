import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Body from "./Components/Body.js";

function SwiggyPage() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SwiggyPage />);

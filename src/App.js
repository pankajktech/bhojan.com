//Components: Any component name we should write with capital Letter
//Component is a function which returns JSX code.
//Functional Component : It is a normal Function and it is just returning piece of JSX code. and it can return react element also.
//when we use a component inside a component it is called component composition.
//Any peice of jsx component should have only one parent

//Virtual DOM: It is a copy of the real DOM. It is a javascript object.

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Body from "./Components/Body.js";

const SwiggyPage = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SwiggyPage />);

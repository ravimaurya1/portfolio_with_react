import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";

import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";

//Import Components
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWorks from "./pages/OurWorks";
import MovieDetails from "./pages/MovieDetail";
import ScrollTop from "./components/ScrollTop";

//Animate
import { AnimatePresence } from "framer-motion";

function App() {
  let location = useLocation();
  console.log(location);
  return (
    <div className="app">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={AboutUs} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/work" exact component={OurWorks} />
          <Route path="/work/:id" exact component={MovieDetails} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;

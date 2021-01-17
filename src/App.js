import React from "react";
// Global Style
import GlobalStyle from "./components/GlobalStyle";

import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={AboutUs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

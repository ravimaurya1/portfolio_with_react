import React from "react";
import AboutUs from "./pages/AboutUs";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AboutUs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

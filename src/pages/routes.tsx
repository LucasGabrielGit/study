import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Landing} />
  </BrowserRouter>
);

export default Routes;

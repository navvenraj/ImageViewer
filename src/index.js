import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Controller from './screens/Controller';

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Controller />
  </BrowserRouter>,
  document.getElementById("root")
);
"use strict";
import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";

import "./assets/style/input.scss";
import AppProvider from "./context/AppContext";

ReactDom.render(
  <AppProvider>
    <App />
  </AppProvider>,

  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { DataProvider } from "./context";

import history from "./history";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <Router basename={`${process.env.PUBLIC_URL}`} history={history}>
        <App />
      </Router>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("dvpnroot")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

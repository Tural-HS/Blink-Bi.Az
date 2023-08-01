import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./i18n";
import reportWebVitals from "./reportWebVitals";

import { DataProvider } from "./context";

import history from "./history";

import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations";

i18n.use(initReactI18next).init({
  resources: translations,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if the user's preferred language is not available
  interpolation: {
    escapeValue: false, // Not needed for React as it escapes by default
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <DataProvider>
        <Router history={history}>
          <App />
        </Router>
      </DataProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("dvpnroot")
);

reportWebVitals();

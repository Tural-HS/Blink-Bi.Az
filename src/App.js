import React, { useContext } from "react";
import { DataContext } from "./context";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "react-modal-video/css/modal-video.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Home2 from "./pages/Home-v2";
import Home3 from "./pages/Home-v3";
import About from "./pages/About";
import ComingSoon from "./pages/ComingSoon";
import Services from "./pages/Services";
import SingleService from "./pages/SingleService";
import HrBusinessProcessesCoverage from "./pages/ProcessesCoverage";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Search from "./components/Search";
import Offcanvas from "./components/Offcanvas";
import BackToTop from "./components/BackToTop";
import ClearData from "./pages/ClearData";
import AllInOne from "./pages/AllOne";
import Laws from "./pages/LawsRegulations";
import Support from "./pages/Support";
import SignIn from "./pages/SignIn";
import CerLicens from "./pages/CerLicens";

import { useTranslation } from "react-i18next";

function App() {
  const context = useContext(DataContext);
  const { search, offcanvas, handleSearch, handleOffcanvas } = context;
  const offcanvasData = context.allData.offcanvas;

  return (
    <>
      {search ? <Search search={handleSearch} /> : ""}
      {offcanvas ? (
        <Offcanvas data={offcanvasData} offcanvas={handleOffcanvas} />
      ) : (
        ""
      )}

      <BackToTop />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/home-v2" component={Home2} />
        <Route path="/home-v3" component={Home3} />
        <Route path="/about" component={About} />
        <Route path="/licenses" component={CerLicens} />
        <Route path="/coming-soon" component={ComingSoon} />
        <Route path="/service" component={Services} />
        <Route path="/single-service" component={SingleService} />
        <Route
          path="/processes-coverage"
          component={HrBusinessProcessesCoverage}
        />
        <Route path="/clear-data" component={ClearData} />
        <Route path="/all-in-one" component={AllInOne} />
        <Route path="/laws-regulations" component={Laws} />
        <Route path="/support" component={Support} />
        <Route path="/signIn" component={SignIn} />

        <Route path="/blog" component={Blog} />
        <Route path="/single-blog" component={SingleBlog} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRouter from "./customRouter/PrivateRouter";
import PageRender from "./customRouter/PageRender";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Landing from "./components/Landing";
import Overview from "./pages/Overview";
import Login from "./pages/Login";

function App() {
  const [show, setShow] = useState(false);
  const auth = true;
  return (
    <Router>
      <div className={auth === true ? `visible` : `hidden`}>
        <Navbar />
      </div>
      <div className="font-lato">
        <Routes>
          <Route
            exact
            path="/"
            element={
              auth === true ? (
                <Landing show={show} setShow={setShow} />
              ) : (
                // <Overview />
                <Landing show={show} setShow={setShow} />
              )
            }
          />
          <Route
            exact
            path="/login"
            element={auth === false ? <Login /> : <Overview />}
          />

          <Route exact path="/" element={<PrivateRouter />}>
            <Route exact path="/:page" element={<PageRender />} />
            <Route exact path="/:page/:id" element={<PageRender />} />
            <Route exact path="/:page/:id/:extraId" element={<PageRender />} />
          </Route>
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

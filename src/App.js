import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Alert from "./components/alert/Alert";
import Landing from "./components/Landing";
import PageRender from "./customRouter/PageRender";
import Login from "./pages/Login";
import Overview from "./pages/Overview";

function App() {
  const [show, setShow] = useState(false);
  const auth = true;

  return (
    <Router>
      <Alert />
      <AppContent show={show} setShow={setShow} auth={auth} />
    </Router>
  );
}

function AppContent({ show, setShow, auth }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isLoginPage = location.pathname === "/Login";

  return (
    <div>
      {!isHomePage && !isLoginPage && <Navbar />}
      <div className="font-lato">
        <Routes>
          <Route
            exact
            path="/"
            element={<Landing show={show} setShow={setShow} />}
          />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Dashboard" element={<Overview />} />
          <Route path="/:page" element={<PageRender />} />
          <Route exact path="/:page/:id" element={<PageRender />} />
          <Route exact path="/:page/:id/:extraId" element={<PageRender />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

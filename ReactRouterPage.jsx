import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";

const ReactRouterPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">
          <h1>Home</h1>
        </Link>

        <Link to="/about">
          <h1>About</h1>
        </Link>

        <Link to="/contact">
          <h1>Contact</h1>
        </Link>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={
              <h1>
                <About />
              </h1>
            }
          />

          <Route
            path="/contact"
            element={
              <h1>
                <Contact />
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ReactRouterPage;

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import NavBar from "./NavBar/NavBar";
import { useNavigate } from "react-router";

const Navigate = useNavigate();

//install React Router we use 'npm i react-router'

const ReactRouter = () => {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/*" element={<h1>Page Not Found</h1>} />
          {/* <Route path="/*" element={Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ReactRouter;

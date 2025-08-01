import React from "react";
import NavBar from "../NavBar/NavBar";

const NastedRoutes = () => {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />

      <Route path="/" element={<College/>}>
      <Route index element={<Student />} />
      <Route path="/department" element={<Department />} />
      <Route path="/details" element={<College details />} />
      </Route>
      <Route path='/*' element={<Not Page Found />} />
      </Routes>
    </div>
  );
};

export default NastedRoutes;

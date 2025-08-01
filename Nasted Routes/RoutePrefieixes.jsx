import React from "react";

const RoutePrefieixes = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/user/about">About</NavLink>
      <NavLink to="/user/contact">contact</NavLink>

      {/* <Routes>
        <Route element={<NavBar />}>
      <Route path="/" element={<Home/>} />

      <Route path="user">
      <Route path="/user/about" element={<About/>} />
      <Route path="/user/contact" element={<Contact/>} />
      </Route>
      </Route>

      <Route path="/" element={<College/>}>
      <Route index element={<Student />} />
      <Route path="/department" element={<Department />} />
      <Route path="/details" element={<College details />} />
      </Route>
      <Route path='/*' element={<Not Page Found />} />
      </Routes> */}

      <Route path="in">
        <Route path="/in/user">
          <Route path="/in/user/about" element={<about />} />
          <Route path="/in/user/contact" element={<Contact />} />
        </Route>
      </Route>

      <NavLink to="/in/user/about">About</NavLink>
      <NavLink to="/in/user/contact">Contact</NavLink>
    </div>
  );
};

export default RoutePrefieixes;

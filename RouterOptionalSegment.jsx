import React from "react";

// Optional Segment: it's route paramter where this paramter will be present or not be
// present.

function RouterOptionalSegment() {
  return (
    <div>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/user/about?" element={<About />} /> //it will open with
          user as well as user/about
          <Route path="/user/:id/contact?" element={<Contact />} />
        </Route>

        <Route path="/" element={<College />}>
          <Route index element={<Student />} />
          <Route path="/department" element={<Department />} />
          <Route path="/details" element={<College details />} />
        </Route>
        <Route path="/*" element={<Not Page Found />} />
      </Routes>
    </div>
  );
}

export default RouterOptionalSegment;

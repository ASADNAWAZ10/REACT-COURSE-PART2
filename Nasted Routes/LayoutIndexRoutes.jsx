import React from 'react'

const LayoutIndexRoutes = () => {
  return (
    <div>
          
      <Routes>
        <Route element={<NavBar />}>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      </Route>

      <Route path="/" element={<College/>}>
      <Route index element={<Student />} />
      <Route path="/department" element={<Department />} />
      <Route path="/details" element={<College details />} />
      </Route>
      <Route path='/*' element={<Not Page Found />} />
      </Routes>
    </div>
  )
}

export default LayoutIndexRoutes
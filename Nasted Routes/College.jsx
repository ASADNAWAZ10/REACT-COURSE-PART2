import React from 'react'
import {Link, NavLink, Outlet} from 'react-router';

const College = () => {
  return (
    <div style={{textAlign:'center'}}>
      <h1>College page</h1>
      <NavLink className="Link" to="student">student</NavLink>
      <NavLink className="Link" to="department">Department</NavLink>
      <NavLink className="Link" to="details">College details</NavLink>
      <Outlet />
    </div>
  )
}

export default College
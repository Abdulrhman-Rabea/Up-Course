import React from 'react'
import Nav from './Navbar/Nav'

import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
   <>
      <Nav/>
     <Outlet></Outlet>
   {/* others component */}
      {/* <Footer/> */}
   </>
  )
}

<<<<<<< HEAD
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
=======
import React from "react";
import Nav from "./Navbar/Nav";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

export default function Layout() {
	return (
		<>
			<Nav />
			<Outlet></Outlet>
			{/* others component */}
			{/* <Footer/> */}
			<Footer/>
		</>
	);
>>>>>>> caf1ea7 (footer)
}

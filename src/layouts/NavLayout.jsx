import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const NavLayout = () => {

  const [headerTitle, setHeaderTitle] = useState("Dashboard")
  const [isNavbarOpen, setIsNavbarOpen] = useState( false )
  const setTitle = (headerTitle) =>{setHeaderTitle({headerTitle})}
  const handleOpenNavbar = () => {setIsNavbarOpen(true)}
  const handleCloseNavbar= () => {setIsNavbarOpen(false)}

  return (
    <div className="layout-profile-container">
      <Navbar
        parentCallback={setTitle}
        handleCloseNavbar={handleCloseNavbar}
        isNavbarOpen={isNavbarOpen}
      />
      <Outlet />
    </div>
  )

}

export default NavLayout;
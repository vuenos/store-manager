import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import {
  Aside,
  Gnb,
  Footer
} from "./components";
import { useLocation } from "react-router-dom";

const Layout = () => {
  // const [activePath, setActivePath] = useState('');
  // let isLocation = useLocation();
  //
  // const getActivePath = () => {
  //   if(isLocation.pathname == '/order/all') {
  //     setActivePath('order-1');
  //   } else {
  //     setActivePath('dashboard')
  //   }
  // }
  //
  // useEffect(() => {
  //   getActivePath();
  //   console.log('ACTIVE_KEY', activePath)
  // }, [activePath]);


  return (
    <div id="wrapper">
      <Aside />
      <main id="kt_app_wrapper" className="app-wrapper flex-column flex-row-fluid">
        <Gnb />
        <div id="kt_app_content" className="app-content flex-column-fluid">
          <div id="kt_app_content_container" className="app-container container-fluid">
            <Outlet />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}
export default Layout;
import React from 'react';
import { Outlet } from "react-router-dom";
import {
  Aside,
  Gnb,
  Footer
} from "./components";

const Layout = () => {
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
import React, { useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import PropTypes from 'prop-types';
import { menuItems } from "./menuItems";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AppstoreOutlined, MailOutlined, SettingOutlined, PieChartOutlined } from "@ant-design/icons";
import { Menu } from "antd";


// submenu keys of first level
const rootSubmenuKeys = ['dashboard', 'product:0', 'order:0', 'account:0'];

const Aside = () => {
  const {t} = useTranslation();
  let isLocation = useLocation();

  const [openKeys, setOpenKeys] = useState(['']);
  const onOpenChange = (keys) => {
    const latestOpenKeys = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKeys) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKeys ? [latestOpenKeys] : [])
    }
  }

  const getActiveKey = () => {
    switch (isLocation.pathname) {
      case '/dashboard':
        setOpenKeys(['dashboard']);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    getActiveKey();
  }, [isLocation]);

  return (
    <div id="kt_app_sidebar" className="app-sidebar flex-column bg-white border-end">
      <div
        className="app-sidebar-logo d-none d-lg-flex flex-stack flex-shrink-0 mt-4 px-8 h-50px"
        id="kt_app_sidebar_logo">
        <Link to="/dashboard">
          <img alt="Logo" src="/assets/media/logos/bi-connect.svg" className="h-30px"/>
        </Link>
      </div>
      <div className="text-center fs-12">{t('common.projectName')}</div>

      <div
        id="kt_app_sidebar_menu_wrapper"
        className="app-sidebar-menu app-sidebar-menu-arrow hover-scroll-overlay-y my-5 my-lg-5 mt-lg-10"
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['dashboard']}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 209,
          }}
          items={menuItems}
        />
      </div>
    </div>
  )
}

export default Aside;
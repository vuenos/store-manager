import React, { useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";
import PropTypes from 'prop-types';
import { menuItems } from "./menuItems";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Menu } from "antd";


// submenu keys of first level
const rootSubmenuKeys = ['dashboard', 'product:0', 'order:0', 'account:0'];

const Aside = () => {
  const {t} = useTranslation();
  let isLocation = useLocation();

  const [openKeys, setOpenKeys] = useState(['']);
  const [defaultKeys, setDefaultKeys] = useState(['']);
  const onOpenChange = (keys) => {
    const latestOpenKeys = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKeys) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKeys ? [latestOpenKeys] : [])
    }
  }

  /**
   * 현재 location.path 와 menuItems 에 정의된 getItem key 파라미터와 대조하여 현재메뉴 활성화 및 서브메뉴 open
   */
  const getOpenKeys = () => {
    switch (isLocation.pathname) {
      case '/dashboard':
        setOpenKeys(['dashboard']);
        setDefaultKeys(['dashboard']);
        break;
      // 상품
      case '/product/register':
        setDefaultKeys(['product:1']);
        break;
      case '/product/import':
        setDefaultKeys(['product:2']);
        break;
      case '/product/management':
        setDefaultKeys(['product:3']);
        break;
      case '/product/template/register':
        setDefaultKeys(['product:4']);
        break;
      case '/product/template/manage':
        setDefaultKeys(['product:5']);
        break;
      // 주문
      case '/order/list':
        setDefaultKeys(['order:1']);
        break;
      case '/order/claim':
        setDefaultKeys(['order:2']);
        break;
      case '/order/all':
        setDefaultKeys(['order:3']);
        break;
      case '/cs/qnaList':
        setOpenKeys(['cs']);
        setDefaultKeys(['cs']);
        break;
      case '/schedule':
        setOpenKeys(['schedule']);
        setDefaultKeys(['schedule']);
        break;
      // 연동계정
      case '/mange/partner':
        setDefaultKeys(['account:1']);
        break;
      case '/mange/consignment':
        setDefaultKeys(['account:2']);
        break;
      default:
        break;
    }
  }

  /**
   * 현재 location.path 에 parent path 기 포함되어 있는 확인하여 서브메뉴 open
   * @returns {void|null}
   */
  function getKey() {
    return ((isLocation.pathname).includes('/product')) ? setOpenKeys(['product:0'])
      : ((isLocation.pathname).includes('/order')) ? setOpenKeys(['order:0'])
      : ((isLocation.pathname).includes('/mange')) ? setOpenKeys(['account:0'])
      : null;
  }

  useEffect(() => {
    getKey();
    getOpenKeys();
    console.log('%c OPENKEYS_PATH', 'color: yellow', isLocation.pathname);
  }, [isLocation.pathname]);


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
          selectedKeys={defaultKeys}
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
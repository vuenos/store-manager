import React, { useState, useEffect } from 'react';
import {useTranslation} from "react-i18next";
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import PropTypes from 'prop-types';
import {menuItems} from "./menuItems";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

/**
 * 서브메뉴 Item element
 * @param title : 메뉴제목
 * @param path : 경로
 * @returns {JSX.Element} : 반환되는 element
 * @constructor
 */
const SubMenuItems = ({ title, path , eventKey}) => {
  let isLocation = useLocation();
  return (
    <SidebarMenu.Nav>
      <SidebarMenu.Nav.Link as={Link} to={path} eventKey={eventKey}>
        <SidebarMenu.Nav.Icon>
          {/* Submenu item icon */}
        </SidebarMenu.Nav.Icon>
        <SidebarMenu.Nav.Title>
          {title}
        </SidebarMenu.Nav.Title>
      </SidebarMenu.Nav.Link>
    </SidebarMenu.Nav>
  )
}

/**
 * 사이드메뉴를 구성하는 기본 Item, submenu 가 존재하면 서브메뉴 컴포넌트 SubMenuItem 가 포함된 element block 을 return 한다.
 * @param title : 메뉴제목
 * @param path : 경로
 * @param eventKey : 이벤트키
 * @param subMenu : 서브메뉴
 * @param id : 서브메뉴아이디
 * @param isAdmin : 메인계정
 * @returns {JSX.Element} : 단일메뉴 element or 서브메뉴 element 가 포함된 element block 반환
 * @constructor
 */
const MenuItem = ({ title, path, eventKey, subMenu, id, isAdmin }) => {
  let isLocation = useLocation();
  if (subMenu) {
    return (
      <SidebarMenu.Sub id={`hasSubMenu-${id}`}>
        <SidebarMenu.Sub.Toggle>
          <SidebarMenu.Nav.Icon />
          <SidebarMenu.Nav.Title>
            {title}
          </SidebarMenu.Nav.Title>
        </SidebarMenu.Sub.Toggle>

        <SidebarMenu.Sub.Collapse id={`subMenu-${id}`} bsPrefix="bg-gray-200">
          {subMenu.map((item, index) => (
            <SubMenuItems {...item} key={index} />
          ))}
        </SidebarMenu.Sub.Collapse>
      </SidebarMenu.Sub>
    )
  }

  return (
    <SidebarMenu.Nav>
      <SidebarMenu.Nav.Link as={Link} to={path} eventKey={eventKey}>
        <SidebarMenu.Nav.Icon>
          {/* Menu item icon */}
        </SidebarMenu.Nav.Icon>
        <SidebarMenu.Nav.Title>
          {title}
        </SidebarMenu.Nav.Title>
      </SidebarMenu.Nav.Link>
    </SidebarMenu.Nav>
  )
}

/**
 *
 * @type {{path: Requireable<string>, subMenu: Requireable<any>, id: Requireable<any>, title: Requireable<string>}}
 */
MenuItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  eventKey: PropTypes.string,
  subMenu: PropTypes.any,
  id: PropTypes.any,
  isAdmin: PropTypes.string,
}

/**
 *
 * @type {{path: Requireable<string>, title: Requireable<string>}}
 */
SubMenuItems.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  eventKey: PropTypes.string,
}

const Aside = () => {
  const {t} =useTranslation();
  let isLocation = useLocation();

  const [key, setKey] = useState('');
  console.log(key);

  let isPath = isLocation.pathname;
  const getActiveKey = () => {
    switch (isPath) {
      case '/dashboard':
        setKey(isPath);
        break;
      case '/product/register':
        setKey(isPath);
        break;
      case '/order/list':
        setKey(isPath);
        break;
      case '/order/claim':
        setKey(isPath);
        break;
      case '/order/all':
        setKey(isPath);
        break;
      case '/cs/qnaList':
        setKey(isPath);
        break;
      case '/schedule':
        setKey(isPath);
        break;
      default:
        break;
    }
  }

  const handleSelect = (key) => {
    console.log(`selected ${key}`);
    setKey(key);
  };

  useEffect(() => {
    getActiveKey();
    console.log('ACTIVE_KEY', key)
  }, []);

  return (
    <div
      id="kt_app_sidebar" className="app-sidebar flex-column bg-white border-end"
      data-kt-drawer="true"
      data-kt-drawer-name="app-sidebar"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="250px"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
    >
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
        data-kt-scroll="true"
        data-kt-scroll-height="auto"
        data-kt-scroll-dependencies="#kt_app_sidebar_toolbar, #kt_app_sidebar_footer"
        data-kt-scroll-offset="0"
      >

        <SidebarMenu activeKey={key} onSelect={handleSelect}>
          <SidebarMenu.Body>
            {menuItems.map((item, index) => (
              <MenuItem {...item} key={index} eventKey={item.path} />
            ))}
          </SidebarMenu.Body>
        </SidebarMenu>


        {/*<SidebarMenu>*/}
        {/*  <SidebarMenu.Header>*/}
        {/*    <SidebarMenu.Brand>*/}
        {/*      /!* Your brand icon *!/*/}
        {/*    </SidebarMenu.Brand>*/}
        {/*  </SidebarMenu.Header>*/}

        {/*  <SidebarMenu.Body>*/}
        {/*    <SidebarMenu.Nav>*/}
        {/*      <SidebarMenu.Nav.Link href="/dashboard">*/}
        {/*        <SidebarMenu.Nav.Icon>*/}
        {/*          /!* Menu item icon *!/*/}
        {/*        </SidebarMenu.Nav.Icon>*/}
        {/*        <SidebarMenu.Nav.Title>*/}
        {/*          Dashboard*/}
        {/*        </SidebarMenu.Nav.Title>*/}
        {/*      </SidebarMenu.Nav.Link>*/}
        {/*    </SidebarMenu.Nav>*/}

        {/*    <SidebarMenu.Sub>*/}
        {/*      <SidebarMenu.Sub.Toggle>*/}
        {/*        <SidebarMenu.Nav.Icon />*/}
        {/*        <SidebarMenu.Nav.Title>*/}
        {/*          상품*/}
        {/*        </SidebarMenu.Nav.Title>*/}
        {/*      </SidebarMenu.Sub.Toggle>*/}

        {/*      <SidebarMenu.Sub.Collapse>*/}
        {/*        <SidebarMenu.Nav>*/}
        {/*          <SidebarMenu.Nav.Link>*/}
        {/*            <SidebarMenu.Nav.Icon>*/}
        {/*              /!* Submenu item icon *!/*/}
        {/*            </SidebarMenu.Nav.Icon>*/}
        {/*            <SidebarMenu.Nav.Title>*/}
        {/*              상품등록*/}
        {/*            </SidebarMenu.Nav.Title>*/}
        {/*          </SidebarMenu.Nav.Link>*/}
        {/*        </SidebarMenu.Nav>*/}

        {/*        <SidebarMenu.Nav>*/}
        {/*          <SidebarMenu.Nav.Link>*/}
        {/*            <SidebarMenu.Nav.Icon>*/}
        {/*              /!* Submenu item icon *!/*/}
        {/*            </SidebarMenu.Nav.Icon>*/}
        {/*            <SidebarMenu.Nav.Title>*/}
        {/*              상품 가져오기*/}
        {/*            </SidebarMenu.Nav.Title>*/}
        {/*          </SidebarMenu.Nav.Link>*/}
        {/*        </SidebarMenu.Nav>*/}

        {/*        <SidebarMenu.Nav>*/}
        {/*          <SidebarMenu.Nav.Link>*/}
        {/*            <SidebarMenu.Nav.Icon>*/}
        {/*              /!* Submenu item icon *!/*/}
        {/*            </SidebarMenu.Nav.Icon>*/}
        {/*            <SidebarMenu.Nav.Title>*/}
        {/*              상품 관리*/}
        {/*            </SidebarMenu.Nav.Title>*/}
        {/*          </SidebarMenu.Nav.Link>*/}
        {/*        </SidebarMenu.Nav>*/}

        {/*        <SidebarMenu.Nav>*/}
        {/*          <SidebarMenu.Nav.Link>*/}
        {/*            <SidebarMenu.Nav.Icon>*/}
        {/*              /!* Submenu item icon *!/*/}
        {/*            </SidebarMenu.Nav.Icon>*/}
        {/*            <SidebarMenu.Nav.Title>*/}
        {/*              상품 관리*/}
        {/*            </SidebarMenu.Nav.Title>*/}
        {/*          </SidebarMenu.Nav.Link>*/}
        {/*        </SidebarMenu.Nav>*/}
        {/*      </SidebarMenu.Sub.Collapse>*/}
        {/*    </SidebarMenu.Sub>*/}

        {/*    <SidebarMenu.Sub>*/}
        {/*      <SidebarMenu.Sub.Toggle>*/}
        {/*        <SidebarMenu.Nav.Icon />*/}
        {/*        <SidebarMenu.Nav.Title>*/}
        {/*          Menu item2*/}
        {/*        </SidebarMenu.Nav.Title>*/}
        {/*      </SidebarMenu.Sub.Toggle>*/}

        {/*      <SidebarMenu.Sub.Collapse>*/}
        {/*        <SidebarMenu.Nav>*/}
        {/*          <SidebarMenu.Nav.Link>*/}
        {/*            <SidebarMenu.Nav.Icon>*/}
        {/*              /!* Submenu item icon *!/*/}
        {/*            </SidebarMenu.Nav.Icon>*/}
        {/*            <SidebarMenu.Nav.Title>*/}
        {/*              Sub Menu item 1*/}
        {/*            </SidebarMenu.Nav.Title>*/}
        {/*          </SidebarMenu.Nav.Link>*/}
        {/*        </SidebarMenu.Nav>*/}

        {/*        <SidebarMenu.Nav>*/}
        {/*          <SidebarMenu.Nav.Link>*/}
        {/*            <SidebarMenu.Nav.Icon>*/}
        {/*              /!* Submenu item icon *!/*/}
        {/*            </SidebarMenu.Nav.Icon>*/}
        {/*            <SidebarMenu.Nav.Title>*/}
        {/*              Sub Menu item 2*/}
        {/*            </SidebarMenu.Nav.Title>*/}
        {/*          </SidebarMenu.Nav.Link>*/}
        {/*        </SidebarMenu.Nav>*/}
        {/*      </SidebarMenu.Sub.Collapse>*/}
        {/*    </SidebarMenu.Sub>*/}

        {/*  </SidebarMenu.Body>*/}
        {/*</SidebarMenu>*/}


      </div>
    </div>
  )
}

export default Aside;
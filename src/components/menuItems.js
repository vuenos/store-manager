import React  from 'react';
import { AppstoreOutlined, ShoppingFilled, SettingFilled, HomeFilled, EditFilled, FileTextFilled, ExclamationCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom"


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const menuItems = [
  getItem(<Link to="/dashboard">대시보드</Link>, 'dashboard', <HomeFilled />),
  getItem('상품', 'product:0', <ShoppingFilled />, [
    getItem(<Link to="/product/register">상품 등록</Link>, 'product:1'),
    getItem(<Link to="/product/import">상품 가져오기</Link>, 'product:2'),
    getItem(<Link to="/product/management">상품 관리</Link>, 'product:3'),
    getItem(<Link to="/product/template/register">템플릿 등록</Link>, 'product:4'),
    getItem(<Link to="/product/template/manege">템플릿 관리</Link>, 'product:5'),
  ]),
  getItem('주문', 'order:0', <FileTextFilled />, [
    getItem(<Link to="/order/list">주문 관리</Link>, 'order:1'),
    getItem(<Link to="/order/claim">클레임 관리</Link>, 'order:2'),
    getItem(<Link to="/order/all">전체 주문 조회</Link>, 'order:3'),
  ]),
  getItem(<Link to="/cs/qnaList">CS</Link>, 'cs', <ExclamationCircleFilled />),
  getItem(<Link to="/schedule">작업관리</Link>, 'schedule', <EditFilled />),
  getItem('연동계정', 'account:0', <SettingFilled />, [
    getItem(<Link to="/mange/partner">쇼핑몰 계정 관리</Link>, 'account:1'),
    getItem(<Link to="/mange/consignment">위탁몰 계정 관리</Link>, 'account:2'),
  ]),
];

export { menuItems }
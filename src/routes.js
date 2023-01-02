import React from 'react';
import { useRoutes } from "react-router-dom";
import {
  Dashboard,
  Login,
  Notfound,
  MyPage
} from './pages';
import {
  Register,
  Import
} from './pages/product';
import { 
  OrderList,
  ClaimList, 
  AllList
} from './pages/order';
import { QnaList } from './pages/qna';
import { Schedule } from './pages/schedule';
import { Partner, Consignment } from './pages/manage'
import Layout from "./Layout";
import Management from "./pages/product/Management";


const AppRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/login", element: <Login /> },
        { path: "/mypage", element: <MyPage /> },
        { path: "/product/register", element: <Register /> },
        { path: "/product/import", element: <Import/> },
        { path: "/product/management", element: <Management/> },       
        // { path: "/product/manage/goods", element: <ManageGoods pathname="/product/manage/goods" /> },
        // { path: "/product/manage/goods/keyword=:keyword&page=:pageNumber", element: <ManageGoods pathname="/product/manage/goods" /> },
        // { path: "/product/manage/goods/keyword=:keyword", element: <ManageGoods pathname="/product/manage/goods" /> },
        // { path: "/product/manage/goods/page=:pageNumber", element: <ManageGoods pathname="/product/manage/goods" /> },
        { path: "/order/list", element: <OrderList /> },
        { path: "/order/claim", element: <ClaimList /> },
        { path: "/order/all", element: <AllList /> },
        { path: "/cs/qnaList", element: <QnaList /> },
        { path: "/schedule", element: <Schedule /> },
        { path: "/mange/partner", element: <Partner /> },
        { path: "/mange/consignment", element: <Consignment /> },
        { path: "*", element: <Notfound /> }
      ],
    }
  ])
  return element;
};

export default AppRoutes;
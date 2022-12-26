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
  Import,
} from './pages/product'
import { OrderList } from './pages/order';
import { ClaimList } from './pages/order/claim';
import { AllList } from 'pages/order/all';
import Layout from "./Layout";


const AppRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/login", element: <Login /> },
        { path: "/mypage", element: <MyPage /> },
        { path: "/product/register", element: <Register /> },
        { path: "product/import", element: <Import/> },
        // { path: "/product/manage/goods", element: <ManageGoods pathname="/product/manage/goods" /> },
        // { path: "/product/manage/goods/keyword=:keyword&page=:pageNumber", element: <ManageGoods pathname="/product/manage/goods" /> },
        // { path: "/product/manage/goods/keyword=:keyword", element: <ManageGoods pathname="/product/manage/goods" /> },
        // { path: "/product/manage/goods/page=:pageNumber", element: <ManageGoods pathname="/product/manage/goods" /> },
        { path: "/order/list", element: <OrderList /> },
        { path: "/order/claim", element: <ClaimList /> },
        { path: "/order/all", element: <AllList /> },
        { path: "*", element: <Notfound /> }
      ],
    }
  ])
  return element;
};

export default AppRoutes;

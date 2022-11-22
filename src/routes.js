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
  ManageGoods,
} from './pages/product'
import { OrderList } from './pages/order'
import Layout from "./Layout";


const AppRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/dashboard", element: <Dashboard title="대시보드" /> },
        { path: "/login", element: <Login /> },
        { path: "/mypage", element: <MyPage /> },
        { path: "/product/register", element: <Register /> },
        { path: "/product/manage/goods", element: <ManageGoods /> },
        { path: "/product/manage/goods/keyword=:keyword&page=:pageNumber", element: <ManageGoods /> },
        { path: "/product/manage/goods/keyword=:keyword", element: <ManageGoods /> },
        // { path: "/product/manage/goods/page=:pageNumber", element: <ManageGoods /> },
        { path: "/order/list", element: <OrderList /> },
        { path: "*", element: <Notfound /> }
      ]
    }
  ])
  return element;
};

export default AppRoutes;

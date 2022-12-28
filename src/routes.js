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
} from './pages/product';
import { 
  OrderList,
  ClaimList, 
  AllList 
} from './pages/order';
import { QnaList } from './pages/qna';
import { Schedule } from './pages/schedule'
import Layout from "./Layout";


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
        { path: "/product/manage/goods", element: <ManageGoods pathname="/product/manage/goods" /> },
        { path: "/product/manage/goods/keyword=:keyword&page=:pageNumber", element: <ManageGoods pathname="/product/manage/goods" /> },
        { path: "/product/manage/goods/keyword=:keyword", element: <ManageGoods pathname="/product/manage/goods" /> },
        { path: "/product/manage/goods/page=:pageNumber", element: <ManageGoods pathname="/product/manage/goods" /> },
        { path: "/order/list", element: <OrderList pathname="/order/list" /> },
        { path: "/order/claim", element: <ClaimList pathname="/order/claim" /> },
        { path: "/order/all", element: <AllList pathname="/order/all" /> },
        { path: "/cs/qnaList", element: <QnaList pathname="/cs/qnaList" /> },
        { path: "/schedule", element: <Schedule pathname="/schedule" /> },
        { path: "*", element: <Notfound /> }
      ],
    }
  ])
  return element;
};

export default AppRoutes;

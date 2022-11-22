import React from 'react';
import { useRoutes } from "react-router-dom";
import {
  Dashboard,
  Login,
  Notfound,
} from './pages';
import { Register } from './pages/product'
import { OrderList } from './pages/order'
import Layout from "./Layout";
import SearchOptions from "./components/SearchOptions";


const AppRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/dashboard", element: <Dashboard title="대시보드" /> },
        { path: "/login", element: <Login /> },
        { path: "/product/register", element: <Register /> },
        { path: "/product/manage/goods", element: <SearchOptions /> },
        { path: "/order/list", element: <OrderList /> },
        { path: "*", element: <Notfound /> }
      ]
    }
  ])
  return element;
};

export default AppRoutes;

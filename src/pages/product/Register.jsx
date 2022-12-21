import React, {useState} from 'react';
// import {Card} from "react-bootstrap";
import Tab from 'components/Product/Tab'
import SelectShop from "./SelectShop";
import SelectCategory from "./SelectCategory";
import DefaultInfo from "./DefaultInfo";
import SelectOption from "./SelectOption";
import SelectTotalStock from "./SelectTotalStock";
import SelectDiscount from "./SelectDiscount";

const Register = () => {
  const [selectedTab,setSelectedTab] = useState("1");

  const tab =[
    {
      icon:"1",
      title:"기초 상품정보",
      subject:"based_product_info"
    },
    {
      icon:"2",
      title:"추가정보",
      subject:"additional_info"
    },
    {
      icon:"3",
      title:"개별설정",
      subject:"each_option"
    }
  ];

  console.log(tab);
  return (
    <>
      <div className="bg-gray-200 d-flex align-items-center step-wrap border-gray-400 border-bottom">
        {tab.map((v,i) => (
            <Tab
              key={i}
              icon={v.icon}
              title={v.title}
              subject={v.subject}
              selected={selectedTab}
            />
          )
        )}
      </div>
      <div className="navbar nav-pills py-4 position-sticky top-75px bg-white z-index-3 btn-prod-tab-group" id="prod-tab">
        <div className="nav nav-pills">
          <a href="#prod1" className="btn btn-prod-tab menu-link nav-link fw-boldest me-2">쇼핑몰 연동</a>
          <a href="#prod2" className="btn btn-prod-tab menu-link nav-link fw-boldest me-2">카테고리</a>
          <a href="#prod3" className="btn btn-prod-tab menu-link nav-link fw-boldest me-2">기본정보</a>
          <a href="#prod4" className="btn btn-prod-tab menu-link nav-link fw-boldest me-2">옵션설정</a>
          <a href="#prod5" className="btn btn-prod-tab menu-link nav-link fw-boldest me-2">재고수량</a>
          <a href="#prod6" className="btn btn-prod-tab menu-link nav-link fw-boldest me-2">판매가 할인설정</a>
          <a href="#prod7" className="btn btn-prod-tab menu-link nav-link fw-boldest me-2">상품정보 고시</a>
          <a href="#prod8" className="btn btn-prod-tab menu-link nav-link fw-boldest me-2">원산지</a>
          <a href="#prod9" className="btn btn-prod-tab menu-link nav-link fw-boldest">기타정보</a>
        </div>
      </div>
      <SelectShop/>
      <SelectCategory/>
      <DefaultInfo/>
      <SelectOption/>
      <SelectTotalStock/>
      <SelectDiscount/>
    </>
  )
}
export default Register;
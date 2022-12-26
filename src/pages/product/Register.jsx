import React, {useState} from 'react';
// import {Card} from "react-bootstrap";
import Tab from 'components/Product/Register/Tab'
import SelectShop from "../../components/Product/Register/SelectShop";
import SelectCategory from "../../components/Product/Register/SelectCategory";
import DefaultInfo from "../../components/Product/Register/DefaultInfo";
import SelectOption from "../../components/Product/Register/SelectOption";
import SelectTotalStock from "../../components/Product/Register/SelectTotalStock";
import SelectDiscount from "../../components/Product/Register/SelectDiscount";
import SelectClassifyGoods from "../../components/Product/Register/SelectClassifyGoods";
import SelectOrigin from "../../components/Product/Register/SelectOrigin";
import SelectOtherInfo from "../../components/Product/Register/SelectOtherInfo";
import {Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

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
      <SelectClassifyGoods/>
      <SelectOrigin/>
      <SelectOtherInfo/>

      <Row>
        <Col  className="wrap_button d-flex justify-content-between position-sticky bottom-0 py-3 bg-white border-top">
          <button type="button" className="btn btn-white">
            <span className="align-middle">임시저장</span>
              <OverlayTrigger
              placement="bottom"
              overlay = {
                <Tooltip className="cursor-pointer lh-sm ms-1 mt-n05">
                  &quot;임시저장한 상품 정보는 다시 상품 등록 페이지에 들어왔을 때 마저 입력할 수 있어요&quot;
                </Tooltip>
              }
            >
              <span className="cursor-pointer lh-sm ms-1 mt-n05"><img src="/assets/media/icons/tooltip.svg" alt="툴팁" /></span>
            </OverlayTrigger>
          </button>
          <button type="submit" className="btn btn-md btn-secondary">상품등록</button>
        </Col>


      </Row>
    </>
  )
}
export default Register;
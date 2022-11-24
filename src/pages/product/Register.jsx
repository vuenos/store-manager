import React, {useState} from 'react';
// import {Card} from "react-bootstrap";
import Tab from 'components/Product/Tab'
import SelectShop from "./SelectShop";

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
      {/*<div className="card my-5 search-table ls-065em">*/}
      {/*  <div className="card-header px-7 py-5 min-h-auto border-bottom-0 flex-nowrap">*/}
      {/*    <div className="row align-items-center w-100">*/}
      {/*      <div className="col-xl-1">*/}
      {/*        <div className="fs-6 fw-boldest mt-3 mb-3">검색어</div>*/}
      {/*      </div>*/}
      {/*      /!*<div className="col-lg-2 ms-2">*!/*/}
      {/*      /!*</div>*!/*/}
      {/*      <div className="col-lg-5 d-flex align-items-center position-relative my-1">*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div className="card-footer px-7 py-5 border-top-0 pt-0">*/}
      {/*    <div className="border-gray-300 border-bottom border-bottom-solid mb-5"></div>*/}

      {/*    <div className="col-lg-12">*/}
      {/*      <button type="button" className="btn btn-white me-3">*/}
      {/*        초기화*/}
      {/*      </button>*/}
      {/*      <button type="submit" className="btn btn-primary"><i className="fas fa-search"></i> 검색</button>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*</div>*/}

      {/*/!*목록*!/*/}
      {/*<div className="card mb-4 my-5">*/}

      {/*  <div className="card-header p-0 border-bottom-0">*/}

      {/*    <div className="row p-7 w-100 align-items-center">*/}
      {/*      <div className="col-12">*/}
      {/*        <h4 className="mb-0 d-inline-block align-middle">주문목록</h4>*/}
      {/*        <span className="d-inline-block cursor-pointer lh-sm ms-1 mt-n05 align-middle" data-bs-toggle="tooltip"*/}
      {/*              data-bs-placement="bottom" data-bs-custom-class="tooltip-dark" title="" data-bs-html="true"*/}
      {/*              data-bs-original-title="고객이 결제를 완료한 주문이에요.<br>주문확인을 클릭하여 ‘배송준비중’ 으로 배송상태를 변경해 주세요. <br>주문을 취소해야 하는 사정이 생겼다면 주문취소를 눌러 주세요<br><br>11번가는 주문번호를 기준으로 주문상태가 변경돼요<br>한 개의 주문번호에 속한 개별 상품의 주문상태를 따로따로 변경할 수 없어요">*/}
      {/*                  <img src="/assets/media/icons/tooltip.svg" alt="툴팁" />*/}
      {/*              </span>*/}
      {/*        <span className="badge badge-count ms-2">*/}
      {/*            <span id="selectedCounting">0</span>*/}
      {/*            <span>/3건</span>*/}
      {/*        </span>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="border-gray-300 border-bottom border-bottom-solid w-100"></div>*/}

      {/*    <div className="row w-100 p-7 pb-0 pe-0">*/}
      {/*      <div className="col-5">*/}
      {/*        <button className="btn btn-white btn-sm me-3 h-40px" id="orderConfirmBtn">주문확인</button>*/}
      {/*        <button className="btn btn-white btn-sm h-40px" id="orderCancelBtn">취소요청</button>*/}
      {/*      </div>*/}

      {/*      <div className="col-7 text-end">*/}

      {/*        <button className="btn btn-excel btn-sm excelBtn me-3 h-40px" id="exportExcel" data-cls="payed">*/}

      {/*          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
      {/*            <path fillRule="evenodd" clipRule="evenodd"*/}
      {/*                  d="M5 3C3.89543 3 3 3.89543 3 5V17C3 18.1046 3.89543 19 5 19H17C18.1046 19 19 18.1046 19 17V5C19 3.89543 18.1046 3 17 3H5ZM9.89855 10.9889L7 15H9.09868L10.8222 12.1887C10.9029 12.0746 10.9668 11.9524 11.0163 11.8256H11.041C11.0944 11.9548 11.1622 12.0804 11.2404 12.1991L12.9143 15H15L12.2083 10.9668L14.931 7H12.9704L11.4214 9.52742C11.3172 9.70895 11.2169 9.89745 11.1218 10.0906H11.1036C11.0541 9.97193 10.9616 9.79156 10.8287 9.54953L9.38007 7H7.24361L9.89855 10.9889Z"*/}
      {/*                  fill="white"></path>*/}
      {/*          </svg>*/}

      {/*          <span className="align-middle">엑셀 다운로드</span>*/}
      {/*        </button>*/}

      {/*        <div className="d-inline-block w-auto me-3">*/}

      {/*        </div>*/}

      {/*        <button type="button" id="manageListColumnBtn" className="btn btn-sm btn-white h-40px">목록 설정</button>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*  </div>*/}

      {/*</div>*/}

      {/*<Card className="my-5 search-table ls-065em">*/}
      {/*  <Card.Header>*/}
      {/*    <div className="row align-items-center w-100">*/}
      {/*      <div className="col-xl-1">*/}
      {/*        <div className="fs-6 fw-boldest mt-3 mb-3">기주문리스트</div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </Card.Header>*/}
      {/*  <Card.Body>*/}
      {/*    <button className="btn btn-white btn-sm me-3 h-40px" id="orderConfirmBtn">주문확인</button>*/}
      {/*    <button className="btn btn-white btn-sm h-40px" id="orderCancelBtn">취소요청</button>*/}
      {/*  </Card.Body>*/}
      {/*</Card>*/}
    </>
  )
}
export default Register;
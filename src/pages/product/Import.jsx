import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import SelectShop from "../../components/Product/Import/SelectShop";
import MatchShop from "../../components/Product/Import/MatchShop";
import MatchingList from "../../components/Product/Import/MatchingList";

const Import = () => {
  const shops = [
    {
      id: 1,
      shopName: 'ncp_1nvgzv_01',
      icon: 'smartstore.png',
    },
    {
      id: 2,
      shopName: 'ncp_1nvgzv_01',
      icon: 'coupang.png',
    },
    {
      id: 3,
      shopName: 'ncp_1nvgzv_01',
      icon: 'gmarket.png',
    },
    {
      id: 4,
      shopName: 'ncp_1nvgzv_01',
      icon: 'auction.png',
    },
    {
      id: 5,
      shopName: 'ncp_1nvgzv_01',
      icon: 'st11.png',
    },
    {
      id: 6,
      shopName: 'ncp_1nvgzv_01',
      icon: 'talkstore.png',
    },
    {
      id: 7,
      shopName: 'ncp_1nvgzv_01',
      icon: 'sho.png',
    }
  ];

  const [mallSelect,setMallSelect] = useState("1");
  const [importType, setImportType] = useState("load");
  console.log(mallSelect)
  return (
    <div className="app-container container-fluid">
      <div className="border-0">
        <ul className="nav nav-tabs nav-wrap nav-line-tabs nav-line-tabs-2x nav-stretch border-0">
          <li className="nav-item">
            <button className={"nav-link fs-4 fw-bolder py-3 "+ (mallSelect === "1"? "active" :"")} onClick={() => setMallSelect("1")}
               // href="https://shcdev.sellerhub.co.kr/product/mall/search"
            >쇼핑몰</button>
          </li>

          <li className="nav-item">
            <button className={"nav-link fs-4 fw-bolder py-3 "+ (mallSelect==="2" ? "active" :"")} onClick={() => setMallSelect("2")}
               // href="https://shcdev.sellerhub.co.kr/product/mall/search_onch"
            >위탁몰</button>
          </li>
        </ul>
      </div>

      <Row className="mb-5 mt-2">
        <Col className="bg-gray-200 d-flex align-items-center step-wrap border-gray-400 border-bottom">

          <div className={"step-box text-center min-w-125px me-2 "+ (importType === "load" ? "active" : "")}  onClick={() => setImportType("load")}>
            <div className={"fs-4 fw-boldest text-gray-500 mt-4 step-text  active "+ (importType === "load" ? "active" : "")}
               >
              <span
                className="d-inline-flex align-items-center justify-content-center rounded-circle w-25px h-25px text-white bg-gray-500 fw-boldest step-number">1</span>
              <div className="mt-4">
                상품 불러오기
              </div>
            </div>
          </div>

          { mallSelect === "1" ?
          <div className={"step-box text-center min-w-125px me-2 "+ (importType === "match" ? "active" : "")} onClick={() => setImportType("match")}>
            <div className={"fs-4 fw-boldest text-gray-500 mt-4 step-text "+ (importType === "match" ? "active" : "")}
               >
              <span
                className="d-inline-flex align-items-center justify-content-center rounded-circle w-25px h-25px text-white bg-gray-500 fw-boldest step-number">2</span>
              <div className="mt-4">
                상품 매칭하기
              </div>
            </div>
          </div>
            : null
          }
        </Col>
      </Row>
    <>
      {importType === "load" ?
      <SelectShop
        shops={shops}
      />
      :
      <>
        <MatchShop
          shops={shops}
        />
        <MatchingList/>
      </>
      }

    </>

    </div>
  );
};

export default Import;

import React from 'react';
import {Card, Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

const SelectMall = () => {
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



  return (
    <Card className="card mb-5">
      <Card.Header className="p-0 border-bottom-0">
        <Row className="p-7">
          <Card.Title className="d-flex">
            <h4 className="mb-0">쇼핑몰 선택</h4>
          </Card.Title>
        </Row>

        <div className="border-gray-300 border-bottom border-bottom-solid w-100 mb-5"></div>

        {/*<Row className="w-100 p-7 pe-0">*/}
        {/*  <Col className="col-xl-7">*/}
        {/*    <Button type="button" variant="white" className="btn-white btn-sm me-2 h-40px">쇼핑몰 계정 추가</Button>*/}
        {/*    <Button type="button" variant="white" className="btn-white btn-sm me-2 h-40px">상품 합치기</Button>*/}
        {/*    <Button type="button" variant="white" className="btn-sm btn-white h-40px">상품 삭제</Button>*/}
        {/*  </Col>*/}
        {/*  <Col className="col-xl-5 my-1 text-end">*/}
        {/*    /!*<Button variant="excel" className="btn-excel btn-sm excelBtn me-2 h-40px">*!/*/}
        {/*    /!*  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">*!/*/}
        {/*    /!*    <path fillRule="evenodd" clipRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V17C3 18.1046 3.89543 19 5 19H17C18.1046 19 19 18.1046 19 17V5C19 3.89543 18.1046 3 17 3H5ZM9.89855 10.9889L7 15H9.09868L10.8222 12.1887C10.9029 12.0746 10.9668 11.9524 11.0163 11.8256H11.041C11.0944 11.9548 11.1622 12.0804 11.2404 12.1991L12.9143 15H15L12.2083 10.9668L14.931 7H12.9704L11.4214 9.52742C11.3172 9.70895 11.2169 9.89745 11.1218 10.0906H11.1036C11.0541 9.97193 10.9616 9.79156 10.8287 9.54953L9.38007 7H7.24361L9.89855 10.9889Z" fill="white"></path>*!/*/}
        {/*    /!*  </svg>*!/*/}
        {/*    /!*  <span className="align-middle">엑셀 다운로드</span>*!/*/}
        {/*    /!*</Button>*!/*/}

        {/*    <div className="d-inline-block w-auto">*/}
        {/*      <Form.Select className="form-select-sm form-select me-2 h-40px select2-hidden-accessible" aria-label="조회 목록 수">*/}
        {/*        <option value="10">10</option>*/}
        {/*        <option value="10">30</option>*/}
        {/*      </Form.Select>*/}
        {/*    </div>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
      </Card.Header>
      <Card.Body className="card-body px-7 pt-0">
        {/*<div className="border-gray-300 border-bottom border-bottom-solid mb-5"></div>*/}
        <Row className="row align-items-center">
          <Col className="col-xl-1 min-w-125px">
            <div className="fs-6 fw-boldest mt-3 mb-3">
              쇼핑몰 선택
            </div>
          </Col>
          <Col>
            {shops ?
              shops.map((shop)=> (
                <div key={shop.id} className="my-1 mx-2 p-0 form-check-inline form-check-solid">
                  <input id={shop.id} type="checkbox" name={shop.shopName} className="form-check-input d-none btn-check"  onClick={()=> console.log(shop.id)}/>
                  <label htmlFor={shop.id} className="btn btn-outline btn-outline-white fw-normal btn-active-secondary p-2 d-flex align-items-center h-40px">
                    <img src={`/assets/media/icons/${shop.icon}`} alt={""}/>&nbsp;{shop.shopName}
                  </label>
                </div>
              ))
              : null
            }
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SelectMall;

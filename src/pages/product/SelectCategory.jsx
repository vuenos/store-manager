import React from 'react';
import {Card, Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

const SelectCategory = () => {
  return (
    <div>
      <Card className="card mb-5 card">
        <Card.Header className="p-0 border-bottom-0">
          <Row className="p-7">
            <Card.Title className="d-flex">
              <h4 className="mb-0">카테고리</h4>
              <OverlayTrigger
                placement="bottom"
                overlay = {
                  <Tooltip className="cursor-pointer lh-sm ms-1 mt-n05">
                    표준 카테고리를 참고하여 상품에 해당하는 카테고리를 선택해 주세요
                  </Tooltip>
                }
              >
                <span className="cursor-pointer lh-sm ms-1 mt-n05"><img src="/assets/media/icons/tooltip.svg" alt="툴팁" /></span>
              </OverlayTrigger>
              {/*<Badge bg="default" className="badge-count ms-2">*/}
              {/*  0 / 000*/}
              {/*</Badge>*/}
            </Card.Title>
          </Row>
          <div className="border-gray-300 border-bottom border-bottom-solid w-100 mb-5"></div>

        </Card.Header>
        <Card.Body className="card-body px-7 pt-0">
          {/*<div className="border-gray-300 border-bottom border-bottom-solid w-100 mb-5"></div>*/}
          <Row className="row align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                표준 카테고리 <span className="text-danger">*</span>
              </div>
            </Col>
            <Col className="col-xl-10 my-1">
              <div className="btn-group mw-250px w-100">
                <label className=" active  w-100">
                  <input type="radio" name="categorySearchType" value="search" className="btn-check" checked=""/>
                    <span className="btn btn-active btn-active-secondary fw-bolder px-6 rounded-0 rounded-start border border-end-0 w-100">검색</span>
                </label>
                <label className=" w-100">
                  <input type="radio" name="categorySearchType" value="select" className="btn-check"/>
                    <span
                      className="btn btn-active btn-active-secondary fw-bolder px-6 rounded-0 border rounded-end w-100">직접선택</span>
                </label>
              </div>
              <div className="d-flex mt-5">
                <input id="searchStandardCategory" name="searchStandardCategory" type="text"
                       className="form-control w-25" placeholder="검색어를 입력해 주세요"/>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SelectCategory;

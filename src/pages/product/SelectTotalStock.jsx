import React from 'react';
import {Card, Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

const SelectTotalStock = () => {
  return (
    <Accordion defaultActiveKey={"0"} className={"mb-5"}>
      <Accordion.Item eventKey={"0"}>
        <Card className="card">
          <Accordion.Header className={"p-0"}>
          <Card.Header className="p-0 border-bottom-0">
            <Row className="p-7">
              <Card.Title className="d-flex">
                <h4 className="mb-0">재고수량</h4>
                <OverlayTrigger
                  placement="bottom"
                  overlay = {
                    <Tooltip className="cursor-pointer lh-sm ms-1 mt-n05">
                      별도로 옵션이 없는 상품의 재고를 설정할 수 있어요. 최대 99,999까지 입력할 수 있어요
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


          </Card.Header>
          </Accordion.Header>
          <div className="border-gray-300 border-bottom border-bottom-solid w-100"></div>
          <Accordion.Body>

          <Card.Body className="card-body px-7 pt-0 mt-5">
            {/*<div className="border-gray-300 border-bottom border-bottom-solid w-100 mb-5"></div>*/}
            <Row className="row align-items-center">
              <Col className="col-xl-1 min-w-125px">
                <div className="fs-6 fw-boldest mt-3 mb-3">
                  재고수량 <span className="text-danger">*</span>
                </div>
              </Col>
              <Col className="col-xl-6">
                <button type="button" className="btn btn-white me-1">-100</button>
                <button type="button" className="btn btn-white me-1">-10</button>
                <input type="number" id="totStock" name="totStock" className="form-control d-inline-block w-100px me-1"/>
                <button type="button" className="btn btn-white me-1">+10</button>
                <button type="button" className="btn btn-white">+100</button>
              </Col>
            </Row>
          </Card.Body>
          </Accordion.Body>
        </Card>
      </Accordion.Item>
    </Accordion>
  );
};

export default SelectTotalStock;

import React, {useState} from 'react';
import {Card, Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';
import "react-datepicker/dist/react-datepicker.css";
const SelectDiscount = () => {

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div>
      <Card className="card mb-5 card">
        <Card.Header className="p-0 border-bottom-0">
          <Row className="card-header px-7 py-5 min-h-auto border-bottom-0 flex-nowrap align-items-center">
            <Card.Title className="d-flex">
              <h4 className="mb-0">판매가 할인설정</h4>
              <OverlayTrigger
                placement="bottom"
                overlay = {
                  <Tooltip className="cursor-pointer lh-sm ms-1 mt-n05">
                    퍼센트(%)나 원(₩) 기준으로 상품의 할인금액을 설정할 수 있어요
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
                할인설정
              </div>
            </Col>
            <Col className="col-xl-10 my-1">
              <div className="btn-group mw-250px w-100">
                <label className=" active  w-100">
                  <input type="radio" name="isUseDiscount" value="search" className="btn-check" defaultChecked/>
                  <span className="btn btn-active btn-active-secondary fw-bolder px-6 rounded-0 rounded-start border border-end-0 w-100">설정</span>
                </label>
                <label className=" w-100">
                  <input type="radio" name="isUseDiscount" value="select" className="btn-check"/>
                  <span className="btn btn-active btn-active-secondary fw-bolder px-6 rounded-0 border rounded-end w-100">미설정</span>
                </label>
              </div>
            </Col>
          </Row>


          <Row className="row align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                할인가 기준
              </div>
            </Col>
            <Col className="col-xl-10 my-1">
              <div className="btn-group mw-250px w-100">
                <label className=" active  w-100">
                  <input type="radio" name="sellerDiscountType" value="search" className="btn-check" defaultChecked/>
                  <span className="btn btn-active btn-active-secondary fw-bolder px-6 rounded-0 rounded-start border border-end-0 w-100">%</span>
                </label>
                <label className=" w-100">
                  <input type="radio" name="sellerDiscountType" value="select" className="btn-check"/>
                  <span className="btn btn-active btn-active-secondary fw-bolder px-6 rounded-0 border rounded-end w-100">₩</span>
                </label>
              </div>
            </Col>
          </Row>

          <Row className="row align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                할인율
              </div>
            </Col>
            <Col className="col-xl-6 my-1">
              <input type="number" id="totStock" name="totStock" className="form-control d-inline-block me-1"/>
            </Col>
          </Row>


          <Row className="row align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                기간설정
              </div>
            </Col>
            <Col className="item_put cell_period col-xl-10 d-flex align-items-center">
              <div className="d-flex position-relative align-items-center col-lg-20">
                <DatePicker
                  className={"form-control d-inline-block text-center min-w-250px"}
                  selectsRange={true}
                  dateFormat="yyyy년 MM월 dd일"
                  startDate={startDate}
                  endDate={endDate}
                  locale={ko}
                  onChange={(update) => {
                    setDateRange(update);
                  }}
                  withPortal
                />
              </div>
              <button type="button" className="btn btn-secondary ms-3">초기화</button>
            </Col>
            <span className="f_red text-muted fs-7 mt-3">* 쿠팡은 판매가 할인설정을 지원하지 않습니다.</span>
          </Row>




        </Card.Body>
      </Card>
    </div>
  );
};

export default SelectDiscount;

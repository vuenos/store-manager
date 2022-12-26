import React, {useState} from 'react';
import {Card, Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';

const SelectOtherInfo = () => {

  const [manuFactureDate,setManuFactureDate] = useState(null);
  const [validDate, setValidDate] = useState(null);
  return (
    <div>
      <Card className="mb-5">
        <Card.Header className="p-0 border-bottom-0">
          <Row className="p-7">
            <Card.Title className="d-flex">
              <h4 className="mb-0">기타정보</h4>
              <OverlayTrigger
                placement="bottom"
                overlay = {
                  <Tooltip className="cursor-pointer lh-sm ms-1 mt-n05">
                    미성년자 구매가능 여부와 중고 상품 여부는 반드시 선택해 주세요
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
          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                미성년자<br/>구매가능여부 <span className="text-danger">*</span>
              </div>
            </Col>
            <Col className="col-xl-10 my-1">
              <div className="btn-group mw-250px w-100">
                <label className=" active  w-100">
                  <input type="radio" name="isMinors" value="search" className="btn-check" defaultChecked/>
                  <span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-6 rounded-0 rounded-start border border-end-0 w-100">가능</span>
                </label>
                <label className=" w-100">
                  <input type="radio" name="isMinors" value="select" className="btn-check"/>
                  <span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-6 rounded-0 border rounded-end w-100">불가능</span>
                </label>
              </div>
            </Col>
          </Row>

          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                중고상품 여부 <span className="text-danger">*</span>
              </div>
            </Col>
            <Col className="col-xl-10 my-1">
              <div className="btn-group mw-250px w-100">
                <label className=" active  w-100">
                  <input type="radio" name="isOld_N" value="Y" className="btn-check" defaultChecked/>
                  <span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-6 rounded-0 rounded-start border border-end-0 w-100">새상품</span>
                </label>
                <label className=" w-100">
                  <input type="radio" name="isOld_N" value="N" className="btn-check"/>
                  <span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-6 rounded-0 border rounded-end w-100">중고상품</span>
                </label>
              </div>
            </Col>
          </Row>


          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                모델명
              </div>
            </Col>
            <Col className="col-xl-5">
                {/*<p className="text-muted fs-7 mb-2">&quot;,&quot;를 입력하면 다중으로 키워드를 등록할 수 있습니다. Enter키로 등록할 수 있습니다.</p>*/}
                <input id="modelNm" name="modelNm" type="text"
                       className="form-control" placeholder="모델명을 입력해주세요"/>
            </Col>
          </Row>

          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                자체 관리코드
              </div>
            </Col>
            <Col className="col-xl-5">
              {/*<p className="text-muted fs-7 mb-2">&quot;,&quot;를 입력하면 다중으로 키워드를 등록할 수 있습니다. Enter키로 등록할 수 있습니다.</p>*/}
              <input id="sap_code" name="sap_code" type="text"
                     className="form-control" placeholder="자체 관리코드를 입력해 주세요"/>
            </Col>
          </Row>

          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                SKU코드
              </div>
            </Col>
            <Col className="col-xl-5">
              {/*<p className="text-muted fs-7 mb-2">&quot;,&quot;를 입력하면 다중으로 키워드를 등록할 수 있습니다. Enter키로 등록할 수 있습니다.</p>*/}
              <input id="sku_code" name="sku_code" type="text"
                     className="form-control" placeholder="SKU코드를 입력해 주세요"/>
            </Col>
          </Row>

          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                브랜드
              </div>
            </Col>
            <Col className="col-xl-5">
              {/*<p className="text-muted fs-7 mb-2">&quot;,&quot;를 입력하면 다중으로 키워드를 등록할 수 있습니다. Enter키로 등록할 수 있습니다.</p>*/}
              <input id="brand" name="brand" type="text"
                     className="form-control" placeholder="브랜드를 입력해 주세요"/>
            </Col>
          </Row>

          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                제조사
              </div>
            </Col>
            <Col className="col-xl-5">
              {/*<p className="text-muted fs-7 mb-2">&quot;,&quot;를 입력하면 다중으로 키워드를 등록할 수 있습니다. Enter키로 등록할 수 있습니다.</p>*/}
              <input id="maker" name="maker" type="text"
                     className="form-control" placeholder="제조사를 입력해 주세요"/>
            </Col>
          </Row>

          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                1회 최소 구매수량
              </div>
            </Col>
            <Col className="col-xl-2">
              {/*<p className="text-muted fs-7 mb-2">&quot;,&quot;를 입력하면 다중으로 키워드를 등록할 수 있습니다. Enter키로 등록할 수 있습니다.</p>*/}
              <input id="minPurchaseQuantity" name="minPurchaseQuantity" type="number" min="1" max="1000"
                     className="form-control"/>
            </Col>
          </Row>

          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                1회 최대 구매수량
              </div>
            </Col>
            <Col className="col-xl-2">
              {/*<p className="text-muted fs-7 mb-2">&quot;,&quot;를 입력하면 다중으로 키워드를 등록할 수 있습니다. Enter키로 등록할 수 있습니다.</p>*/}
              <input id="maxPurchaseQuantity" name="maxPurchaseQuantity" type="number" min="1" max="1000"
                     className="form-control"/>
            </Col>
          </Row>


          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                1인 최대 구매수량
              </div>
            </Col>
            <Col className="col-xl-2">
              {/*<p className="text-muted fs-7 mb-2">&quot;,&quot;를 입력하면 다중으로 키워드를 등록할 수 있습니다. Enter키로 등록할 수 있습니다.</p>*/}
              <input id="maxPurchaseQuantityOfBuyer" name="maxPurchaseQuantityOfBuyer" type="number" min="1" max="1000"
                     className="form-control"/>
            </Col>
          </Row>


          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                제조일자
              </div>
            </Col>
            <Col className="col-xl-2">
              {/*<p className="text-muted fs-7 mb-2">&quot;,&quot;를 입력하면 다중으로 키워드를 등록할 수 있습니다. Enter키로 등록할 수 있습니다.</p>*/}
              <Col className="item_put cell_period col-xl-10 d-flex align-items-center">
                <div className="d-flex position-relative align-items-center col-lg-20">
                  <DatePicker
                    className={"form-control d-inline-block text-center"}
                    dateFormat="yyyy. MM. dd."
                    selected={manuFactureDate}
                    locale={ko}
                    onChange={(date) => {
                      setManuFactureDate(date);
                    }}
                    withPortal
                  />
                </div>
              </Col>
            </Col>
          </Row>
          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                유효일자
              </div>
            </Col>
            <Col className="col-xl-2">
              <Col className="item_put cell_period col-xl-10 d-flex align-items-center">
                <div className="d-flex position-relative align-items-center col-lg-20">
                  <DatePicker
                    className={"form-control d-inline-block text-center"}
                    dateFormat="yyyy. MM. dd."
                    selected={validDate}
                    locale={ko}
                    onChange={(date) => {
                      setValidDate(date);
                    }}
                    withPortal
                  />
                </div>
              </Col>
            </Col>
          </Row>






          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                사은품
              </div>
            </Col>
            <Col className="col-xl-5">
              {/*<p className="text-muted fs-7 mb-2">&quot;,&quot;를 입력하면 다중으로 키워드를 등록할 수 있습니다. Enter키로 등록할 수 있습니다.</p>*/}
              <input id="gift" name="gift" type="text"
                     className="form-control" placeholder="사은품를 입력해 주세요"/>
            </Col>
          </Row>

        </Card.Body>
      </Card>

    </div>
  );
};

export default SelectOtherInfo;

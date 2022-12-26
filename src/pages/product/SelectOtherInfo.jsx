import React from 'react';
import {Card, Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const SelectOtherInfo = () => {
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
                검색키워드
              </div>
            </Col>
            <Col className="col-xl-10 my-1">
              <div className="col-xl-10 my-1">
                <p className="text-muted fs-7 mb-2">&quot;,&quot;를 입력하면 다중으로 키워드를 등록할 수 있습니다. Enter키로 등록할 수 있습니다.</p>
                <input id="searchStandardCategory" name="searchStandardCategory" type="text"
                       className="form-control w-500px" placeholder="검색어를 입력해 주세요"/>
              </div>
            </Col>
          </Row>


          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                상품 이미지 <span className="text-danger">*</span>
              </div>
            </Col>
            <Col className="col-xl-10 my-1">
              <div className="col-xl-10 my-1">
                <div className="text-gray-500 fs-7 mb-3 ">권장 사이즈: 700x700 px / 이미지 파일 형식 : png,jpg,jpeg</div>
              </div>
            </Col>
          </Row>


          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="text-gray-500 fw-bolder fs-6 mb-3">
                대표 이미지 <span className="text-danger">*</span>
              </div>
              <div className="fs-7 mb-3 word-keep-all  text-gray-500 ">대표이미지는 필수 입력사항입니다</div>
            </Col>
            <Col className="col-xl-10 ">
              <div className="card card-flush mb-5 pt-6 ps-6">
                추후 이미지라이브러리 구현
              </div>
            </Col>
          </Row>


          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="text-gray-500 fw-bolder fs-6 mb-3">
                추가 이미지
              </div>
              <div className="fs-7 mb-3 word-keep-all  text-gray-500 ">추가이미지는 최대 9장까지 등록할 수 있습니다</div>
            </Col>
            <Col className="col-xl-10 ">
              <div className="card card-flush mb-5 pt-6 ps-6">
                추후 이미지라이브러리 구현
              </div>
            </Col>
          </Row>


          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                상품 상세설명 <span className="text-danger">*</span>
              </div>
            </Col>
            <Col className="col-xl-10 myy-1">
              <div>
                <CKEditor
                  editor={ClassicEditor}
                  data="<p>Hello from CKEditor 5!</p>"
                  onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                  } }
                  onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                  } }
                  onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                  } }
                  onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                  } }
                  config={outerHeight}
                />
              </div>
              <div className="text-danger mt-3">상품 상세설명을 입력해주세요.</div>
            </Col>
          </Row>


          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                판매가격 <span className="text-danger">*</span>
              </div>
            </Col>
            <Col className="col-xl-10 my-1">
              <span className="w-200px d-inline-block me-3 text-muted">판매가
                <span className="text-danger"> *</span>
              </span>
              <span className="w-200px d-inline-block me-3 text-muted">출시가격</span>
              <span className="text-muted">매입가(공급가)</span>
              <div className="d-flex align-items-center">
                <div className="input-group me-3 w-200px">
                  <input type="number" min="0" id="salePrice" name="salePrice" className="form-control"/>
                  <span className="input-group-text">원</span>
                </div>
                <div className="input-group me-3 w-200px">
                  <input type="number" min="0" id="consumerPrice" name="consumerPrice" className="form-control"/>
                  <span className="input-group-text">원</span>
                </div>
                <div className="input-group w-200px">
                  <input type="number" min="0" id="supplyPrice" name="supplyPrice" className="form-control"/>
                  <span className="input-group-text">원</span>
                </div>
              </div>
            </Col>
          </Row>


          <Row className="row mb-5 align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                부가세 <span className="text-danger">*</span>
              </div>
            </Col>
            <Col className="col-xl-4">
              <div className="btn-group">
                <label className="active">
                  <input type="radio" className="btn-check" name="taxType" id="taxType_Tax" value="TAX"/>
                  <span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-6 rounded-0 rounded-start border border-end-0">과세</span>
                </label>
                <label>
                  <input type="radio" className="btn-check" name="taxType" id="taxType_Dutyfree" value="DUTYFREE"/>
                  <span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-6 rounded-0 border border-end-0">면세</span>
                </label>
                <label>
                  <input type="radio" className="btn-check" name="taxType" id="taxType_Small" value="SMALL"/>
                  <span className="btn btn-sm btn-active btn-active-secondary fw-bolder px-6 rounded-0 border rounded-end">영세</span>
                </label>
              </div>
            </Col>
          </Row>


        </Card.Body>
      </Card>

    </div>
  );
};

export default SelectOtherInfo;

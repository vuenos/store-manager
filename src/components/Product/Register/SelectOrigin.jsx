import React from 'react';
import {Card, Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

const SelectOrigin = () => {
  return (
    <div>
      <Card className="card mb-5 card">
        <Card.Header className="p-0 border-bottom-0">
          <Row className="card-header px-7 py-5 min-h-auto border-bottom-0 flex-nowrap align-items-center">
            <Card.Title className="d-flex">
              <h4 className="mb-0">원산지</h4>
              <OverlayTrigger
                placement="bottom"
                overlay = {
                  <Tooltip className="cursor-pointer lh-sm ms-1 mt-n05">
                    상품의 생산지를 선택해 주세요. 상품의 생산지가 2개 이상이라면 &quot;원산지가 다른 상품도 함께 등록할게요&quot;를 눌러 주세요
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
          <Row className="row align-items-center">
            <Col className="col-xl-1 min-w-125px py-5">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                품목 분류 <span className="text-danger">*</span>
              </div>
            </Col>
            <Col className="col-3 text-end form-check form-check-custom form-check-solid form-check-sm">
              <select id="origin_idx_1" name="origin[list][]" className="origin-select form-control form-select me-3">
                <option value="">1차 설정</option>
                <option value="00">국내산</option>
                <option value="02">외국산</option>
                <option value="03">혼합/기타</option>
              </select>
            </Col>

            <Col className="col-3">
                <select id="origin_idx_2" name="origin[list][]" className="origin-select form-control form-select me-3">
                  <option value="">2차 설정</option>
                  <option value="0010">울산광역시</option>
                  <option value="0006">대구광역시</option>
                  <option value="0007">대전광역시</option>
                  <option value="0004">경상북도</option>
                  <option value="0005">광주광역시</option>
                  <option value="0002">경기도</option>
                  <option value="0003">경상남도</option>
                  <option value="0001">강원도</option>
                  <option value="0008">부산광역시</option>
                  <option value="0009">서울특별시</option>
                  <option value="0017">세종특별자치시</option>
                  <option value="0015">충청남도</option>
                  <option value="0016">충청북도</option>
                  <option value="0013">전라북도</option>
                  <option value="0014">제주특별자치도</option>
                  <option value="0011">인천광역시</option>
                  <option value="0012">전라남도</option>
                  <option value="0204">북아메리카(북미)</option>
                  <option value="0205">라틴아메리카(남미)</option>
                  <option value="0202">아프리카</option>
                  <option value="0203">오세아니아</option>
                  <option value="0200">아시아</option>
                  <option value="0201">유럽</option>
                </select>
            </Col>

            <Col className="col-3">
              <select id="origin_idx_3" name="origin[list][]" className="origin-select form-control form-select me-3">
                <option value="">3차 설정</option>
              </select>

            </Col>
            <div className="mt-4">
                                    <span id="registerWithOtherOriginAreaDiv"
                                          className="form-check form-check-custom form-check-solid form-check-sm">
                                        <input type="checkbox" id="registerWithOtherOriginArea"
                                               className="form-check-input me-3"
                                               name="origin[registerWithOtherOriginArea]" value="Y"
                                               />
                                        <label htmlFor="registerWithOtherOriginArea" className="lab_16 text-muted fs-7">원산지가 다른 상품도 함께 등록할게요</label>
                                    </span>
            </div>
          </Row>
          <Row className="row mb-5 align-items-center">
            <div className="col-xl-1 min-w-125px fs-6 fw-boldest">수입사 정보</div>

            <div className="col-xl-3">
              <div className="mb-3" id="originImporterDiv">
                <input type="text" id="origin_importer" name="origin[importer]" className="form-control mt-2"
                       placeholder="수입사 정보를 입력해 주세요"/>
              </div>
            </div>
          </Row>


        </Card.Body>
      </Card>
    </div>
  );
};

export default SelectOrigin;

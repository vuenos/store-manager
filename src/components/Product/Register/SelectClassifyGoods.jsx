import React from 'react';
import {Card, Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

const SelectClassifyGoods = () => {
  return (
    <div>
      <Card className="card mb-5 card">
        <Card.Header className="p-0 border-bottom-0">
          <Row className="card-header px-7 py-5 min-h-auto border-bottom-0 flex-nowrap align-items-center">
            <Card.Title className="d-flex">
              <h4 className="mb-0">상품정보 고시</h4>
              <OverlayTrigger
                placement="bottom"
                overlay = {
                  <Tooltip className="cursor-pointer lh-sm ms-1 mt-n05">
                    온라인 판매자가 소비자들에게 반드시 공지해야 하는 상품의 정보에요
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
            <Col>
              <select name="goodsRequired" id="goodsRequired" className="form-control form-select">
                <option value="">선택안함</option>
                <option value="WEAR">의류</option>
                <option value="SHOES">구두/신발</option>
                <option value="BAG">가방</option>
                <option value="FASHION_ITEM">패션잡화</option>
                <option value="BEDDING_CURTAIN">침구류/커튼</option>
                <option value="FURNITURE">가구(침대/소파/싱크대/DIY제품)</option>
                <option value="IMAGE_APPLIANCE">영상가전(TV류)</option>
                <option value="HOME_APPLIANCE">가정용전기제품(냉장고/세탁기/식기세척기/전자레인지)</option>
                <option value="SEASONAL_APPLIANCE">계절가전(에어컨/온풍기)</option>
                <option value="OFFICE_EQUIPMENT">사무용기기(컴퓨터/노트북/프린터)</option>
                <option value="OPTICS_EQUIPMENT">광학기기(디지털카메라/캠코더)</option>
                <option value="MICROELECTRONICS">소형전자(MP3/전자사전 등)</option>
                <option value="NAVIGATION">내비게이션</option>
                <option value="CAR_EQUIPMENT">자동차용품(자동차부품/기타자동차용품)</option>
                <option value="MEDICAL_EQUIPMENT">의료기기</option>
                <option value="KITCHEN_UTENSILS">주방용품</option>
                <option value="COSMETIC">화장품</option>
                <option value="JEWELRY">귀금속/보석/시계류</option>
                <option value="FOOD">식품(농수산물)</option>
                <option value="PROCESSED_FOOD">가공식품</option>
                <option value="HEALTH_FUNCTIONAL_FOOD">건강기능식품</option>
                <option value="KIDS">영유아용품</option>
                <option value="MUSICAL_INSTRUMENT">악기</option>
                <option value="SPORTS_EQUIPMENT">스포츠용품</option>
                <option value="BOOK">서적</option>
                <option value="RENTAL_ETC">물품대여서비스(서적,유아용품,행사용품 등)</option>
                <option value="DIGITAL_CONTENTS">디지털콘텐츠(음원,게임,인터넷강의 등)</option>
                <option value="GIFTCARD_COUPON">상품권/쿠폰</option>
                <option value="MOBILE_COUPON">모바일쿠폰</option>
                <option value="MOVIE_CONCERT">영화/공연</option>
                <option value="ETC_SERVICE">기타 용역</option>
                <option value="ETC_PRODUCT">기타 재화</option>
                <option value="HOUSEHOLD_CHEMICAL">생활화학제품</option>
                <option value="BIOCIDAL_PRODUCT">살생물제품</option>
              </select>
            </Col>

            <Col className="col-xl-5 text-end form-check form-check-custom form-check-solid form-check-sm">
              <label htmlFor="desc_check_all">
                <input type="checkbox" id="desc_check_all" className="form-check-input me-3" value="Y"/> <span className="text-muted fs-7">전체 상품상세 페이지 참조</span>
              </label>
              <br/>
                <div className="text-danger ms-3">품목 분류를 선택해주세요.</div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SelectClassifyGoods;

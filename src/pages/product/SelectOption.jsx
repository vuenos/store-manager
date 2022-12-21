import React from 'react';
import {Card, Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

const SelectOption = () => {
  return (
    <div>
      <Card className="card mb-5 card">
        <Card.Header className="p-0 border-bottom-0">
          <Row className="p-7">
            <Card.Title className="d-flex">
              <h4 className="mb-0">옵션설정</h4>
              <OverlayTrigger
                placement="bottom"
                overlay = {
                  <Tooltip className="cursor-pointer lh-sm ms-1 mt-n05">
                    옵션을 추가하고 싶으면, 옵션명과 옵션값을 입력하고 옵션목록 생성을 눌러 주세요. 필요에 따라 옵션목록에서 옵션값을 수정할 수 있어요
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
                옵션설정
              </div>
            </Col>
            <Col className="col-xl-10 my-1">
              <div className="btn-group w-100 mw-250px">
                <label htmlFor="isUseOption_Y" className="w-100">
                  <input type="radio" className="btn-check" name="isUseOption" id="isUseOption_Y" value="Y"/>
                    <span
                      className="btn btn-sm btn-active btn-active-secondary fw-bolder px-6 rounded-0 rounded-start border border-end-0 w-100">설정</span>
                </label>
                <label htmlFor="isUseOption_N" className="w-100">
                  <input type="radio" className="btn-check" name="isUseOption" id="isUseOption_N" value="N"/>
                    <span
                      className="btn btn-sm btn-active btn-active-secondary fw-bolder px-6 rounded-0 border rounded-end w-100">미설정</span>
                </label>
              </div>
            </Col>
          </Row>
          <Row className="row align-items-center">
            <Col className="col-xl-1 min-w-125px">
              <div className="fs-6 fw-boldest mt-3 mb-3">
                옵션추가
              </div>
            </Col>
            <Col className="col-xl-10 my-1">
              <div className="d-flex align-items-center option-row mt-3">
                <div className="fs-6 fw-boldest col-xl-1 text-muted">옵션명</div>
                <span className="col-xl-4">
                  <input type="text" name="option_name[]" className="form-control" value="" placeholder="(예시:색상)"/></span>
                <div className="fs-6 fw-boldest col-xl-1 text-muted mx-sm-6 text-sm-center"> 옵션값</div>
                <span className="col-xl-5 me-5">
                    <div className="option_value">
                        <input type="text" name="option_value[]" value=""
                               placeholder="쉼표 (,)로 여러 옵션값을 등록 할 수 있어요(예시:블랙,레드)"
                               className="form-control"/>
                    </div>
                </span>
                <div className="col-xl-1">
                  <button type="button" className="btn btn-dark">+
                  </button>
                </div>
              </div>
              <p className="text-muted fs-7 my-3">* ESM2.0 (옥션/지마켓)은 쇼핑몰 정책에 따라 옵션명을 수정해야 할 수도 있어요.</p>
              <button type="button" className="btn btn-secondary" onClick="optionGenerate(this);">옵션목록 생성하기</button>
            </Col>
          </Row>

          <Col className="d-flex">
            <div className="optionSection option_list_div border rounded px-7 py-5 card mt-5">
            <div className="align-items-center d-flex mt-5">
              <div className="col-xl-1"><span className="fs-6 fw-boldest  mt-3 mb-3 col-xl-1 text-gray-600 min-w-125px">옵션목록</span>
              </div>

              <div className="col-xl-10">
                <button type="button" className="btn btn-sm btn-secondary">-선택 옵션 삭제</button>
                <button type="button" className="btn btn-sm btn-secondary m-lg-2">+선택 옵션 추가</button>
              </div>
            </div>
            <div className="tbl_basic tbl_option el-option-list" id="el-option-list">
              <div id="option_colgroup" className="bg-white border rounded px-7 py-5 mt-5">

                <div id="option_thead"
                     className="d-flex align-items-center form-check form-check-custom form-check-solid form-check-sm">
                  <div><input type="checkbox" id="allChk" name="allChk" className="form-check-input me-5"/></div>
                  <div className="col-xl-1 fs-6 fw-boldest mt-3 mb-3 col-xl-1">
                    1
                  </div>
                  <div className="col-xl-1 fs-6 fw-boldest mt-3 mb-3 col-xl-1">
                    2
                  </div>
                  <div className="fs-6 fw-boldest mt-3 mb-3 me-3 w-150px d-flex">
                    재고수량
                    <OverlayTrigger
                      placement="bottom"
                      overlay = {
                        <Tooltip className="cursor-pointer lh-sm ms-1 mt-n05">
                          해당 옵션의 재고수량을 입력해 주세요. 최대 99,999까지 입력할 수 있어요
                        </Tooltip>
                      }
                    >
                      <span className="cursor-pointer lh-sm ms-1 mt-n05"><img src="/assets/media/icons/tooltip.svg" alt="툴팁" /></span>
                    </OverlayTrigger>
                  </div>

                  <div className="fs-6 fw-boldest mt-3 mb-3 me-3 w-150px d-flex">
                    옵션추가 금액
                    <OverlayTrigger
                      placement="bottom"
                      overlay = {
                        <Tooltip className="cursor-pointer lh-sm ms-1 mt-n05">
                          옵션별로 추가할 금액을 입력해 주세요. 구매자에게 보이는 금액은 &quot;판매가+옵션추가 금액&quot;이에요
                        </Tooltip>
                      }
                    >
                      <span className="cursor-pointer lh-sm ms-1 mt-n05"><img src="/assets/media/icons/tooltip.svg" alt="툴팁" /></span>
                    </OverlayTrigger>
                  </div>

                  <div className="fs-6 fw-boldest mt-3 mb-3 me-3 w-150px d-flex">
                    옵션 관리코드
                    <OverlayTrigger
                      placement="bottom"
                      overlay = {
                        <Tooltip className="cursor-pointer lh-sm ms-1 mt-n05">
                          상품을 옵션별로 관리하기 위해 사용하는 코드예요. 영문과 숫자를 모두 조합한 20자 이내의 코드를 입력해 주세요
                        </Tooltip>
                      }
                    >
                      <span className="cursor-pointer lh-sm ms-1 mt-n05"><img src="/assets/media/icons/tooltip.svg" alt="툴팁" /></span>
                    </OverlayTrigger>
                  </div>

                  <div className="fs-6 fw-boldest mt-3 mb-3 me-3 w-150px d-flex">
                    SKU코드
                    <OverlayTrigger
                      placement="bottom"
                      overlay = {
                        <Tooltip className="cursor-pointer lh-sm ms-1 mt-n05">
                          옵션의 재고관리에 사용하는 코드예요. 영문과 숫자를 모두 조합한 20자 이내의 코드를 입력해 주세요
                        </Tooltip>
                      }
                    >
                      <span className="cursor-pointer lh-sm ms-1 mt-n05"><img src="/assets/media/icons/tooltip.svg" alt="툴팁" /></span>
                    </OverlayTrigger>
                  </div>
                </div>
                <div className="border-gray-300 border-bottom border-bottom-solid mb-5"></div>
                <div className="first-border-none">
                  <div className="border-gray-100 border-bottom border-bottom-solid mb-5 mt-5"></div>
                  <div className="d-flex form-check form-check-custom form-check-solid form-check-sm">
                    <input type="hidden" name="option_sno[0]" value=""/>
                      <div><input type="checkbox" className="opt_chk form-check-input me-5" name="opt_chk[]" value="0"/></div>
                      <div className="col-xl-1 text-gray-500 fw-bolder fs-6">
                        2
                        <input type="hidden" name="opt[0][0]" value="2" readOnly=""/>
                      </div>
                      <div className="col-xl-1 text-gray-500 fw-bolder fs-6">
                        3
                        <input type="hidden" name="opt[1][0]" value="3" readOnly=""/>
                      </div>

                      <div className="me-3 w-150px"><input type="number" className="form-control form-control-sm"
                                                           name="option_stock[0]" value="0" min="0"
                                                           /></div>
                      <div className="me-3 w-150px"><input type="number" className="form-control form-control-sm"
                                                           name="option_price[0]" value="0"/></div>
                      <div className="me-3 w-150px"><input type="text" className="form-control form-control-sm"
                                                           name="option_code[0]" value="" placeholder="입력"/></div>
                      <div className="me-3 w-150px"><input type="text" className="form-control form-control-sm"
                                                           name="option_sku_code[0]" value="" placeholder="입력"/></div>
                  </div>
                </div>
                <div className="border-gray-300 border-bottom border-bottom-solid mb-5 mt-5"></div>
                <div className="d-flex align-items-center">
                  <div className="me-11  col-xl-2 "><strong className="text-gray-500 fw-bolder fs-6 mb-3">일괄입력</strong>
                  </div>
                  <div className="d-flex">
                    <input type="number" className="form-control form-control-sm w-100px me-3" name="all_option_stock"
                           placeholder="일괄입력" min="0"/>
                      <div className="input-group-append">
                        <button type="button" className="btn btn-secondary btn-sm optionAllChange me-3 w-50px p-3">입력
                        </button>
                      </div>
                  </div>
                  <div className="d-flex">
                    <input type="number" className="form-control form-control-sm w-100px me-3" name="all_option_price"
                           placeholder="일괄입력"/>
                      <div className="input-group-append">
                        <button type="button" className="btn btn-secondary btn-sm optionAllChange me-3 w-50px p-3">입력
                        </button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Col>

        </Card.Body>
      </Card>
    </div>
  );
};

export default SelectOption;

import React from 'react';

const GoodsList = () => {
  return (
    <div className="tab-content">
      <div className="tab-pane fade show active">

        <div className="card mb-4">

          <div className="card-header p-0 border-bottom-0">

            <div className="row p-7">
              <h4 className="mb-0 d-flex">
                상품 목록
                <span className="cursor-pointer lh-sm ms-1 mt-n05" data-bs-toggle="tooltip" data-bs-placement="bottom"
                      data-bs-custom-class="tooltip-dark" title="" data-bs-html="true" data-bs-original-title="
                                                    <b>[판매상태 변경]</b> 쇼핑몰별 상품의 판매상태를 변경할 수 있어요 <br/><br/>
                            <b>[상품 보내기]</b> 수정된 상품의 정보를 쇼핑몰에 보내거나, 상품 등록만 해둔 상태의 상품을 쇼핑몰에 보낼 수 있어요 <br/><br/>
                            <b>[상품삭제]</b> 원하는 상품을 선택해서 삭제할 수 있어요 <br/><br/>
                            <b>[엑셀 다운로드]</b> 원하는 상품의 정보를 엑셀 파일로 내려받을 수 있어요
                                                ">
                                                <img src="/assets/media/icons/tooltip.svg" alt="툴팁"/>
                                            </span>
                                <span className="badge badge-count ms-2">
                    <span id="selectedCounting">0</span>
                    <span>/74건</span>
                </span>
                              </h4>
            </div>

            <div className="border-gray-300 border-bottom border-bottom-solid w-100"></div>

            <div className="row w-100 p-7 pe-0">
              <div className="col-xl-7">
                <div className="d-inline-block w-100px me-2">
                  <select id="sales" name="sales"
                          className="form-select form-select-sm w-auto h-40px select2-hidden-accessible"
                  >
                    <option value="sales">판매상태</option>
                    <option value="resume">판매중</option>
                    <option value="stop">판매중지</option>
                  </select>
                </div>

                <button type="button" data-mall="smartstore" id="changeSaleBtn"
                        className="btn btn-white btn-sm me-2 h-40px">판매상태 변경
                </button>
                <button type="button" data-mall="smartstore"
                        className="goodsSyncSendBtn btn btn-white btn-sm me-2 h-40px" data-cls="send">상품 보내기
                </button>


                <input type="button" className="btn btn-sm btn-white h-40px" id="removeMallGoodsBtn" value="상품 삭제"/>
              </div>

              <div className="col-xl-5 text-end">
                <button className="btn btn-excel btn-sm excelBtn me-2 h-40px">

                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M5 3C3.89543 3 3 3.89543 3 5V17C3 18.1046 3.89543 19 5 19H17C18.1046 19 19 18.1046 19 17V5C19 3.89543 18.1046 3 17 3H5ZM9.89855 10.9889L7 15H9.09868L10.8222 12.1887C10.9029 12.0746 10.9668 11.9524 11.0163 11.8256H11.041C11.0944 11.9548 11.1622 12.0804 11.2404 12.1991L12.9143 15H15L12.2083 10.9668L14.931 7H12.9704L11.4214 9.52742C11.3172 9.70895 11.2169 9.89745 11.1218 10.0906H11.1036C11.0541 9.97193 10.9616 9.79156 10.8287 9.54953L9.38007 7H7.24361L9.89855 10.9889Z"
                          fill="white"></path>
                  </svg>

                  <span className="align-middle">엑셀 다운로드</span>
                </button>

                <div className="d-inline-block">
                  <select name="pageSize" id="pageSize" className="form-select-sm form-select w-auto h-40px me-2">
                    <option value="10">10</option>
                    <option value="30">30</option>
                  </select>
                </div>


              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive h-530px scroll-y border-top">
              <table
                className="table table align-middle table-row-bordered fs-6 gy-2 dataTable text-sm-center min-w-3000 table-layout-fixed ls-065em table-hover"
                id="dataTable" width="100%" cellSpacing="0">
                <thead>
                <tr
                  className="text-gray-400 h-50px align-middle fw-boldest fs-6 text-uppercase gs-0 tr-sticky text-start">
                  <th className="ps-6 fixHeader checkBox">
                    <div className="form-check form-check-custom form-check-sm  form-check-solid">
                      <input type="checkbox"
                       id="allChk"
                       className="form-check-input"/>
                    </div>
                  </th>
                  <th className="fixHeader goodsImg">이미지</th>
                  <th className="fixHeader goodsName">상품명</th>
                  <th className="fixHeader mallGoodsNum">쇼핑몰 상품번호</th>
                  <th className="fixHeader mallId">쇼핑몰 계정</th>
                  <th>상품 고유번호</th>
                  <th>자체관리코드</th>
                  <th>판매상태</th>
                  <th>판매가</th>
                  <th>재고</th>
                  <th>개별 옵션여부</th>
                  <th>할인설정</th>
                  <th>할인금액</th>
                  <th>할인시작일시</th>
                  <th>할인종료일시</th>
                  <th>브랜드</th>
                  <th>묶음배송여부</th>
                  <th>배송조건</th>
                  <th>배송비</th>
                  <th>결제방식</th>
                  <th>반품배송비</th>
                  <th>교환배송비</th>
                  <th>A/S전화번호</th>
                  <th>A/S안내</th>
                  <th>상품등록일</th>
                  <th>최종수정일</th>

                </tr>
                </thead>
                <tbody>
                <tr className="h-60px text-start">
                  <td scope="row" className="ps-6 fixHeader checkBox">
                    <div className="form-check form-check-custom form-check-sm  form-check-solid">
                      <input type="checkbox" name="goodsno[]" value="1409" id="ch1409" data-mall="smartstore"
                             data-status="none" data-product_id="" className="form-check-input"/>
                    </div>
                  </td>
                  <td className="fixHeader goodsImg">
                    <div
                      className="rounded border w-50px h-50px overflow-hidden d-flex align-items-center justify-content-center ls-n">
                      <img className="lazy-img w-100" width="50"
                           onError="this.onerror=null; this.src='/assets/media/icons/duotune/general/none-image.svg'"
                           src="https://i5.sellerhub.co.kr/8/2211/30/12204630070_1239.jpg"/>
                    </div>
                  </td>
                  <td className="text-dark fw-bolder text-start text-truncate fixHeader goodsName"
                      onMouseOver="activateShcProduct(this);" onMouseOut="disabledShcProduct(this)">
                    <span className="d-inline-block w-100 text-truncate" data-bs-toggle="tooltip"
                          data-bs-custom-class="tooltip-dark" data-bs-placement="top" title=""
                          data-bs-original-title="[TEST] 테스트 등록 티셔츠">[TEST] 테스트 등록 티셔츠</span>


                    <button
                      className="btn btn-white border-gray-300 border shadow-xs btn-sm editBtn modi-prod position-absolute start-0 mt-n2 d-none"
                      data-id="1239">수정
                    </button>
                  </td>
                  <td className="mallGoodsNum fixHeader">
                    <input type="hidden" name="required_value[1409]" value=""/>


                  </td>

                  <td className="fixHeader mallId">ncp_1odps2_01</td>

                  <td>
                    1239
                  </td>
                  <td></td>

                  <td className="text-start">
                    <span className="badge badge-primary none">판매대기</span>
                  </td>
                  <td>2,500 원</td>
                  <td>3</td>
                  <td> N</td>
                  <td>
                    Y
                  </td>
                  <td>
                    0%
                  </td>
                  <td>2022-12-29</td>
                  <td>2022-12-29</td>
                  <td></td>
                  <td>
                    가능
                  </td>
                  <td>


                  </td>
                  <td>
                    0
                  </td>
                  <td>


                  </td>
                  <td>
                    0
                  </td>
                  <td>
                    0
                  </td>
                  <td></td>
                  <td>

                  </td>
                  <td>2022-11-30 12:20:47</td>
                  <td>2022-11-30 15:22:13</td>


                </tr>
                <tr className="h-60px text-start">
                  <td scope="row" className="ps-6 fixHeader checkBox">
                    <div className="form-check form-check-custom form-check-sm  form-check-solid">
                      <input type="checkbox" name="goodsno[]" value="1402" id="ch1402" data-mall="smartstore"
                             data-status="none" data-product_id="" className="form-check-input"/>
                    </div>
                  </td>
                  <td className="fixHeader goodsImg">
                    <div
                      className="rounded border w-50px h-50px overflow-hidden d-flex align-items-center justify-content-center ls-n">
                      <img className="lazy-img w-100" width="50"
                           onError="this.onerror=null; this.src='/assets/media/icons/duotune/general/none-image.svg'"
                           src="https://image.onch3.co.kr/img_data/2022/1668093712_img20.jpg"/>
                    </div>
                  </td>
                  <td className="text-dark fw-bolder text-start text-truncate fixHeader goodsName"
                      onMouseOver="activateShcProduct(this);" onMouseOut="disabledShcProduct(this)">
                    <span className="d-inline-block w-100 text-truncate" data-bs-toggle="tooltip"
                          data-bs-custom-class="tooltip-dark" data-bs-placement="top" title=""
                          data-bs-original-title="찰스 여자 오버핏 앨라배마 기모 후드티 500220_D832">찰스 여자 오버핏 앨라배마 기모 후드티 500220_D832</span>


                    <button
                      className="btn btn-white border-gray-300 border shadow-xs btn-sm editBtn modi-prod position-absolute start-0 mt-n2 d-none"
                      data-id="1237">수정
                    </button>
                  </td>
                  <td className="mallGoodsNum fixHeader">
                    <input type="hidden" name="required_value[1402]" value=""/>


                  </td>

                  <td className="fixHeader mallId">ncp_1nvgzv_01</td>

                  <td>
                    1237
                  </td>
                  <td>CH1926070</td>

                  <td className="text-start">
                    <span className="badge badge-primary none">판매대기</span>
                  </td>
                  <td>11,110 원</td>
                  <td>9,999</td>
                  <td> N</td>
                  <td>
                    Y
                  </td>
                  <td>
                    -
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  </td>
                  <td>

                  </td>
                  <td>
                  </td>
                  <td>

                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td></td>
                  <td>
                  </td>
                  <td>2022-11-18 14:19:43</td>
                  <td>2022-11-18 14:19:48</td>


                </tr>
                </tbody>
              </table>
          <div className="card-footer p-4">


            <div className="ml-auto p-1">
              <nav>
                <ul className="pagination">

                  <li className="page-item disabled" aria-disabled="true" aria-label="« 이전">
                    <span className="page-link" aria-hidden="true">‹</span>
                  </li>


                  <li className="page-item active" aria-current="page"><span className="page-link">1</span></li>
                  <li className="page-item"><a className="page-link"
                                               href="https://shcdev.sellerhub.co.kr/product/mall/goods/smartstore?page=2">2</a>
                  </li>
                  <li className="page-item"><a className="page-link"
                                               href="https://shcdev.sellerhub.co.kr/product/mall/goods/smartstore?page=3">3</a>
                  </li>
                  <li className="page-item"><a className="page-link"
                                               href="https://shcdev.sellerhub.co.kr/product/mall/goods/smartstore?page=4">4</a>
                  </li>
                  <li className="page-item"><a className="page-link"
                                               href="https://shcdev.sellerhub.co.kr/product/mall/goods/smartstore?page=5">5</a>
                  </li>
                  <li className="page-item"><a className="page-link"
                                               href="https://shcdev.sellerhub.co.kr/product/mall/goods/smartstore?page=6">6</a>
                  </li>
                  <li className="page-item"><a className="page-link"
                                               href="https://shcdev.sellerhub.co.kr/product/mall/goods/smartstore?page=7">7</a>
                  </li>
                  <li className="page-item"><a className="page-link"
                                               href="https://shcdev.sellerhub.co.kr/product/mall/goods/smartstore?page=8">8</a>
                  </li>


                  <li className="page-item">
                    <a className="page-link" href="https://shcdev.sellerhub.co.kr/product/mall/goods/smartstore?page=2"
                       rel="next" aria-label="다음 »">›</a>
                  </li>
                </ul>
              </nav>
            </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsList;

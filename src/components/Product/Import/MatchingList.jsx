import React from 'react';
import {Table} from "react-bootstrap";

const MatchingList = () => {
  return (
      <div className="scroll-x">
        <div className="d-flex justify-content-betweenx min-w-1000px max-w-1680px">
          <div className="col card rounded border bg-white">
              <div className="card-header align-items-center min-h-20px py-6 px-4 pt-6">
                <div className="d-flex align-items-cetner">
                  <h3 className="fs-6 mb-0">1. 불러온 상품</h3>
                  <span className="cursor-pointer lh-sm ms-1 mt-n05">
                <img src="/assets/media/icons/tooltip.svg" alt="툴팁"/>
            </span>
                  <span className="badge badge-light bg-gray-400 text-black ms-2">0건</span>
                </div>
                <div className="d-flex">

                  <button type="button" id="directTransferBtn"
                          className="btn btn-sm btn-outline btn-outline-dark  d-none ">
                    매칭없이 상품등록
                  </button>

                  <button type="button" id="dpCheckFlow" className="btn btn-sm btn-outline btn-outline-dark "
                         >매칭없이 상품등록
                  </button>
                </div>
              </div>

              <div className="d-flex align-items-center mt-6 px-3">

                <div className="position-relative w-md-250px me-md-2">
                  <input type="text" id="product_mall_name" className="form-control form-control-sm"
                         name="product_mall_name" value="" placeholder="검색어 입력"/>
                </div>
                <div className="d-flex align-items-center">
                  <button id="searchMallBtn" type="button" className="btn btn-sm btn-secondary me-5">검색</button>
                </div>


              </div>

            <div className="table-responsive table-loading mt-6">

              <div className="card-scroll h-450px mb-3">
                <Table id="matchMallProductsTable"
                       className="table table-hover table-sm gy-3 table-row-bordered align-middle gs-2 w-100 ls-06em">
                  <thead>
                  <tr className="text-gray-400 fw-bolder fs-6 text-uppercase gs-0">
                    <th>
                    </th>
                    <th id="head_product_id">상품코드</th>
                    <th id="head_name">상품명</th>
                    <th id="head_sale_price">판매가</th>
                  </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </Table>
              </div>


              <div>
                <div className="table-loading-message">
                  Loading...
                </div>
              </div>
            </div>
          </div>


          <div className="col card rounded border bg-white mx-4">
            <div className="card-header min-h-20px py-6 px-4 d-flex align-items-center justify-content-start">
              <h5 className="fs-6 mb-0 ms-4">상품 매칭영역</h5>
              <span className="cursor-pointer lh-sm ms-1 mt-n05">
                        <img src="/assets/media/icons/tooltip.svg" alt="툴팁"/>
                    </span>
              <span className="badge badge-light bg-gray-400 text-black ms-2"><span className="match-length">0</span> 건</span>
              <div className="ms-auto">
                <button type="button" id="matchAllClear" className="btn btn-sm btn-outline btn-outline-dark d-none"
                        >전체 매칭취소
                </button>
                <button type="button" id="matchTranserBtn"
                        className="btn btn-sm btn-primary btn-color-white ms-3 disabled">매칭완료
                </button>
              </div>
            </div>

            <div className="card-body card-scroll h-600px p-6 py-4">
              <div id="matchStagingSection" className="row d-flex justify-content-between position-relative">

                <p className="position-absolute z-index-n1 fw-bolder mt-10 text-center">매칭할 상품을 선택해 주세요.</p>

              </div>
            </div>
          </div>

          <div className="col card rounded border bg-white">
            <div>
              <div className="card-header align-items-center min-h-20px py-6 px-4 pt-6">
                <div className="d-flex align-items-center">
                  <h3 className="fs-6 mb-0">2. SHC 상품</h3>
                  <span className="cursor-pointer lh-sm ms-1 mt-n05">
                <img src="/assets/media/icons/tooltip.svg" alt="툴팁"/>
            </span>
                  <span className="badge badge-light bg-gray-400 text-black ms-2">717건</span>
                </div>
                <div className="d-flex">
                  <span className="btn btn-sm px-0">&nbsp;</span>
                </div>
              </div>

              <div className="d-flex align-items-center mt-6 px-3">
                <div className="position-relative w-md-250px me-md-2">
                  <input type="text" id="product_name" className="form-control form-control-sm" name="product_name"
                         value="" placeholder="검색어입력"/>
                </div>
                <div className="d-flex align-items-center">
                  <button id="searchBtn" type="button" className="btn btn-sm btn-secondary me-5">검색</button>
                </div>
              </div>

              <div className="table-responsive table-loading mt-6">
                <div className="card-scroll h-450px mb-3">
                  <Table id="shc_product_list"
                         className="table table-hover table-sm gy-3 table-row-bordered align-middle gs-2 w-100 ls-06em">
                    <thead>
                    <tr className="text-gray-400 fw-bolder fs-6 text-uppercase gs-0">
                      <th>상품명</th>
                      <th>상품고유번호</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="shc_product_tr 18
                         text-gray-600
                        ">
                      <td className="position-relative">
                        <button type="button"
                                className="position-absolute start-0 btn add-shc-product btn-sm btn-icon btn-white btn-active-white h-25px w-auto px-3 ms-4"
                                >
                                <span className="svg-icon svg-icon-3 m-0 toggle-off fw-bolder text-gray-800">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.60001 11H21C21.6 11 22 11.4 22 12C22 12.6 21.6 13 21 13H9.60001V11Z"
                                              fill="currentColor"></path>
                                        <path opacity="0.3" d="M9.6 20V4L2.3 11.3C1.9 11.7 1.9 12.3 2.3 12.7L9.6 20Z"
                                              fill="currentColor"></path>
                                    </svg>
                                    상품매칭
                                </span>
                        </button>
                        <span className="fs-7 d-inline-block text-truncate text-black w-200px">테스트상품</span>
                      </td>
                      <td className="text-center">
                        <span className="text-primary">18</span>
                      </td>

                    </tr>
                  </tbody>
                  </Table>
                </div>

                <div className="mx-3">
                  <button id="loadMoreBtn" className="btn btn-white">더보기</button>
                </div>

                <div>
                  <div className="table-loading-message">
                    Loading...
                  </div>
                </div>
              </div>

            </div>
            </div>

      </div>
    </div>
  );

};

export default MatchingList;

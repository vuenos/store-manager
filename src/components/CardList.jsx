import React from "react";
import { Card } from "react-bootstrap";

const CardList = () => {
    return(        
        <Card className="my-5">

            <Card.Header className="card-header p-0 border-bottom-0">
                                                    
                <div className="row p-7">
                    <h4 className="mb-0 d-flex">
                        상품 목록
                    </h4>
                </div>

                <div className="border-gray-300 border-bottom border-bottom-solid w-100"></div>

                <div className="row w-100 p-7 pe-0">

                    <div className="col-xl-7">										
                        
                        <button id="" className="btn btn-white btn-sm me-2 h-40px">버튼1</button>

                        <button id="" className="btn btn-white btn-sm me-2 h-40px">버튼2</button>											

                    </div>

                    <div className="col-xl-5 my-1 text-end">

                        <button className="btn btn-excel btn-sm excelBtn me-2 h-40px" data-cls="all">
                            <span className="align-middle">엑셀 다운로드</span>
                        </button>

                        <div className="d-inline-block w-auto">
                            <select name="pageSize" id="pageSize" className="form-select-sm form-select me-2 h-40px select2-hidden-accessible" data-control="select2" data-hide-search="true" data-select2-id="select2-data-pageSize" aria-hidden="true">
                                <option value="10" data-select2-id="select2-data-8-obow">10</option>
                                <option value="30">30</option>
                            </select>
                        </div>

                        

                    </div>

                </div>
            </Card.Header>
            
            <Card.Body className="card-body p-0">
                <div className="table-responsive h-400px scroll-y border-top">
                    <table className="table table align-middle table-row-bordered fs-6 gy-2 dataTable text-start min-w-1900 ls-065em table-layout-fixed table-hover" id="dataTable" width="100%">

                        <thead>
                            <tr className="text-gray-400 fw-boldest fs-6 h-50px align-middle text-uppercase gs-0 tr-sticky">
                                <th className="ps-6 fixHeader checkBox"><div className="form-check form-check-custom form-check-solid form-check-sm"><input type="checkbox" id="allChk" data-taget="goodsno" className="form-check-input" /></div></th>
                                <th className="fixHeader goodsImg">이미지</th>
                                <th className="fixHeader mall">쇼핑몰</th>
                                <th className="fixHeader goodsName">상품명
                                </th><th className="fixHeader goodsNum">상품 고유번호</th>
                                <th>자체관리코드</th>
                                <th id="goods-state">판매상태</th>
                                <th>판매가</th>
                                <th>옵션여부</th>
                                <th>상품정보고시</th>
                                <th>소비자가</th>
                                <th>매입가(공급가)</th>
                                <th>브랜드</th>
                                <th>모델명</th>
                                <th>제조사</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="h-60px">
                                <td scope="row" className="ps-6 fixHeader checkBox">
                                    <div className="form-check form-check-custom form-check-solid form-check-sm">
                                        <input type="checkbox" name="goodsno[]" value="1227" id="ch1227" data-status="none" className="form-check-input" />
                                    </div>
                                </td>
                                <td className="fixHeader goodsImg">
                                    <div className="rounded border w-50px h-50px overflow-hidden d-flex align-items-center justify-content-center ls-n">
                                    </div>
                                </td>
                                <td className="fixHeader mall">
                                    <div className="d-flex flex-wrap ms-2 ">
                                        스토어
                                    </div>
                                </td>
                                <td className="fixHeader goodsName text-dark fw-bolder text-start text-truncate py-4">
                                    <span className="d-inline-block w-100 text-truncate" data-bs-toggle="tooltip" data-bs-custom-className="tooltip-dark" data-bs-placement="top" title="" data-bs-original-title="ㅅㄷㄴㅅ">ㅅㄷㄴㅅ</span>
                                </td>
                                <td className="fixHeader goodsNum">
                                    1227
                                </td>
                                <td>VRKD123123</td>
                                <td headers="goods-state" className="text-start"><span className="badge badge-secondary none">판매대기</span></td>
                                <td>
                                        10,000,000
                                </td>
                                <td> N </td>
                                <td>
                                    의류
                                </td>
                                <td>0</td>
                                <td>0</td>
                                <td>브랜드</td>
                                <td>모델명</td>
                                <td>제조사</td>

                            </tr>

                        </tbody>
                    </table>
                </div>
            </Card.Body>

            <Card.Footer className="card-footer p-4">
                <div className="ml-auto p-1">
                    <nav>
                        <ul className="pagination">                
                            <li className="page-item disabled" aria-disabled="true" aria-label="« 이전">
                                <span className="page-link" aria-hidden="true">‹</span>
                            </li>	
                            <li className="page-item active" aria-current="page">
                                <span className="page-link">1</span>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">2</a>
                            </li>																	
                            <li className="page-item">
                                <a className="page-link" href="#">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">4</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">5</a>
                            </li>	
                            <li className="page-item">
                                <a className="page-link" href="#" rel="next" aria-label="다음 »">›</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Card.Footer>

        </Card>
    )
};

export default CardList;
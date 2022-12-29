import React from 'react';
import {Table, Button, Card, Row, Col, Form, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import StateTab from 'components/Order/StateTab';
import Search from 'components/Order/Search'


const OrderList = () => {

    const data =[
        {
            index: 1,
            icon:"order-pay",
            title:"결제완료",
            count:12,
            subject:"payed",         
        },
        {
            index: 2,
            icon:"order-ready",
            title:"배송준비중",
            count:397,
            subject:"delivery_waiting"
        },
        {
            index: 3,
            icon:"order-truck",
            title:"배송중",
            count:2,
            subject:"delivering"
        },
        {
            index: 4,
            icon:"order-delivery",
            title:"배송완료",
            count:6,
            subject:"delivered"          
        },        
        {
            index: 5,
            icon:"order-confirm",
            title:"구매확정",
            count:12,
            subject:"purchase_decided"
        }
    ];

    const search = [
        {
            index: 1,
            title: '기간검색'
        },
        {
            index: 2,
            title: '연동몰/계정'
        }
    ];


    return (

        <div>      

            <StateTab 
                data={data}
            />

            <Search 
                search={search}
            />

            <Card className="mb-4 my-5">

                <Card.Header className="p-0 border-bottom-0">
                <Row className='p-5 ps-7'>
                    <Col>
                    <Card.Title as="h4">
                        주문목록
                        <OverlayTrigger
                        placement="bottom"
                        overlay = {
                            <Tooltip>
                            주문목록 ToolTip
                            </Tooltip>
                        }
                        >
                        <span className="cursor-pointer lh-sm ms-1 mt-n05"><img src="/assets/media/icons/tooltip.svg" alt="툴팁" /></span>
                        </OverlayTrigger>
                        <Badge bg="default" className="badge-count ms-2">
                        0 / 00
                        </Badge>
                    </Card.Title>
                    </Col>
                </Row>

                <div className="border-gray-300 border-bottom border-bottom-solid w-100"></div>

                <Row className="w-100 p-7 pe-0">
                    <Col className="col-xl-7">
                        <Button type="button" variant="white" className="btn-white btn-sm me-2 h-40px">주문확인</Button>                    
                        <Button type="button" variant="white" className="btn-sm btn-white h-40px">취소요청</Button>
                    </Col>
                    
                    <Col className="col-xl-5 my-1 text-end">              
                    
                        <Button variant="excel" className="btn-excel btn-sm excelBtn me-2 h-40px">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V17C3 18.1046 3.89543 19 5 19H17C18.1046 19 19 18.1046 19 17V5C19 3.89543 18.1046 3 17 3H5ZM9.89855 10.9889L7 15H9.09868L10.8222 12.1887C10.9029 12.0746 10.9668 11.9524 11.0163 11.8256H11.041C11.0944 11.9548 11.1622 12.0804 11.2404 12.1991L12.9143 15H15L12.2083 10.9668L14.931 7H12.9704L11.4214 9.52742C11.3172 9.70895 11.2169 9.89745 11.1218 10.0906H11.1036C11.0541 9.97193 10.9616 9.79156 10.8287 9.54953L9.38007 7H7.24361L9.89855 10.9889Z" fill="white"></path>
                            </svg>
                            <span className="align-middle">엑셀 다운로드</span>
                        </Button>

                        <div className="d-inline-block w-auto me-2">
                            <Form.Select className="form-select-sm form-select me-2 h-40px select2-hidden-accessible" aria-label="조회 목록 수">
                                <option value="30">30개씩</option>
                                <option value="50">50개씩</option>
                                <option value="70">70개씩</option>
                                <option value="100">100개씩</option>
                            </Form.Select>
                        </div>

                        <Button type="button" variant="white" className="btn-sm btn-white h-40px">목록 설정</Button>
                    
                    </Col>
                </Row>
                </Card.Header>

                <Card.Body className="p-0">
                <div className="table-responsive h-530px scroll-y border-top">
                    <Table className="table align-middle table-row-bordered fs-6 gy-2 dataTable text-start min-w-5000 ls-065em table-layout-fixed table-hover">
                        <thead>
                            <tr className="text-gray-400 fw-boldest fs-6 h-50px align-middle text-uppercase gs-0 tr-sticky">
                                <th className="ps-6 fixHeader checkBox">
                                    <div className="form-check form-check-custom form-check-solid form-check-sm">
                                        <Form.Check
                                            type="checkbox"
                                            id="allCheck"
                                            name="allCheck"
                                            className="form-check-input"
                                        />
                                    </div>
                                </th>
                                <th className="fixHeader orderStatus">주문상태</th>
                                <th className="fixHeader mallId">쇼핑몰 계정</th>
                                <th className="fixHeader productName">상품명</th>
                                <th className="fixHeader receiverName">수신인 이름</th>
                                <th>택배사</th>
                                <th>송장번호</th>
                                <th>주문번호</th>
                                <th>상품주문번호</th>
                                <th>상품번호</th>
                                <th>상품옵션</th>
                                <th>수량</th>
                                <th>판매금액</th>
                                <th>총 판매금액</th>
                                <th>할인 금액</th>
                                <th>결제 금액</th>
                                <th>배송비</th>
                                <th>지역추가배송비</th>
                                <th>수신인 전화번호1</th>
                                <th>수신인 전화번호2</th>
                                <th>우편번호</th>
                                <th>수신인 주소</th>
                                <th>주문자명</th>
                                <th>주문자 전화번호1</th>
                                <th>배송메모</th>
                                <th>배송예정일</th>
                                <th>배송비 지불방법</th>
                                <th>배송비 유형</th>
                                <th>배송비 묶음번호</th>
                                <th>수집일시</th>
                                <th>결제일시</th>
                                <th>주문일시</th>
                                <th>최종주문상태 변경일시</th>
                                <th>자체상품코드</th>
                                <th>상품옵션코드</th>
                                <th>배송방법</th>
                                <th>온채널 출고지시 여부</th>                
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="h-60px text-start">
                                <td className="fixHeader checkBox">
                                    <div className="form-check form-check-custom form-check-sm form-check-solid ms-6 me-2">
                                        <input type="checkbox" name="id[]" className="form-check-input" value="1814" />
                                    </div>
                                </td>
                                <td className="fixHeader orderStatus">
                                    <span className="badge badge-secondary PAYED">결제완료</span>
                                </td>
                                <td className="fixHeader mallId">
                                    <img src="/assets/media/icons/smartstore.png" alt="" width="24" onError="this.onerror=null; this.src='/assets/media/icons/duotune/general/none-image.svg'" />
                                    ncp_1npum3_01
                                </td>
                                <td className="fixHeader productName">상품명</td>
                                <td className="fixHeader receiverName">수신인 이름</td>
                                <td>택배사</td>
                                <td>송장번호</td>
                                <td>주문번호</td>
                                <td>상품주문번호</td>
                                <td>상품번호</td>
                                <td>상품옵션</td>
                                <td>수량</td>
                                <td>판매금액</td>
                                <td>총 판매금액</td>
                                <td>할인 금액</td>
                                <td>결제 금액</td>
                                <td>배송비</td>
                                <td>지역추가배송비</td>
                                <td>수신인 전화번호1</td>
                                <td>수신인 전화번호2</td>
                                <td>우편번호</td>
                                <td>수신인 주소</td>
                                <td>주문자명</td>
                                <td>주문자 전화번호1</td>
                                <td>배송메모</td>
                                <td>배송예정일</td>
                                <td>배송비 지불방법</td>
                                <td>배송비 유형</td>
                                <td>배송비 묶음번호</td>
                                <td>수집일시</td>
                                <td>결제일시</td>
                                <td>주문일시</td>
                                <td>최종주문상태 변경일시</td>
                                <td>자체상품코드</td>
                                <td>상품옵션코드</td>
                                <td>배송방법</td>
                                <td>온채널 출고지시 여부</td> 
                            </tr>
                        </tbody>
                    </Table>
                </div>
                </Card.Body>

                <Card.Footer>
                
                </Card.Footer>

            </Card>

        </div>

    )
}

export default OrderList;
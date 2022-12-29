import Search from 'components/Order/Search';
import React from 'react';
import {Table, Button, Card, Row, Col, Form, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";

const QnaList = () => {

  const search = [
    {
      index: 1,
      title: '문의접수일'
    },
    {
      index: 2,
      title: '연동몰/계정'
    },
    {
      index: 3,
      title: '처리상태'
    }
];

  return (
    <>
      <Search 
        search={search}
      />

      <Card className="mb-4 my-5">

        <Card.Header className="p-0 border-bottom-0">
          <Row className='p-5 ps-7'>
            <Col>
              <Card.Title as="h4">
                CS 목록
                <OverlayTrigger
                  placement="bottom"
                  overlay = {
                    <Tooltip>
                      새로 가져오거나 동기화한 문의를 확인하고, 답변을 전송할 수 있어요
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
              <Button type="button" variant="white" className="btn-white btn-sm me-2 h-40px">문의 가져오기</Button>
              <Button type="button" variant="white" className="btn-white btn-sm me-2 h-40px">문의 동기화</Button>
              <Button type="button" variant="white" className="btn-sm btn-white h-40px">문의전송</Button>
            </Col>
            <Col className="col-xl-5 my-1 text-end">              
              <div className="d-inline-block w-auto">
                <Form.Select className="form-select-sm form-select me-2 h-40px select2-hidden-accessible" aria-label="조회 목록 수">
                  <option value="10">10개씩</option>
                  <option value="10">30개씩</option>
                </Form.Select>
              </div>
            </Col>
          </Row>
        </Card.Header>

        <Card.Body className="p-0">
          <div className="table-responsive h-530px scroll-y border-top">
            <Table className="table align-middle table-row-bordered fs-6 gy-2 dataTable text-start min-w-1500 ls-065em table-layout-fixed table-hover only-checkbox">
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
                  <th width="80">번호</th>
                  <th>문의상태</th>
                  <th width="80">쇼핑몰</th>
                  <th>쇼핑몰 계정</th>
                  <th width="150">접수일</th>
                  <th>상품번호</th>
                  <th width="200">주문번호</th>
                  <th>문의유형</th>
                  <th width="250">문의제목</th>
                  <th width="200">답변일</th>                 
                </tr>
              </thead>
              <tbody>
                <tr className="h-60px text-start">
                  <td className="ps-6 fixHeader checkBox">
                      <div className="form-check form-check-custom form-check-sm form-check-solid"><input type="checkbox" name="sno[]" value="231" className="form-check-input" /></div>
                  </td>
                  <td className="t_center">89</td>
                  <td className="status">
                      <span className="badge badge-secondary st1">전송완료</span>
                  </td>
                  <td>
                      <img src="/assets/media/icons/smartstore.png" alt="" width="24" onError="this.onerror=null; this.src='/assets/media/icons/duotune/general/none-image.svg'" />
                  </td>

                  <td>
                      ncp_1npum3_01
                  </td>
                  <td>2022-12-04 00:00:00</td>
                  <td>5108152755</td>
                  <td></td>
                  <td>상품</td>
                  <td className="ta_left text-start">
                      <span className="d-inline-block text-truncate w-200px align-middle" data-bs-toggle="tooltip" data-bs-custom-className="tooltip-dark" data-bs-placement="top" title="" data-bs-original-title="튀김 요리에 사용해도 되나요? 발연점은 대략 몇 도인가요?">
                          <a id="kt_drawer_example_basic_button" className="showQnaDetail text-secondary fw-boldest cursor-pointer" data-sno="231">튀김 요리에 사용해도 되나요? 발연점은 대략 몇 도인가요?</a>
                      </span>
                  </td>
                  <td></td>
              </tr>
              </tbody>
            </Table>
          </div>
        </Card.Body>

        <Card.Footer>
          
        </Card.Footer>

      </Card>
    </>
  )
}

export default QnaList;
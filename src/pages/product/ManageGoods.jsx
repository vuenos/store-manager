import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Table, Button, Card, Row, Col, Form, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import noImage from '../../assets/images/none-image.svg';
import Paginate from "../../components/Paginate";
import {useParams} from "react-router-dom";

const ManageGoods = () => {
  const [goods, setGoods] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState();
  // const [searchParams] = useSearchParams();
  const params = useParams();
  const pageNumber = params.pageNumber || 1;
  const keyword = params.keyword;
  // const pageNumber = searchParams.get('page');
  // const keyword = searchParams.get('keyword');

  const handleImgError = (e) => {
    e.target.src = noImage;
  };

  const getGoods = async (keyword = "", pageNumber = "") => {
    try {
      const { data } = await axios.get(`http://localhost:5050/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);
      console.log(data);
      setGoods(data?.products);
      setPage(data?.page)
      setPages(data?.pages)
    } catch (error) {
      //error
      console.error(error)
    }
  }

  useEffect(() => {
    getGoods(keyword, pageNumber);
  }, [keyword, pageNumber]);


  return (
    <Card>
      <Card.Header className="p-0 border-bottom-0">
        <Row className="p-7">
          <Card.Title as="h4" className="mb-0 d-flex">
            상품 목록
            <OverlayTrigger
              placement="bottom"
              overlay = {
                <Tooltip>
                  Tooltips
                </Tooltip>
              }
            >
              <span className="cursor-pointer lh-sm ms-1 mt-n05"><img src="/assets/media/icons/tooltip.svg" alt="툴팁" /></span>
            </OverlayTrigger>
            <Badge bg="default" className="badge-count ms-2">
              0 / 000
            </Badge>
          </Card.Title>
        </Row>

        <div className="border-gray-300 border-bottom border-bottom-solid w-100"></div>

        <Row className="w-100 p-7 pe-0">
          <Col className="col-xl-7">
            <Button type="button" variant="white" className="btn-white btn-sm me-2 h-40px">쇼핑몰 계정 추가</Button>
            <Button type="button" variant="white" className="btn-white btn-sm me-2 h-40px">상품 합치기</Button>
            <Button type="button" variant="white" className="btn-sm btn-white h-40px">상품 삭제</Button>
          </Col>
          <Col className="col-xl-5 my-1 text-end">
            <Button variant="excel" className="btn-excel btn-sm excelBtn me-2 h-40px">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V17C3 18.1046 3.89543 19 5 19H17C18.1046 19 19 18.1046 19 17V5C19 3.89543 18.1046 3 17 3H5ZM9.89855 10.9889L7 15H9.09868L10.8222 12.1887C10.9029 12.0746 10.9668 11.9524 11.0163 11.8256H11.041C11.0944 11.9548 11.1622 12.0804 11.2404 12.1991L12.9143 15H15L12.2083 10.9668L14.931 7H12.9704L11.4214 9.52742C11.3172 9.70895 11.2169 9.89745 11.1218 10.0906H11.1036C11.0541 9.97193 10.9616 9.79156 10.8287 9.54953L9.38007 7H7.24361L9.89855 10.9889Z" fill="white"></path>
              </svg>
              <span className="align-middle">엑셀 다운로드</span>
            </Button>

            <div className="d-inline-block w-auto">
              <Form.Select className="form-select-sm form-select me-2 h-40px select2-hidden-accessible" aria-label="조회 목록 수">
                <option value="10">10</option>
                <option value="10">30</option>
              </Form.Select>
            </div>
          </Col>
        </Row>
      </Card.Header>

      <Card.Body className="p-0">
        <div className="table-responsive h-530px scroll-y border-top">
          <Table className="table align-middle table-row-bordered fs-6 gy-2 dataTable text-start min-w-1900 ls-065em table-layout-fixed table-hover">
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
                <th className="fixHeader goodsImg">이미지</th>
                <th className="fixHeader mall">쇼핑몰</th>
                <th className="fixHeader goodsName">상품명</th>
                <th className="fixHeader goodsNum">상품 고유 번호</th>
                <th>자체관리코드</th>
                <th>판매상태</th>
                <th>판매가</th>
                <th>옵션여부</th>
                <th>상품정보고시</th>
                <th>소비자가</th>
                <th>매입가(공급가)</th>
                <th>브랜드</th>
                <th>모댈명</th>
                <th>제조사</th>
              </tr>
            </thead>
            <tbody>
            {goods && goods.map((good, index) => (
              <tr className="h-60px" key={index} id={`goods-${index}`}>
                <td className="ps-6 fixHeader checkBox">
                  <div className="form-check form-check-custom form-check-solid form-check-sm">
                    <Form.Check
                      type="checkbox"
                      id={good._id}
                      name="goodsCheck"
                      className="form-check-input"
                    />
                  </div>
                </td>
                <td className="fixHeader goodsImg">
                  <div className="rounded border w-50px h-50px overflow-hidden d-flex align-items-center justify-content-center ls-n">
                    <img src={good.image} alt={good.name} onError={handleImgError} className="lazy-img w-100" />
                  </div>
                </td>
                <td className="fixHeader mall">{good.mall}</td>
                <td className="fixHeader goodsName text-dark fw-bolder text-start text-truncate py-4">
                  <span className="d-inline-block w-100 text-truncate">{good.name}</span>
                </td>
                <td className="fixHeader goodsNum">{good._id}</td>
                <td>{good.manageCode}</td>
                <td className="text-start">{good.salesState}</td>
                <td>{good.price}</td>
                <td>{good.option}</td>
                <td>{good.prdInfo}</td>
                <td>{good.retailPrice}</td>
                <td>{good.supplyPrice}</td>
                <td>{good.brand}</td>
                <td>{good.modelName}</td>
                <td>{good.manufacture}</td>
              </tr>
            )).sort((a, b) => b.key - a.key)}
            </tbody>
          </Table>
        </div>
      </Card.Body>
      <Card.Footer>
        <Paginate pages={pages} page={page} />
      </Card.Footer>
    </Card>
  )
}
export default ManageGoods;
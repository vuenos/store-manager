import React from 'react';
import {Card} from "react-bootstrap";

const SearchOptions = () => {
  return (
    <Card className="card-header px-7 py-5 min-h-auto border-bottom-0 flex-nowrap">
      <Card.Header className="row align-items-center w-100">
          <div className="col-xl-1">
            <div className="fs-6 fw-boldest mt-3 mb-3">검색어</div>
          </div>
        <div className="col-lg-2 ms-2">
          <div className="fs-6 fw-boldest mt-3 mb-3">검색어</div>
        </div>
      </Card.Header>
      <Card.Body>
        <button className="btn btn-white btn-sm me-3 h-40px" id="orderConfirmBtn">주문확인</button>
        <button className="btn btn-white btn-sm h-40px" id="orderCancelBtn">취소요청</button>
      </Card.Body>
    </Card>
  );
};

export default SearchOptions;

import React from 'react';
import {Card, Col} from "react-bootstrap";
import {CardBody, CardHeader} from "./index";

const PayAmtTotalCard = () => {
  return (
    <Col className="col-lg-6 mb-4">
      <Card className="card-flush mb-1">
        <CardHeader
          title="수집된 주문의 결제금액 합계"
        />
        <CardBody>

        </CardBody>
      </Card>
    </Col>
  )
}
export default PayAmtTotalCard;
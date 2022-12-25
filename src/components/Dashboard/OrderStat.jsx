import React from 'react';
import { Col, Card } from "react-bootstrap";
import { CardHeader, CardBody } from "./index";

const OrderStat = () => {
  return (
    <Col className="col-lg-6 mb-4">
      <Card className="card-flush mb-1">
        <CardHeader
          title="주문 통계"
        />
        <CardBody>

        </CardBody>
      </Card>
    </Col>
  )
}
export default OrderStat;
import React from 'react';
import { Col, Card } from "react-bootstrap";
import { CardHeader, CardBody } from "./index";

const OrderDeliveryCard = () => {
  return (
    <Col className="col-xl-3 col-md-6 mb-4">
      <Card className="card-flush h-100">
        <CardHeader
          title="주문/배송"
        />
        <CardBody>
          <ul>
            <li></li>
          </ul>
        </CardBody>
      </Card>
    </Col>
  )
}
export default OrderDeliveryCard;
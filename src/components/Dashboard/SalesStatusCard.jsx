import React from 'react';
import {Card, Col} from "react-bootstrap";
import { CardHeader, CardBody } from "./index";

const SalesStatusCard = () => {
  return (
    <Col className="col-xl-3 col-md-6 mb-4">
      <Card className="card-flush h-100">
        <CardHeader
          title="상품 판매 현황"
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
export default SalesStatusCard;
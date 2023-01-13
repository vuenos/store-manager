import React, { useState } from 'react';
import { Col, Card, Spin } from "antd";

const OrderDeliveryCard = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Col span={6} xs={24} md={12} lg={6}>
      <Card
          title="주문/배송"
          extra={<span className="text-gray-600">최근 1개월</span>}
          loading={loading}
        >
          <ul>
            <li></li>
          </ul>
      </Card>
    </Col>
  )
}
export default OrderDeliveryCard;
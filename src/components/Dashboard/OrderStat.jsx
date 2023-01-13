import React, {useState} from 'react';
import { Col, Card } from "antd";

const OrderStat = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Col span={12} xs={24} md={12}>
      <Card
        title="주문 통계"
        extra={<span className="text-gray-600">최근 1개월</span>}
        loading={loading}
      >
      </Card>
    </Col>
  )
}
export default OrderStat;
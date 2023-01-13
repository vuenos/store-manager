import React, {useState} from 'react';
import { Card, Col } from "antd";

const PayAmtTotalCard = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Col span={12} xs={24} md={12}>
      <Card
        title="수집된 주문의 결제금액 합계"
        extra={<span className="text-gray-600">최근 1개월</span>}
        loading={loading}
      >
      </Card>
    </Col>
  )
}
export default PayAmtTotalCard;
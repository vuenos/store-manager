import React, {useState} from 'react';
import { Card, Col } from "antd";

const ClaimCard = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Col span={6} xs={24} md={12} lg={6}>
      <Card
        title="클레임"
        extra={<span className="text-gray-600">전체 기간</span>}
        loading={loading}
      >
          <ul>
            <li></li>
          </ul>
      </Card>
    </Col>
  )
}
export default ClaimCard;
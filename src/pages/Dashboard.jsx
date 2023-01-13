import React from 'react';
import { Row } from 'antd';
import { OrderDeliveryCard, ClaimCard, InquiryCard, SalesStatusCard, OrderStat, PayAmtTotalCard } from '../components/Dashboard'
import PropTypes from 'prop-types';


const Dashboard = () => {

  Dashboard.propTypes = {
    title: PropTypes.string,
  }

  return (
    <>
      <Row gutter={[24, 24]}>
        <OrderDeliveryCard />
        <ClaimCard />
        <InquiryCard />
        <SalesStatusCard />
      </Row>

      <Row gutter={[24, 24]} className="mt-8">
        <OrderStat />
        <PayAmtTotalCard />
      </Row>
    </>
  )
}
export default Dashboard;
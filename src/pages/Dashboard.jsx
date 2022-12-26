import React from 'react';
import { Row } from 'react-bootstrap';
import { OrderDeliveryCard, ClaimCard, InquiryCard, SalesStatusCard, OrderStat, PayAmtTotalCard } from '../components/Dashboard'
import PropTypes from 'prop-types';


const Dashboard = () => {

  Dashboard.propTypes = {
    title: PropTypes.string,
  }

  return (
    <>
      <Row>
        <OrderDeliveryCard />
        <ClaimCard />
        <InquiryCard />
        <SalesStatusCard />
      </Row>

      <Row className="mt-3">
        <OrderStat />
        <PayAmtTotalCard />
      </Row>
    </>
  )
}
export default Dashboard;
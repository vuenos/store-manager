import React from 'react';
import { Card, Tooltip } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import PropTypes from 'prop-types';

const CardHeader = ({ title }) => {
  CardHeader.propTypes = {
    title: PropTypes.any,
  }

  return (
    <Card.Header className="px-4 py-5 min-h-20px d-flex align-items-center justify-content-start ls-06e cursor-pointer">
      <Card.Title className="fs-4 m-0 fw-boldest">{title}</Card.Title>

    </Card.Header>
  )
}
export default CardHeader;
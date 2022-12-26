import React from 'react';
import {Card} from "react-bootstrap";
import PropTypes from 'prop-types';

const CardBody = ({ children }) => {
  CardBody.propTypes = {
    children: PropTypes.any
  }

  return (
    <Card.Body className="border-top p-4 pt-1 ls-06em">
      {children}
    </Card.Body>
  )
}
export default CardBody;
import Search from 'components/Search/Search';
import React from 'react';
import { Card, Row, Col } from "react-bootstrap";

const QnaList = () => {

  const search = [
    {
      index: 1,
      title: '문의접수일'
    },
    {
      index: 2,
      title: '연동몰/계정'
    },
    {
      index: 3,
      title: '처리상태'
    }
];

  return (
    <>
      <Search 
        search={search}
      />

      <Card className="mb-4 my-5">
        <Card.Header>
          <Row>
            <Col>
              <Card.Title as="h4">CS 목록</Card.Title>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>

        </Card.Body>
        <Card.Footer>

        </Card.Footer>
      </Card>
    </>
  )
}

export default QnaList;
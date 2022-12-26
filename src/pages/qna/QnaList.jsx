import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Table } from "react-bootstrap";
import apiClient from "../../services/api";
import { useQuery } from "react-query";
import {getQnaList} from "../../api";

const QnaList = () => {
  // const [qnas, setQnas] = useState([]);
  //
  // const getQnaList = async (token) => {
  //   if (!token) {
  //     token = localStorage.getItem('access_token');
  //   }
  //   try {
  //     const { data } = await apiClient.get('sellers/products', {
  //       headers: {
  //         Authorization: "Bearer " + token
  //       }
  //     });
  //     setQnas(data.data);
  //     console.log(data.data)
  //   } catch (error) {
  //     //
  //
  //   }
  // }
  //
  // useEffect(() => {
  //   getQnaList();
  // }, []);

  const {
    isLoading,
    isError,
    error,
    data: qnas
  } = useQuery('getQnaList', getQnaList,  {
    refetchOnWindowFocus: false,
    onSuccess: data => {
      console.log(data);
    },
    onError: e => {
      // API 연결이 실패한 경우에 호출됨
      console.log(e.message);
    }

  })


  return (
    <Card className="mb-4 my-5">
      <Card.Header className="p-0 border-bottom-0">
        <Row className="p-7 w-100">
          <Col className="col-12">
            <Card.Title as="h4" className="mb-0 d-inline-block align-middle">CS 목록</Card.Title>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="p-0">
        <div className="table-responsive  h-530px scroll-y px-0 border-top">
          <Table className="align-middle table-row-bordered fs-6 gy-2 dataTable text-sm-center min-w-1000px ls-065em table-hover">
            <thead>
              <tr>
                <th></th>
                <th>번호</th>
              </tr>
            </thead>
            <tbody>
            {isLoading && <tr><td colSpan="2">Loading...</td></tr>}
            {isError && <tr><td colSpan="2">{error.message}</td></tr>}

            {qnas && qnas.map((qna) => (
              <tr key={qna.uuid}>
                <td></td>
                <td>{qna.uuid}</td>
              </tr>
              ))
            }
            </tbody>
          </Table>
        </div>
      </Card.Body>
      <Card.Footer>

      </Card.Footer>
    </Card>
  )
}
export default QnaList;
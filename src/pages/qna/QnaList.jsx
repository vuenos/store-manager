import React, { useState } from 'react';
import { Card, Row, Col, Table, Spinner, Button } from "react-bootstrap";
import { getQnaList } from "../../api";
// import apiClient from "../../services/api";
import { useQuery } from "react-query";
import Search from "../../components/Order/Search"

const QnaList = () => {
  // const [qnas, setQnas] = useState([]);
  //
  // const getQnaList = async (token) => {
  //   if (!token) {
  //     token = localStorage.getItem('access_token');
  //   }
  //   try {
  //     const { data } = await apiClient.get('/sellers/products', {
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

  const [page, setPage] = useState(0);

  /**
   * useQuery 파라미터
   * @param {array|string} queryKey : queryKey 가 변경되면 useQuery 에서 data 가 업데이트됨
   * @param {function} queryFn : 데이터 호출 함수 받음.
   * @param {boolean} keepPreviousData : 데이터가 refetch 될때 이전 데이터 유지 여부 (true, false)
   */
  const {
    isLoading,
    isError,
    error,
    data: qnas,
    isFetching,
    isPreviousData,
  } = useQuery(  {
    queryKey: ['getQnaList', page],
    queryFn: () => getQnaList(page),
    keepPreviousData : true,
    onSuccess: data => {
      console.log(data);
    },
    onError: e => {
      // API 연결이 실패한 경우에 호출됨
      console.log(e.message);
    }
  });

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
      <Search search={search} />

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
              {isLoading && <tr><td colSpan="2"><Spinner animation="border" /></td></tr>}
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
          <div>
            <span>Current Page: {page + 1}</span>
            <Button
              onClick={() => setPage(old => Math.max(old - 1, 0))}
              disabled={page === 0}
            >
              Prev
            </Button>{' '}
            <Button
              onClick={() => {
                if (!isPreviousData && qnas.hashMore) {
                  setPage(old => old + 1)
                }
              }}
              disabled={isPreviousData || !qnas?.hasMore}
            >
              Next
            </Button>
            {isFetching ? <Spinner animation="border" /> : null}{' '}
          </div>
        </Card.Footer>
      </Card>
    </>
  )
}

export default QnaList;
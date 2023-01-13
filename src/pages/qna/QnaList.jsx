import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Spinner, Button, Pagination } from "react-bootstrap";
import { Table } from "antd"
import { getQnaList } from "../../api";
// import apiClient from "../../services/api";
import { useQuery, useQueryClient } from "react-query";
import Search from "../../components/Order/Search";

// const maxPostPage = 10;

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

  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  // const [selectedPost, setSelectedPost] = useState(null);
  const [postsPerPage] = useState(10);

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const queryClient = useQueryClient();

  useEffect(() => {
    const nextPage = page + 1;
    queryClient.prefetchQuery(['getQnaList', nextPage], () => getQnaList(nextPage)); // 다음 페이지의 데이터를 미리 fetch
  }, [page, queryClient]);


  /**
   * useQuery 파라미터
   * @param {array|string} queryKey : queryKey 가 변경되면 useQuery 에서 data 가 업데이트됨
   * @param {function} queryFn : 현재 페이지에 어떤 페이지든 간에 데이터 호출 함수 실행.
   * @param {boolean} keepPreviousData : 데이터가 refetch 될때 이전 데이터 유지 여부 (true, false)
   */
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery(  {
    queryKey: ['getQnaList', page],
    queryFn: () => getQnaList(page),
    staleTime: 2000,
    keepPreviousData : true,
    onSuccess: data => {
      setPosts(data)
      console.log(data.length);
    },
    onError: e => {
      // API 연결이 실패한 경우에 호출됨
      console.log(e.message);
    }
  });

  // Get current posts
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setPage(pageNumber);

  const pageNumbers = [];
  const totalPosts = posts.length;
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

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

  const columns = [
    {
      title: '문의제목',
      dataIndex: 'meta.path',
    },
    {
      title: '접수일',
      dataIndex: 'inquiry_created_at',
    }
  ]

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };


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
          <div className="table-responsive h-530px scroll-y px-0 border-top">
            <Table rowSelection={rowSelection} columns={columns} dataSource={posts} />
          </div>
        </Card.Body>
        <Card.Footer>
          <div>
            <span>Current Page: {page}</span>
            {/*<Button*/}
            {/*  onClick={() => setPage((previousValue) => previousValue -1)}*/}
            {/*  disabled={page <= 1}*/}
            {/*>*/}
            {/*  Prev*/}
            {/*</Button>*/}
            {/*<Pagination>*/}
            {/*  {pageNumbers.map(number => (*/}
            {/*    <Pagination.Item key={number} onClick={() => paginate(number)} className={page == number ? "active" : ""}>*/}
            {/*        {number}*/}
            {/*    </Pagination.Item>*/}
            {/*  ))}*/}
            {/*</Pagination>*/}
            {/*<Button*/}
            {/*  onClick={() => setPage((previousValue) => previousValue + 1)}*/}
            {/*  disabled={page >= totalPosts}*/}
            {/*>*/}
            {/*  Next*/}
            {/*</Button>*/}
            {/*{isFetching ? <Spinner animation="border" /> : null}*/}
          </div>
        </Card.Footer>

      </Card>
    </>
  )
}

export default QnaList;
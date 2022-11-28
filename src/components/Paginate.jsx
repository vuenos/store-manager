import React from 'react';
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from 'prop-types';

const Paginate = ({pages, page, keyword = "", path}) => {

  Paginate.propTypes = {
    pages: PropTypes.number,
    page: PropTypes.number,
    current: PropTypes.number,
    keyword: PropTypes.any,
    onChangePage: PropTypes.any,
    path: PropTypes.any // Paginate 를 호출하는 부모 컴포넌트의 'path' 속성의 값을 받아옴.
  }

  return (
    pages > 1 && (
      <Pagination>

        {page > 1 && (
          <LinkContainer
            to={
              keyword
                ? `${path}/keyword=${keyword}&page=${page - 1}`
                : `${path}/page=${page - 1}`
            }
          >
            <Pagination.Prev />
          </LinkContainer>
        )}
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              keyword
                ? `${path}/keyword=${keyword}&page=${x + 1}`
                : `${path}/page=${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>
              {x + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
        {page !== pages && (
          <LinkContainer
            to={
              keyword
                ? `${path}/keyword=${keyword}&page=${page + 1}`
                : `${path}/page=${page + 1}`
            }
          >
            <Pagination.Next />
          </LinkContainer>
        )}

      </Pagination>
    )
  )
}
export default Paginate;
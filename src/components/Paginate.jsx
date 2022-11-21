import React from 'react';
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from 'prop-types';

const Paginate = ({pages, page, keyword = ""}) => {

  Paginate.propTypes = {
    pages: PropTypes.number,
    page: PropTypes.number,
    current: PropTypes.number,
    keyword: PropTypes.any,
    onChangePage: PropTypes.any,
  }

  return (
    pages > 1 && (
      <Pagination>

        <LinkContainer
          to={
            keyword
              ? `/product/manage/goods/keyword=${keyword}&page=${page - 1}`
              : `/product/manage/goods/page=${page - 1}`
          }
        >
          <Pagination.Prev />
        </LinkContainer>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              keyword
                ? `/product/manage/goods/keyword=${keyword}&page=${x + 1}`
                : `/product/manage/goods/page=${x + 1}`
            }
          >
            <Pagination.Item active={x + 1 === page}>
              {x + 1}
            </Pagination.Item>
          </LinkContainer>
        ))}
        <LinkContainer
          to={
            keyword
              ? `/product/manage/goods/keyword=${keyword}&page=${page + 1}`
              : `/product/manage/goods/page=${page + 1}`
          }
        >
          <Pagination.Next />
        </LinkContainer>

      </Pagination>
    )
  )
}
export default Paginate;
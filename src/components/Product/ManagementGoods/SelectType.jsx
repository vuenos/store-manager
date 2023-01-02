import React, {useState} from 'react';
import PropTypes from "prop-types";

const SelectType = (props) => {
  SelectType.propsTypes= {
    ManagementType: PropTypes.string,
    setType: PropTypes.func
  }

  console.log("getType: ",props);
  // eslint-disable-next-line react/prop-types
  return (
    <div className="mb-5">
      <div className="step-wrap py-0 border-bottom h-47px">
        <ul className="nav nav-tabs nav-wrap nav-line-tabs nav-line-tabs-2x nav-stretch border-0">
          <li className="nav-item">
            {/* eslint-disable-next-line react/prop-types */}
            <button className={"nav-link fs-4 fw-bolder py-3 "+ (props.ManagementType === "1"? "active" :"")} onClick={() => props.setType("1")}
              // href="https://shcdev.sellerhub.co.kr/product/mall/search"
            >상품별로 보기</button>
          </li>

          <li className="nav-item">
            {/* eslint-disable-next-line react/prop-types */}
            <button className={"nav-link fs-4 fw-bolder py-3 "+ (props.ManagementType==="2" ? "active" :"")} onClick={() => props.setType("2")}
              // href="https://shcdev.sellerhub.co.kr/product/mall/search_onch"
            >쇼핑몰로 보기</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SelectType;

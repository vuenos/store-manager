import React, {useState} from 'react';

const SelectType = () => {
  const [typeSelect, setTypeSelect] = useState("1")
  return (
    <div>
      <div className="border-0">
        <ul className="nav nav-tabs nav-wrap nav-line-tabs nav-line-tabs-2x nav-stretch border-0">
          <li className="nav-item">
            <button className={"nav-link fs-4 fw-bolder py-3 "+ (typeSelect === "1"? "active" :"")} onClick={() => setTypeSelect("1")}
              // href="https://shcdev.sellerhub.co.kr/product/mall/search"
            >상품별로 보기</button>
          </li>

          <li className="nav-item">
            <button className={"nav-link fs-4 fw-bolder py-3 "+ (typeSelect==="2" ? "active" :"")} onClick={() => setTypeSelect("2")}
              // href="https://shcdev.sellerhub.co.kr/product/mall/search_onch"
            >쇼핑몰로 보기</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SelectType;

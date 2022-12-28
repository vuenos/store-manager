import React, {useEffect, useState} from 'react';
import {Card, Col, OverlayTrigger, Row, Tooltip} from "react-bootstrap";

const SelectShop = (children) => {
  const [checkShops, setCheckShops] = useState([]);
  const {shops} = children;


// 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    console.log(checked, id)

    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckShops(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckShops(checkShops.filter((item) => item !== id));
    }
    // checked ? setCheckShops(shops) : setCheckShops(null) ;
  };

  const checkFunction = (value) => {
    console.log(value);
  }

  useEffect(() => {
    console.log(checkShops)
  },[checkShops, shops])

  return (
    <Card className="card mb-5">
      <Card.Body className="card-body p-5">
        {/*<div className="border-gray-300 border-bottom border-bottom-solid mb-5"></div>*/}
        <Row className="row align-items-center">
          <Col className="col-xl-1 min-w-120px">
            <div className="fs-6 fw-boldest mt-3 mb-3">
              쇼핑몰 선택
            </div>
          </Col>
          <Col className="col-xl-10">
            {shops ?
              shops.map((shop)=> (
                <div key={shop.id} className="mb-2 me-2 form-check-inline form-check-solid">
                  <input id={shop.id} type="checkbox" name={shop.shopName} className="form-check-input d-none btn-check"  onClick={()=> console.log(shop.id)}/>
                  <label htmlFor={shop.id} className="btn btn-outline btn-outline-white fw-normal btn-active-secondary p-2 d-flex align-items-center py-1">
                    <img src={`/assets/media/icons/${shop.icon}`} alt={""}/>&nbsp;{shop.shopName}
                  </label>
                </div>
              ))
              : null
            }
            <p className="text-muted mb-0 mt-4"><small>*옥션과 G마켓은 엑셀파일로만 상품을 불러올 수 있어요</small></p>
          </Col>


          <div className="row align-items-start mt-5">
            <div className="col-xl-1 min-w-120px">
              <div className="fs-6 fw-boldest mt-3 mb-3">엑셀업로드
                <span>
                  <OverlayTrigger
                    placement="bottom"
                    overlay = {
                      <Tooltip>
                        <div className="text-start ls-06em word-keep-all">
                          <div className="fw-boldest">알려드려요</div>
                          <br/>
                          <div className="fw-boldest">-ESM Plus 홈페이지</div>
                          에서 내려 받은 파일을 올려주세요.<br/>
                          <div className="fw-boldest">(상품 등록/변경 &gt; 상품 관리 2.0 &gt; 엑셀 다운로드)</div>
                          <br/>
                            -첫 번째 시트에 상품을 모두 넣어 주세요. (두 번째 시트에 있는 상품은 가져오지 않아요.) <br/>
                            -한 번에 5,000개의 상품 정보를 가져올 거예요. <br/>
                            -엑셀 파일은 한 개만 올릴 수 있어요 <br/>
                        </div>
                      </Tooltip>
                    }
                  >
              <span className="cursor-pointer lh-sm ms-1 mt-n05"><img src="/assets/media/icons/tooltip.svg" alt="툴팁" /></span>
            </OverlayTrigger>
            </span>
            </div>
            </div>
            <div className="col-xl-10">


              <div className="file-box">
                <label className="btn btn-secondary" htmlFor="file">엑셀 업로드</label>
                <input type="file" id="file" accept=".xls, .xlsx" className="d-none"/>
              </div>
            </div>
          </div>



          <div className="my-5">
            <div className="form-check form-check-custom form-check-solid form-check-sm">
              <input type="checkbox" id="exist_remove" value="Y" className="form-check-input"/>
                <label className="form-check-label" htmlFor="exist_remove">
                  기존 리스트를 삭제하고 불러오기 합니다.
                </label>
            </div>
          </div>
        </Row>

        <button type="submit" className="btn btn-primary" id="searchMallSubmitBtn">
          상품 불러오기
        </button>
      </Card.Body>
    </Card>
  );
};


export default SelectShop;

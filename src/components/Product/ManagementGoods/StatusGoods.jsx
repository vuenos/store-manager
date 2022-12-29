import React from 'react';

const StatusGoods = () => {
  return (
    <div>
      <div className="bg-gray-200 d-flex align-items-center step-wrap border-gray-400 border-bottom">
        <div className="step-box step-box01 text-center min-w-125px me-2  active ">
          <a className="fs-4 fw-boldest text-gray-500 w-100 step-text all-product bg-tab-image"
             href="https://shcdev.sellerhub.co.kr/product/mall/goods/smartstore">
            <div className="mt-12">
              전체 상품
              <p className="m-0 fs-7 fw-normal">260</p>
            </div>
          </a>
        </div>
        <div className="step-box step-box02 text-center min-w-125px me-2 ">
          <a className="fs-4 fw-boldest text-gray-500 w-100 bg-tab-image status-none step-text"
             href="https://shcdev.sellerhub.co.kr/product/mall/goods/smartstore?sale_status=none">
            <div className="mt-12">
              판매대기
              <p className="m-0 fs-7 fw-normal">152</p>
            </div>
          </a>
        </div>
        <div className="step-box step-box02 text-center min-w-125px me-2 ">
          <a className="fs-4 fw-boldest text-gray-500 w-100 bg-tab-image status-on step-text"
             href="https://shcdev.sellerhub.co.kr/product/mall/goods/smartstore?sale_status=on">
            <div className="mt-12">
              판매중
              <p className="m-0 fs-7 fw-normal">52</p>
            </div>
          </a>
        </div>
        <div className="step-box step-box02 text-center min-w-125px me-2 ">
          <a className="fs-4 fw-boldest text-gray-500 w-100 bg-tab-image status-updt step-text"
             href="https://shcdev.sellerhub.co.kr/product/mall/goods/smartstore?sale_status=updt">
            <div className="mt-12">
              수정대기
              <p className="m-0 fs-7 fw-normal">45</p>
            </div>
          </a>
        </div>
        <div className="step-box step-box02 text-center min-w-125px me-2 ">
          <a className="fs-4 fw-boldest text-gray-500 w-100 bg-tab-image status-off step-text"
             href="https://shcdev.sellerhub.co.kr/product/mall/goods/smartstore?sale_status=off">
            <div className="mt-12">
              판매중지
              <p className="m-0 fs-7 fw-normal">11</p>
            </div>
          </a>
        </div>
      </div>


      <div className="py-4">
        <div className="d-flex flex-wrap mall-wrap">
          <a
            className="btn btn-outline btn-outline-white btn-active-secondary p-4 py-3 me-2 text-start w-144px mb-2  active "
            href="https://shcdev.sellerhub.co.kr/product/mall/goods/smartstore">
                        <span className="d-flex justify-content-between">
                            <img src="/assets/media/icons/smartstore.png"
                                 onError="this.onerror=null; this.src='/assets/media/icons/duotune/general/none-image.svg'"
                                 alt="" width="24"/>
                            <span className="fw-bolder text-end fs-14px">스마트스토어</span>
                        </span>

            <p className="text-end mb-0 fs-12px">74</p>
          </a>
          <a className="btn btn-outline btn-outline-white btn-active-secondary p-4 py-3 me-2 text-start w-144px mb-2 "
             href="https://shcdev.sellerhub.co.kr/product/mall/goods/coupang">
                        <span className="d-flex justify-content-between">
                            <img src="/assets/media/icons/coupang.png"
                                 onError="this.onerror=null; this.src='/assets/media/icons/duotune/general/none-image.svg'"
                                 alt="" width="24"/>
                            <span className="fw-bolder text-end fs-14px">쿠팡</span>
                        </span>

            <p className="text-end mb-0 fs-12px">48</p>
          </a>
          <a className="btn btn-outline btn-outline-white btn-active-secondary p-4 py-3 me-2 text-start w-144px mb-2 "
             href="https://shcdev.sellerhub.co.kr/product/mall/goods/gmarket">
                        <span className="d-flex justify-content-between">
                            <img src="/assets/media/icons/gmarket.png"
                                 onError="this.onerror=null; this.src='/assets/media/icons/duotune/general/none-image.svg'"
                                 alt="" width="24"/>
                            <span className="fw-bolder text-end fs-14px">지마켓</span>
                        </span>

            <p className="text-end mb-0 fs-12px">4</p>
          </a>
          <a className="btn btn-outline btn-outline-white btn-active-secondary p-4 py-3 me-2 text-start w-144px mb-2 "
             href="https://shcdev.sellerhub.co.kr/product/mall/goods/auction">
                        <span className="d-flex justify-content-between">
                            <img src="/assets/media/icons/auction.png"
                                 onError="this.onerror=null; this.src='/assets/media/icons/duotune/general/none-image.svg'"
                                 alt="" width="24"/>
                            <span className="fw-bolder text-end fs-14px">옥션</span>
                        </span>

            <p className="text-end mb-0 fs-12px">9</p>
          </a>
          <a className="btn btn-outline btn-outline-white btn-active-secondary p-4 py-3 me-2 text-start w-144px mb-2 "
             href="https://shcdev.sellerhub.co.kr/product/mall/goods/st11">
                        <span className="d-flex justify-content-between">
                            <img src="/assets/media/icons/st11.png"
                                 onError="this.onerror=null; this.src='/assets/media/icons/duotune/general/none-image.svg'"
                                 alt="" width="24"/>
                            <span className="fw-bolder text-end fs-14px">11번가</span>
                        </span>

            <p className="text-end mb-0 fs-12px">53</p>
          </a>
          <a className="btn btn-outline btn-outline-white btn-active-secondary p-4 py-3 me-2 text-start w-144px mb-2 "
             href="https://shcdev.sellerhub.co.kr/product/mall/goods/talkstore">
                        <span className="d-flex justify-content-between">
                            <img src="/assets/media/icons/talkstore.png"
                                 onError="this.onerror=null; this.src='/assets/media/icons/duotune/general/none-image.svg'"
                                 alt="" width="24"/>
                            <span className="fw-bolder text-end fs-14px">톡스토어</span>
                        </span>

            <p className="text-end mb-0 fs-12px">57</p>
          </a>
          <a className="btn btn-outline btn-outline-white btn-active-secondary p-4 py-3 me-2 text-start w-144px mb-2 "
             href="https://shcdev.sellerhub.co.kr/product/mall/goods/sho">
                        <span className="d-flex justify-content-between">
                            <img src="/assets/media/icons/sho.png"
                                 onError="this.onerror=null; this.src='/assets/media/icons/duotune/general/none-image.svg'"
                                 alt="" width="24"/>
                            <span className="fw-bolder text-end fs-14px">셀러허브</span>
                        </span>

            <p className="text-end mb-0 fs-12px">15</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StatusGoods;

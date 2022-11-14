import React from 'react';

const Gnb = () => {
  return (
    <div className="docs-header align-items-stretch position-sticky top-0 bg-white z-index-3">
      <div className="container mw-sm-100 p-0">
        <div className="d-flex align-items-stretch justify-content-between py-3 px-30px h-96px">
          {/* Page title, Description */}
          <div className="d-flex align-items-center" id="kt_docs_header_title">
            <div
              className="docs-page-title py-5 mb-lg-0"
              data-kt-swapper="true"
              data-kt-swapper-mode="prepend"
              data-kt-swapper-parent="{default: '#kt_docs_content_container', 'lg': '#kt_docs_header_title'}"
            >
              <h1 className="d-flex align-items-center text-dark my-1 fs-4">
                Page title
              </h1>

              <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-0 pt-1">
                <li className="breadcrumb-item text-muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
              </ul>

            </div>
          </div>

          <div className="d-flex align-items-center">
            <button
              type="button"
              className="btn getOrder btn-white btn-active-primary btn-flex h-40px border-0 fw-boldest px-4 px-lg-6 me-2 me-lg-3"
              id="collectOrderBtn"
              data-bs-toggle="modal"
              data-bs-target="#collectOrderModal"
            >
              주문 가져오기
            </button>
            <button
              type="button"
              className="btn getOrder btn-white btn-active-primary btn-flex h-40px border-0 fw-boldest px-4 px-lg-6 me-5"
              id="syncOrderBtn"
              data-bs-toggle="modal"
              data-bs-target="#syncOrderModal"
            >
              주문 동기화
            </button>

            <a href="https://sellerhub.notion.site/f6595c4121774d60a28890aac11fb715"
               className="btn btn-white btn-active-white h-40px w-40px border fw-bolder me-3 p-1 use-guide"
               target="_blank" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-custom-class="tooltip-dark"
               title="" data-bs-html="true" data-bs-original-title="{{ config('tooltips.nav.guide') }}"
               rel="noreferrer"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M9.20375 6.83333H25.0833C25.5896 6.83333 26 6.42293 26 5.91667C26 5.41041 25.5896 5 25.0833 5H8.75C7.23108 5 6 6.23108 6 7.75V24.25C6 25.7689 7.23108 27 8.75 27H25C25.5523 27 26 26.5523 26 26V9.66667C26 9.11438 25.5523 8.66667 25 8.66667H9.20375C7.94333 8.66667 7.94333 6.83333 9.20375 6.83333ZM17 17V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V17C15 16.4477 15.4477 16 16 16C16.5523 16 17 16.4477 17 17ZM16 13C15.4477 13 15 13.4477 15 14C15 14.5523 15.4477 15 16 15C16.5523 15 17 14.5523 17 14C17 13.4477 16.5523 13 16 13Z"
                      fill="#8A8D99"/>
              </svg>
            </a>

            <div className="ms-5 me-5">
              <button
                className="btn btn-icon btn-icon-custom-color btn-active-color-primary w-auto px-0"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-placement="bottom-start"
                data-kt-menu-overflow="true">
                <span className="svg-icon svg-icon-1 me-n1">
                  <img src="/assets/media/icons/icon_profile.svg" width="40" alt="나의 메뉴 보기"/>
                </span>
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
export default Gnb;
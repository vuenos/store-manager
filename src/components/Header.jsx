import Link from 'next/link';

const Header = () => {
  return (
    <div className="docs-header align-items-stretch position-sticky top-0 bg-white z-index-3">
      <div className="container mw-sm-100 p-0">

        <div className="d-flex align-items-stretch justify-content-between py-3 px-30px h-96px">

          { /* S::Mobile menu toggle */ }
          <div className="d-flex align-items-center d-lg-none ms-n2 me-2" title="Show sidebar menu">
            <div className="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">

              <span className="svg-icon svg-icon-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                    fill="currentColor"/>
                  <path opacity="0.3"
                        d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                        fill="currentColor"/>
                </svg>
              </span>

            </div>
          </div>
          { /* E::Mobile menu toggle */ }

          <div className="d-flex d-lg-none align-items-center flex-grow-1 flex-lg-grow-0 me-3 me-lg-15">
            <Link href="/">
              <img alt="Logo" src="/assets/media/logos/bi-connect.svg" className="h-20px" />
            </Link>
          </div>

          { /* S::Content Head */ }
          <div className="d-flex align-items-center justify-content-between flex-lg-grow-1">

            <div className="d-flex align-items-center" id="kt_docs_header_title">
              <div className="docs-page-title py-5 mb-lg-0" data-kt-swapper="true" data-kt-swapper-mode="prepend"
                   data-kt-swapper-parent="{default: '#kt_docs_content_container', 'lg': '#kt_docs_header_title'}">

                <h1 className="d-flex align-items-center text-dark my-1 fs-4">
                  Content Title
                </h1>
              </div>
            </div>

          </div>
          { /* E::Content Head */ }

        </div>

      </div>
    </div>
  )
}
export default Header;
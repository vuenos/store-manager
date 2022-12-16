import React, { useState, useEffect } from 'react';
import {Button} from "react-bootstrap";
import { useAuthState } from "../atoms";
import { useUsersState } from "../atoms";
import { useNavigate } from "react-router-dom";
import { pageHeadMap } from "./pageHeadMap";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
// import apiClient from "../services/api";
import { useUserActions } from "../api/userApi";

const Gnb = () => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useAuthState();
  // const [userState, setUserSate] = useUsersState();
  // const getUserData = getUserInfo();
  // const [user, setUser] = useState("");
  const [pageTitle, setPageTitle] = useState("Page title");
  const [pageDesc, setPageDesc] = useState("Page description");
  let curLocation = useLocation();
  const userActions = useUserActions();

  // const token = localStorage.getItem("access_token");
  //
  // const config = {
  //   headers: {
  //     Authorization: "Bearer " + token
  //   }
  // }

  // const {
  //   isLoading,
  //   isError,
  //   error,
  //   data: user
  // } = useQuery('getUserInfo', getUserInfo, {
  //   refetchOnWindowFocus: false,
  //   onSuccess: data => {
  //     console.log(data.data);
  //   },
  //   onError: e => {
  //     // API 연결이 실패한 경우에 호출됨
  //     console.log(e.message);
  //   }
  // });

  /**
   * logout handler
   * storage 인터페이스의 removeItem() method 에 key(access_token) name 을 파라마미터로 전달하면 storage 에서 해당 key 를 삭제.
   * setAuthState 내의 loggedIn 상태를 false 로 변경.
   */
  const logoutHandler = () => {
    localStorage.removeItem("access_token");
    setAuthState({loggedIn: false, id: "", pwd: ""});
    navigate('/login');
  }

  Gnb.propTypes = {
    title: PropTypes.string,
    path: PropTypes.string,
  }

  useEffect(() => {
    if(!authState.loggedIn) {
      navigate('/login')
    }
    console.log('LOGGEDIN', authState.loggedIn)
  }, [authState.loggedIn]);

  // useEffect(() => {
  //   setUserSate(getUserData.data);
  //   console.log('GNB_USERINFO', getUserData)
  // }, [getUserData.data]);


  useEffect(() => {
    const curTitle = pageHeadMap.find(item => item.path === curLocation.pathname);
    const curDesc = pageHeadMap.find(item => item.path === curLocation.pathname);
    if(curTitle && curTitle.title || curDesc && curDesc.desc) {
      setPageTitle(curTitle.title);
      setPageDesc(curTitle.desc);
      document.title = curTitle.title;
    }
  }, [curLocation]);


  return (
    <div className="docs-header align-items-stretch position-sticky top-0 bg-white z-index-3">
      <div className="container mw-sm-100 p-0">
        <div className="d-flex align-items-stretch justify-content-between py-3 px-30px h-96px">
          {/* Page title, Description */}
          <div className="d-flex align-items-center" id="kt_docs_header_title">
            <div
              className="docs-page-title py-5 mb-lg-0"
            >
              <h1 className="d-flex align-items-center text-dark my-1 fs-4">
                {pageTitle}
              </h1>

              <ul className="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-0 pt-1">
                <li className="breadcrumb-item text-muted">
                  {pageDesc}
                </li>
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
               target="_blank"
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
              >
                <span className="svg-icon svg-icon-1 me-n1">
                  {/*{isLoading && <span>Loading...</span>}*/}
                  {/*{isError && error.message}*/}
                  <span></span>
                  <img src="/assets/media/icons/icon_profile.svg" width="40" alt="나의 메뉴 보기"/>
                </span>
              </button>

              <Button variant="white" className="ms-4" onClick={logoutHandler}>Log out</Button>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
export default Gnb;
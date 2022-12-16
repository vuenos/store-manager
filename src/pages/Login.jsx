import React, { useState } from 'react';
import {Button, Container, Form, Row } from "react-bootstrap";
import { useAuthState } from "../atoms/auth";
// import { useUsersState } from "../atoms/users";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/api";
import { useUserActions } from "../api/userApi";

const Login = () => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useAuthState();
  // const [userState, setUserState] = useUsersState();
  const [authError, setAuthError] = useState(false);
  const [unknownError, setUnknownError] = useState(false);
  // const getUserData = getUserInfo();
  const userActions = useUserActions();

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    // 사용자입력값
    const userInput = {
      id,
      pwd,
      // email,
      // password
    }

    // apiClient.post('/sellers/login', userInput)
    //   .then(({data}) => {
    //     console.log('login success!');
    //     console.log(data);
    //     userActions.getUserInfo(data.data.access_token)
    //       .then(userInfo => {
    //         console.log('get User Info');
    //         console.log(userInfo);
    //         navigate('/dashboard');
    //       }).catch(e => {
    //         // todo : get user info failed
    //     })
    // }).catch(e => {
    //   // todo: login failed.
    // })

    // 네트워킹
    try {
      const {data} = await apiClient.post('/sellers/login', userInput);
      // data token 로컬스토리지(브라우저) 저장
      setAuthState({loggedIn: true, ...data});
      localStorage.setItem("access_token", data.data.access_token);
    } catch (e) {
      // todo: login 실패 에러 처리
    }

    try {
      const userInfo = await userActions.getUserInfo(localStorage.getItem('access_token'));
      console.log(userInfo)
      navigate("/dashboard");
    } catch (e) {
      // todo: get user info 실패 에러
    }

    // try {
    //   const { data, status } = await apiClient.post("/sellers/login", userInput);
    //
    //
    //   console.log('TOKEN_DATA', data);
    //
    //   await userActions.getUserInfo(data.data.access_token);
    //   // todo : getUser;
    //   navigate("/dashboard");
    // } catch (error) {
    //   switch (error.code) {
    //     case '000':
    //       alert('로그인 실패');
    //       break;
    //     case '001':
    //       alsert('유저 정보 받기 실패');
    //   }
    //
    //   if (error.response && error.response.status === 422) {
    //     setAuthError(true);
    //     console.log(error.message);
    //   } else {
    //     setUnknownError(true);
    //     console.error(error);
    //   }
    // }
  }

  return (
    <div>
      {authState.loggedIn
        ?
        <div>You are logged in</div>
        :
        <>
          <Container>
            <Row className="d-flex justify-content-center align-items-center vh-100">
              <div className="w-320px p-5">

                <h1 className="h4 mb-10 text-center">
                  <img src="/assets/media/svg/general/bi-connect.svg" alt="Sellerhub Connect"/>
                </h1>

                <h2 className="text-dark display-6 pt-10 mb-10 text-center fw-boldest">로그인</h2>

                <Form onSubmit={loginHandler}>
                  <Form.Group controlId={"id"}>
                    <Form.Control
                      type="text"
                      placeholder="Enter ID"
                      value={id}
                      autoComplete="on"
                      onChange={(e) => setId(e.target.value)}
                    />
                  </Form.Group>
                  <br/>
                  <Form.Group controlId={"password"}>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={pwd}
                      autoComplete="current-password"
                      onChange={(e) => setPwd(e.target.value)}
                    />
                  </Form.Group>
                  <br/>
                  <Button type="submit" variant="primary" className="btn-block btn-login w-100 fw-boldest">Sign in</Button>
                </Form>
              </div>
            </Row>
          </Container>
          {authError ? <div>Credentials not recognised. Please try again.</div> : null}
          {unknownError ? <div>There was an error submitting your details.</div> : null}
        </>
      }
    </div>
  )
}

export default Login;
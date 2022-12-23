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

  const [validated, setValidated] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false)

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");


  const loginHandler = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

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
      navigate("/dashboard");
    } catch (e) {
      // todo: login 실패 에러 처리
    }

    // try {
    //   const userInfo = await userActions.getUserInfo(localStorage.getItem('access_token'));
    //   console.log(userInfo);
    //   navigate("/dashboard");
    // } catch (e) {
    //   // todo: get user info 실패 에러
    // }

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
    //       alert('유저 정보 받기 실패');
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

  useEffect(() => {
    if (id && pwd) {
      setSubmitDisabled(false)
    } else {
      setSubmitDisabled(true)
    }
  }, [id, pwd, submitDisabled]);


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

                <Form noValidate validated={validated} onSubmit={loginHandler}>
                  <Form.Group controlId={`shc-${id}`}>
                    <Form.Control
                      type="text"
                      name="shcID"
                      placeholder="Enter ID"
                      value={id}
                      autoComplete="on"
                      onChange={(e) => setId(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      아이디를 입력해 주십시오.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <br/>
                  <Form.Group controlId={"password"}>
                    <Form.Control
                      type="password"
                      name="shcPwd"
                      placeholder="Enter password"
                      value={pwd}
                      autoComplete="current-password"
                      onChange={(e) => setPwd(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      비밀번호를 입력해 주십시오.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <br/>
                  <Button type="submit" id="formSubmit" variant="primary" disabled={submitDisabled} className="btn-block btn-login w-100 fw-boldest">Sign in</Button>
                </Form>
                {authError ? <Alert variant="danger" className="mt-6">인증되지 않은 계정입니다. 관리자에게 문의히여 주십시오.</Alert> : null}
                {unknownError ? <Alert variant={'danger'} className="mt-6">계정정보를 다시 확인하여 주십시오.</Alert> : null}
              </div>
            </Row>
          </Container>
        </>
      }
    </div>
  )
}

export default Login;
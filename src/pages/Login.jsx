import React, { useState } from 'react';
import {Button, Container, Form, Row } from "react-bootstrap";
import { useAuthState } from "../atoms";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/api";

const Login = () => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useAuthState();
  const [authError, setAuthError] = useState(false);
  const [unknownError, setUnknownError] = useState(false);

  // const [id, setId] = useState("");
  // const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    // 사용자입력값
    const userInput = {
      // id,
      // pwd,
      email,
      password
    }

    // 네트워킹
    try {
      const { data, status } = await apiClient.post("/users/login", userInput)

      // data token 로컬스토리지(브라우저) 저장
      if (status === 200) {
        setAuthState({loggedIn: true, ...data})
        localStorage.setItem("access_token", data.token)
        navigate("/dashboard");
        console.log('DATA', data);
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setAuthError(true);
        console.log(error.message);
      } else {
        setUnknownError(true);
        console.error(error);
      }
    }
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
                      value={email}
                      autoComplete="on"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <br/>
                  <Form.Group controlId={"password"}>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      autoComplete="current-password"
                      onChange={(e) => setPassword(e.target.value)}
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
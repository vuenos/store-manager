import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, message, Spin, Input, Typography } from "antd"
import { useAuthState } from "../atoms/auth";
// import { useUsersState } from "../atoms/users";
import { useNavigate } from "react-router-dom";
import apiClient from "../services/api";
// import { useUserActions } from "../api/userApi";
import { LockOutlined, UserOutlined, LoadingOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

const { Text, Paragraph } = Typography;

const Login = () => {
  Login.propTypes = {
    submit: PropTypes.func,
    spin: PropTypes.bool,
  }

  const navigate = useNavigate();
  const [authState, setAuthState] = useAuthState();
  // const [userState, setUserState] = useUsersState();
  const [authError, setAuthError] = useState(false);
  const [unknownError, setUnknownError] = useState(false);
  const [spin, setSpin] = useState(false);
  // const getUserData = getUserInfo();
  // const userActions = useUserActions();
  const [validated, setValidated] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  const [authUrl, setAuthUrl] = useState("");
  const [getCodeParam, setGetCodeParam] = useState("");

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  const [forms, setForms] = useState({
    id: "",
    pwd: "",
  });

  const handleChangeId = (e) => {
    console.log(e.target.value)
    setForms({
      id: e.target.value,
    })
  }

  const handleChangePass = (e) => {
    setForms({
      pwd: e.target.value
    })
  }

  const [messageApi, contextHolder] = message.useMessage();

  const spinIcon = <LoadingOutlined style={{ fontSize: 22 }} spin />

  const loginHandler = async (form) => {
    // e.preventDefault();

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
    setSpin(true);
    setSubmitDisabled(true);
    // 네트워킹
    try {
      const {data} = await apiClient.post('/sellers/login', JSON.stringify(form));
      // data token 로컬스토리지(브라우저) 저장
      setAuthState({loggedIn: true, ...data});
      localStorage.setItem("access_token", data.data.access_token);
      navigate("/dashboard");
    } catch (error) {
      setSpin(false);
      // todo: login 실패 에러 처리
      if (error.response && error.response.status === 422) {
        setAuthError(true);
        setSpin(false);
        setSubmitDisabled(false);
        console.log(error.message);
      } else {
        setUnknownError(true);
        invalidMsg('계정정보를 다시 확인하여 주십시오.')
        setSpin(false);
        setSubmitDisabled(false);
        console.error(error);
      }
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
    forceUpdate({});
  }, []);
  const onFinish = (values) => {
    loginHandler(values);
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  /**
   * SSO 로그인을 위한 authorization url 을 수집
   * @returns {Promise<void>}
   */
  const ssoLoginHandler = async () => {
    try {
      const res = await apiClient.get('/sellers/authorization-url');
      console.log('AUTHORIZATION_URL::', res.data.data.authorization_url);
      setAuthUrl(res.data.data.authorization_url);
    } catch(error) {
      // TODO : 에러상태
    }
  }

  useEffect(() => {
    ssoLoginHandler();
  }, []);

  /**
   * SSO 로그인 후에 redirection 되어 받아 온 code 파라미터 값을 취득함.
   */
  const checkReturnCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    setGetCodeParam(urlParams.get('code'));
    console.log('%c GETCODEVALUE:::', 'color: yellow', urlParams.get('code'));
  }

  useEffect(() => {
    checkReturnCode();
  }, []);


  /**
   * checkReturnCode 함수로 취득한 code 값을 /sellers/authorization?code= 파라미터로 보내고 키클락을 통해 인증받아 토큰을 response 받음.
   * response 받은 access_token 을 localStorage 에 저장하고 authState.loggedIn 상태를 true 로 설정
   * @returns {Promise<void>}
   */
  const getAccessToken = async () => {
    setSubmitDisabled(true);
    try {
      const { data, status } = await apiClient.post(`/sellers/authorization?code=${getCodeParam}`);
      if (status === 200) {
        setAuthState({loggedIn: true, ...data});
        console.log(data)
        localStorage.setItem("access_token", data.data.access_token);
        navigate("/dashboard");
      }
    } catch (error) {
      //
      setSubmitDisabled(false);
      alert(error);
    }
  }

  const invalidMsg = (msg) => {
    messageApi.open({
      type: 'error',
      content: msg,
      duration: 1,
      className: 'custom-class',
      style: {
        marginTop: '47vh',
      },
    });
  };

  return (
    <>
      {authState.loggedIn
        ?
        <Row>You are logged in</Row>
        :
        <Row className="Login" justify="space-around" align="middle" style={{ height: '100vh' }}>
          <Col span={8}>

            <h1 className="h4 mb-10 text-center">
              <img src="/assets/media/svg/general/bi-connect.svg" alt="Sellerhub Connect"/>
            </h1>

            <h2 className="text-dark display-6 pt-10 mb-10 text-center fw-boldest">로그인</h2>

            <Form
              form={form}
              name="normal_login"
              className="login-form"
              labelCol={{ span: 0, }}
              wrapperCol={{ span: 24, }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="id"
                id="id"
                value={form.id}
                onChange={handleChangeId}
                rules={[
                  {
                    required: true,
                    message: '사업자번호를 입력해 주세요!',
                  },
                ]}
              >
                <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="아이디는 사업자번호를 입력해 주세요." />
              </Form.Item>

              <Form.Item
                name="pwd"
                id="pwd"
                value={form.pwd}
                onChange={handleChangePass}
                rules={[
                  {
                    required: true,
                    message: '비밀번호를 입력해 주세요!',
                  },
                ]}
              >
                <Input.Password size="large" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="비밀번호를 입력해 주세요." />
              </Form.Item>
              <Form.Item
                shouldUpdate
                wrapperCol={{
                  offset: 0,
                  span: 24,
                }}
              >
                {spin && spin
                  ? <Button
                    size="large"
                    block
                    type="default"
                    disabled
                  >
                    <Spin indicator={spinIcon} />
                  </Button>
                  :
                  <Button
                    size="large"
                    block
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    disabled={
                      !form.isFieldsTouched(true) ||
                      !!form.getFieldsError().filter(({ errors }) => errors.length).length
                    }
                  >
                    Login
                  </Button>
                }
              </Form.Item>
              <Form.Item style={{ textAlign: 'right' }}>
                <a className="login-form-forgot" href="#">
                  Forgot password
                </a>
              </Form.Item>
            </Form>
            {contextHolder}
            {authError
              ?
              <Paragraph
                type="danger"
                style={{ marginTop: '-16px', textAlign: 'center', fontSize: '12px' }}
              >
                인증되지 않은 계정입니다. 관리자에게 문의히여 주십시오.
              </Paragraph>
              : null
            }
            {unknownError
              ?
              <Paragraph
                type="danger"
                style={{ marginTop: '-16px', textAlign: 'center', fontSize: '12px' }}>
                계정정보를 다시 확인하여 주십시오.
              </Paragraph>
              : null
            }

            <Button block size="large" disabled={submitDisabled} onClick={() => (window.location=authUrl)}>
              {authUrl && authUrl
                ? '통합 로그인'
                : <Spin indicator={spinIcon} />
              }
            </Button>
            <br /><br />
            {getCodeParam && getCodeParam
              ?
              <Button type="primary" block size="large" onClick={getAccessToken}>
                Get certified
              </Button>
              : null
            }

          </Col>
        </Row>
      }
    </>
  )
}

export default Login;
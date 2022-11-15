import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import {Button, Container, Form} from "react-bootstrap";
import PropTypes from 'prop-types';

const AuthForm = (submit) => {
  AuthForm.protoType = {
    submit: PropTypes.any,
  }

  const [form, setForm] = useState({
    id: "",
    pwd: "",
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const loginHandler = (e) => {
    e.preventDefault();
    submit(form);
    console.log('USER_DATA:::', form);
  };

  return (
    <div>
      <Helmet>
        <title>Login | SHConnect</title>
      </Helmet>

      <Container>
        <Form onSubmit={loginHandler}>
          <Form.Group controlId="id">
            <Form.Control
              type="text"
              name="id"
              value={form.id}
              onChange={handleChange}
              placeholder="Enter Id"
            />
          </Form.Group>

          <Form.Group controlId="pwd">
            <Form.Control
              type="password"
              name="pwd"
              onChange={handleChange}
              placeholder="Enter Password"
            />
          </Form.Group>
          <Button type="submit" variant="primary">Sign in</Button>
        </Form>
      </Container>
    </div>
  )
}
export default AuthForm;
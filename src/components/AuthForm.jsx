import React, { useState } from 'react';
import { Helmet } from "react-helmet";

const AuthForm = ({submit, label}) => {
  const [form, setForm] = useState({
    m_id: "",
    password: "",
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
      <h1>AuthForm</h1>
    </div>
  )
}
export default AuthForm;
import React, { useState, useEffect } from 'react';
import axios from "axios";

const MyPage = () => {
  const [userInfos, setUserInfos] = useState({});

  const getUserInfo = async () => {
    try {
      const { data } = await axios.get("http://connect-api-dev.sellerhub.co.kr/api/test/info");
      console.log(data);
      setUserInfos(data.results);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <h1>MyPage</h1>
      <ul>
        {userInfos.shc_id}
      </ul>
    </div>
  )
}
export default MyPage;
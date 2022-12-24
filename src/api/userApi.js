import { useSetRecoilState } from 'recoil';
import apiClient from "../services/api";
import { usersAtom } from "../atoms/users";

const useUserActions = () => {
  const setUserInfo = useSetRecoilState(usersAtom);
  // const token = localStorage.getItem("access_token");
  // const config = {
  //   headers: {
  //     Authorization: "Bearer " + token
  //   }
  // }

  async function getUserInfo (token) {

    if (!token) {
      token = localStorage.getItem('access_token');
    }

    const { data, status } = await apiClient.get("/sellers/info", {
      headers: {
        Authorization: "Bearer " + token
      }
    });
    // localStorage.setItem("tmp_data", data.data.name);
    setUserInfo(data.data);
    console.log('SET_USERS', data.data)
    return data.data;
  }

  return {
    getUserInfo
  }
}

export { useUserActions };
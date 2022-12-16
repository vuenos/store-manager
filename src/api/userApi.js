import { useSetRecoilState } from 'recoil';
import apiClient from "../services/api";
import { usersAtom } from "../atoms";

export { useUserActions };
function useUserActions () {
  const setUsers = useSetRecoilState(usersAtom);
  const token = localStorage.getItem("access_token");
  const config = {
    headers: {
      Authorization: "Bearer " + token
    }
  }

  return {
    getUserInfo
  }

  async function getUserInfo (token) {

    if (!token) {
      token = localStorage.getItem('access_token');
    }

    const { data, status } = await apiClient.get("/sellers/info", {headers: {
        Authorization: "Bearer " + token
      }});
    localStorage.setItem("tmp_data", data.data.name);
    setUsers(data.data);
    return data.data;
  }
}
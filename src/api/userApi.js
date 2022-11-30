import apiClient from "../services/api";

const token = localStorage.getItem("access_token");
const config = {
  headers: {
    Authorization: "Bearer " + token
  }
}

export const getUserInfo = async () => {
    const { data } = await apiClient.get("/users/profile", config);
    console.log('USER_DATA:::', data);
    return data;
}
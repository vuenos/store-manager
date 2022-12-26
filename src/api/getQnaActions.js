import apiClient from "../services/api";

const token = localStorage.getItem("access_token");
const config = {
  headers: {
    Authorization: "Bearer " + token
  }
}

export const getQnaList = async (token) => {
  const { data } = await apiClient.get("/sellers/products", config);
  console.log('QNA_DATA:::', data.data);
  return data.data;
}

import apiClient from "../services/api";

const token = localStorage.getItem("access_token");
const config = {
  headers: {
    Authorization: "Bearer " + token
  }
}

export const getQnaList = async (page = 0) => {
  const { data } = await apiClient.get(`/sellers/products?page=${page}`, config);
  console.log('QNA_DATA:::', data.data);
  return data.data;
}

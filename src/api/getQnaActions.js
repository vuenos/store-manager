import apiClient from "../services/api";

export const getQnaList = async (token) => {
  if (!token) {
    token = localStorage.getItem('access_token');
  }

  const { data } = await apiClient.get('sellers/products', {
    headers: {
      Authorization: "Bearer " + token
    }
  });
  console.log(data)
  return data;
}
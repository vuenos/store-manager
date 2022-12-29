import apiClient from "../services/api";

const token = localStorage.getItem("access_token");
const config = {
  headers: {
    Authorization: "Bearer " + token
  }
}

export const getQnaList = async (pageNum) => {
  // const { data } = await apiClient.get(`/sellers/products?page=${pageNum}`, config);
  // console.log('QNA_DATA:::', data.data);
  // return data.data;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit10&_page=${pageNum}`);
  return response.json();
}

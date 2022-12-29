import apiClient from "../services/api";
import axios from "axios";

const token = localStorage.getItem("access_token");
const config = {
  headers: {
    Authorization: "Bearer " + token
  }
}

export const getQnaList = async () => {
  // const { data } = await apiClient.get(`/sellers/products?page=${pageNum}`, config);
  // console.log('QNA_DATA:::', data.data);
  // return data.data;

  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return res.data;
}

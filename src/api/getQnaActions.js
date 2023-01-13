import apiClient from "../services/api";
import axios from "axios";

// const token = localStorage.getItem("access_token");
// const config = {
//   headers: {
//     Authorization: "Bearer " + token
//   }
// }

export const getQnaList = async () => {
  // const { data } = await apiClient.get(`/sellers/products?page=${pageNum}`, config);
  // console.log('QNA_DATA:::', data.data);
  // return data.data;

  const token = localStorage.getItem("access_token");
  const { data } = await apiClient.get(`/sellers/inquiries`, {
    headers: {
      Authorization: "Bearer " + token
    }
  });
  console.log('DATA', data)
  return data.data;
}

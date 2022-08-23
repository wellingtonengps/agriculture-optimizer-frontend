import axios from "axios";
import { cropProps } from "..";

const hostName = "http://192.168.15.5:8080";

export const fetchCrops = async () => {
  const response = await axios.get(`${hostName}/crop/get-all`).then();
  return response.data as cropProps[];
};

export const fetchSolutions = async () => {
  const response = await axios.get(`${hostName}/solutions/get-all`).then();
  return response.data;
};

export const postUserInput = async (data: any) => {
  const response = await axios.post(`${hostName}/main/solve`, data).then();
  return response;
};

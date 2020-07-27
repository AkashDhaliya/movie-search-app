import axios from "axios";
import { URL } from "../../Constants/Const";

function Requests(params) {
  return axios.get(`${URL}`, { params: params });
}

export default Requests;

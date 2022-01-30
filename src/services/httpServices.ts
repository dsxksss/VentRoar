//封装axios请求模块
import axios from "axios";

axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    console.log("发生了一些意外错误!!!");
  }
  return Promise.reject(error);
}); //参数请求成功和请求失败

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

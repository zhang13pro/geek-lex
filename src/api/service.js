//封装axios 把网络接口中需要统一处理的内容都放在拦截器中统一处理
import axios from "axios";
import { useMsgbox, Message } from "element3";
import store from "@/store";
import { getToken } from "@/utils/auth";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000, // request timeout
});

service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      //所有接口在请求发出之前 获取 token
      config.headers["X-Token"] = getToken();
    }
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 接口返回报错信息的时 调试窗口统一打印报错信息
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 20000) {
      console.log("接口信息报错", res.message);
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("接口信息报错" + error);
    return Promise.reject(error);
  }
);

export default service;

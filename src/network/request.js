import axios from 'axios';

export function request(config){
  
    const instance = axios.create({   //create本身会返回一个Promise
      baseURL : 'http://152.136.185.210:8000/api/w6',
      timeout: 5000,
    })

    // axios拦截器的使用

    // 发送请求拦截
    instance.interceptors.request.use(config => {
      //发送请求成功拦截
      //在什么地方使用： 1.比如config中的一些信息不符合服务器的要求
                      // 2.在每次发送网络请求时，都希望在界面中显示一个请求的图标
                      // 3.某些网络请求（比如登录（token）），必须携带一些特殊的信息
      // console.log(config);
      return config; //必须返回拦截的config
    } , err => {
      //发送请求失败拦截
      console.log(err);
    })


    // 响应拦截
    instance.interceptors.response.use(res => {
      //响应成功拦截
      // console.log(res);
      return res.data //返回拦截的响应中的data
    } , err => {
      //响应失败拦截
      console.log(err);
    })
    
    return instance(config); //这里return 本身是Promise 
}

import axios from 'axios'
import config from '../config/index'
import router from '../router/index'
import {Toast, Loading} from 'vue-ydui/dist/lib.rem/dialog';

axios.defaults.baseURL = config.API_URL
//请求前拦截
axios.interceptors.request.use(config=>{
  Loading.open('正在加载...');
  let token = localStorage.getItem('token')
  if(token){
    config.url += '?token=' + token
  }
  return config
},error => {
  return Promise.reject(error)
})
axios.interceptors.response.use(response=>{
  console.log(response.data)
  Loading.close()
  if(response.data.status==false){
    if(typeof response.data.code!='undefined'){
      if(response.data.code==401){
        Toast({
          mes:response.data.msg ,
          timeout: 1500,
          icon: 'error',
        });
        router.push({path:'/login'})
      }
    }
  }


  return response
},error=>{
  return Promise.reject(error)
})


const http = {
  get: (url, params, fun) => {
    // let token = localStorage.getItem('token')
    // url += '?token=' + token

    axios.get(url, {params}).then(res => {
      console.log('-------------------');
      fun(res.data)

    }).catch(err => {
      fun(null);
      Toast({
        mes: '网络请求错误！',
        timeout: 1500,
        icon: 'error',
      });
    })

  },
  post: (url, params, fun) => {
      axios.post(url, params).then(res => {
        fun(res.data);
      }).catch(err => {
        fun(null);
        Toast({
          mes: '网络请求错误！',
          timeout: 1500,
          icon: 'error',
        });
      })

    }
  }

  export default http;

import axios from 'axios'
import {Toast, Loading} from 'vue-ydui/dist/lib.rem/dialog';
import http from './http'
import router from '../router/index'

const user = {
  /*登陆*/
  login: (params) => {
    http.post('/login', params, data => {
      if (data == null) {
        return
      }
      if (data.status == true) {
        localStorage.setItem('token',  data.data.token)
        Toast({
          mes: data.msg,
          timeout: 1500,
          icon: 'success',
          callback: () => {
            router.push({path: '/'});
          },
        });
        setTimeout(() => {
          Loading.open('loading');
        }, 500)

        setTimeout(() => {
          Loading.close();
        }, 1400);
      }
      else {
        Toast({
          mes: data.msg,
          timeout: 1500,
          icon: 'error',
        })
      }
      console.log(data)
    })
  },
  /*注册*/
  register: (params) => {

    http.post('/register', params, data => {
      if (data == null) {
        return
      }
      if (data.status == true) {
        Toast({
          mes: data.msg,
          timeout: 1000,
          icon: 'success',
          callback: () => {
            router.push({path: 'login'})
          }
        })
        setTimeout(() => {
          Loading.open('loading');
        }, 500)

        setTimeout(() => {
          Loading.close();
        }, 1000);
      }

      else {
        Toast({
          mes: data.msg,
          timeout: 1500,
          icon: 'error'
        });
      }
    })
  },
  getKm_List:(params,fun)=>{
    http.get('/user/km/ranking',params,data=>{
      fun(data)
    })
  },
  getCount_List:(params,fun)=>{
    http.get('/user/count/ranking',params,data=>{
      fun(data)
    })
  },
  getPace_List:(params,fun)=>{
    http.get('/user/pace/ranking',params,data=>{
      fun(data)
    })
  }
}
export default user

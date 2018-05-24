import http from './http'
import {Toast, Loading} from 'vue-ydui/dist/lib.rem/dialog';
import router from '../router/index'
/*打卡api*/
const clock_in={
  add:(form)=>{
    http.post('/clock-in/add',form,data=>{
        if(data.status==true){
          let id=data.result.id
          Toast({
            mes: data.msg,
            timeout: 1500,
            icon: 'success',
          })
          router.push({path:'/clockview/'+id})
        }
        else {
          Toast({
            mes: data.msg,
            timeout: 1500,
            icon: 'error',

          })
        }
    })
  },
  find(fun){
      http.get('/clock-in/month',{},data=>{
        fun(data)
      })
    },
  getlishi(id,fun){
    http.get('/clock-in/'+id,{},data=>{

      fun(data);
    })

  }

}

export default clock_in;

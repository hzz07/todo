import http from './http'
import {Toast} from "vue-ydui/dist/lib.rem/dialog/index";
import router from '../router/index'

const update_user={
  update:(user_list)=>{
    http.post('/user/save',user_list,data=>{
      if(data.status==true){
        Toast({
          mes: data.msg,
          timeout: 1500,
          icon: 'success',
        })
        router.push({path:'/gerenxinxi'})
        console.log(data)
      }else{
        Toast({
          mes: data.msg,
          timeout: 1500,
          icon: 'error',
        })
      }

    })
  }

}
export default update_user

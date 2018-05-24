import config from '../config/index'
import http from './http'
const Gerenxixi={
  find_xixi:(fun)=>{
    http.get('/user',{},data=>{
      fun(data)
    })
  }
}

export default Gerenxixi

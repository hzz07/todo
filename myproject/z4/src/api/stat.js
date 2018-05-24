import http from './http'
const stat={
  getMonth_list:(fun)=>{
    http.get('/stat/month',{},data=>{
      fun(data);
    })
  },
  getWeek_list:(fun)=>{
    http.get('/stat/week',{},data=>{
      fun(data);
    })
  },
}
export default stat

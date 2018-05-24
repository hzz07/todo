
import http from './http'
const home={
  getSlider:(fun)=>{
    http.get('/swiper',{},data=>{
     fun(data)
    })
  },
  getTimeline:(fun)=>{
    http.get('/zipper',{},data=>{
      fun(data)
    })

  },
  getNews:(fun)=>{
    http.get('/article',{},data=>{
      fun(data)
    })
  }

}
export default home;

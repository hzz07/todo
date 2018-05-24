<template>
  <div class="yd-flexview">
    <Header></Header>
    <div class="center">
      <div class="shijian">
        <div class="tupian">
          <img src="../../static/image/icon02.jpg" alt="">
        </div>
        <div class="tupian">
          <span class="nian ">{{clock.year}} </span><br>
          <span class="nian" >{{clock.date}}</span>
        </div>
      </div>



    </div>
    <div class="yd-grids-3 lanmu">
      <a href="#/" class="yd-grids-item router-link-exact-active router-link-active">
        <div class="yd-grids-icon"><span class="juli">{{clock.km}}Km</span></div>
        <div class="yd-grids-txt" ><span class="juli1">公里数</span></div>
      </a>
      <a href="#/" class="yd-grids-item router-link-exact-active router-link-active">
        <div class="yd-grids-icon" ><span class="yongshi">{{clock.time}}</span></div>
        <div class="yd-grids-txt" ><span class="yongshi1">用时</span></div>
      </a>
      <a href="#/" class="yd-grids-item router-link-exact-active router-link-active">
        <div class="yd-grids-icon"><span class="peisu">{{clock.pace}}</span></div>
        <div class="yd-grids-txt"><span class="peisu1">配速</span></div>

      </a>
    </div>
    <div class="xuanze">
      <a href=""> <div class="left_shang">上一个</div></a>
      <a href=""><div class="right_xia">下一个</div></a>
      <div class="zhongjian" ><img :src="clock.imgs[0]|img"></div>


    </div>
    <lishi></lishi>
  </div>

</template>


<script>
  import Header from '../components/header'
  import Lishi from '../components/ClockInList.vue'
  import clock_in from  '../api/clock_in'
  import config from '../config/index'

  export default {
    data(){
      return{
        clock: {
          imgs: [
            '',
          ]
        }
      }
    },
    components: {
      Header,
      Lishi
    },
    filters:{
      img(val){
        if(val==''){
          return '../static/image/default.jpg';
        }
        else {
          return config.STATIC_URL+val;
        }
      }
    },
    mounted(){
      let id = this.$route.params.id;
      clock_in.getlishi(id,data=>{
        if (data.status == true) {
          this.clock = data.result;
        }
        console.log(data)
      })
    },
    watch:{
      '$route'() {
        this.$router.go(0);
      }
    }


  }
</script>
<style scoped>
  .center{
   background-color: white;
  }
  .shijian{
    margin-left:10%;
    margin-top: 7%;
  }
  .tupian{
    width: 40%;
    float: left;
  }
  .tupian img{
    width: 60%;
  }
  .tupian span{
    font-size:24px;
  }
  .nian{
    color: darkred;
    font-size:20px;
    font-weight: 600;
  }
  .juli{
    color:#eb8419;
    font-size: 30px;
  }
  .yongshi{
    color:#eb8419;
    font-size: 30px;
  }
  .peisu{
    color:#eb8419;
    font-size: 30px;
  }
  .xuanze{
    margin-top: 2%;
    background-color: white;
    text-align: center;
  }
  .left_shang{
    background-color: #eb8419;
    width: 5%;
    font-size: 16px;
    color: white;
    float: left;
    margin-top: 10%;
    padding:15px 0px 15px 0px;
  }
  .right_xia{
    background-color: #eb8419;
    width: 5%;
    font-size: 16px;
    color: white;
    float: right;
    margin-top: 10%;
    padding:15px 0px 15px 0px;
  }
  .zhongjian img{
    width: 80%;
  }
  .lanmu a{
    border: 1px solid #ddd;
    margin-top: 5%;
  }
</style>

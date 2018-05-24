<template>
  <yd-slider autoplay="3000">
    <template v-for="img in list" ：key="item.id">
      <yd-slider-item>
        <a href="javascript;:">
          <img :src="img.src|src">
        </a>
      </yd-slider-item>
    </template>
  </yd-slider>
</template>
<script>
  import home from '../api/home'
  import Static from '../config/index'
  export default {
    data(){
      return{
        list:[]
      }
    },
    filters:{
      src(val){
        return Static.STATIC_URL+val
      }
    },
    mounted(){

      home.getSlider(data=>{
        this.list=data
        console.log(this.list)
      })
    }
  }

</script>
<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>

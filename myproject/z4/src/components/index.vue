<template>
  <div class="yd-flexview">

    <Header></Header>

    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
        </a>
      </yd-slider-item>
    </yd-slider>
    <div class="Nav">
      <div class="yd-grids-4">
        <a href="#/daka" class="yd-grids-item router-link-exact-active router-link-active">
          <div class="yd-grids-icon"><img src="http://static.ydcss.com/ydui/img/logo.png"></div>
          <div class="yd-grids-txt"><span>daka</span></div>
        </a>
        <a href="#/paiming" class="yd-grids-item router-link-exact-active router-link-active">
          <div class="yd-grids-icon"><i class="demo-icons-cell"></i></div>
          <div class="yd-grids-txt"><span>排名</span></div>
        </a>
        <a href="#/daka" class="yd-grids-item router-link-exact-active router-link-active">
          <div class="yd-grids-icon"><img src="http://static.ydcss.com/ydui/img/logo.png"></div>
          <div class="yd-grids-txt"><span>image</span></div>
        </a>
        <a href="#/daka" class="yd-grids-item router-link-exact-active router-link-active">
          <div class="yd-grids-icon"><img src="http://static.ydcss.com/ydui/img/logo.png"></div>
          <div class="yd-grids-txt"><span>image</span></div>
        </a>
      </div>
    </div>
    <div class="zhongjian">
      <yd-timeline>
        <yd-timeline-item>
          <p class="zhongjian_title">2017-08-18 08:24:18</p>
          <p>【南宁市】您的订单正在配送途中，请您准备签收，感谢您的耐心等待。京东扫码付，单单享立减。</p>

        </yd-timeline-item>
        <yd-timeline-item>
          <p class="zhongjian_title">2017-08-18 07:25:08</p>
          <p>【南宁市】您的订单已到达【南宁安吉站】</p>

        </yd-timeline-item>
        <yd-timeline-item>
          <p class="zhongjian_title">2017-08-17 21:44:08</p>
          <p>【南宁市】您的订单在京东【南宁分拨中心】发货完成，准备送往京东【南宁安吉站】</p>
        </yd-timeline-item>
      </yd-timeline>
      <div class="end">
        <div class="end1">
          <img src="../../static/image/3215648965.jpg">
        </div>
        <div class="end2">
          <div class="end2_text">
            <p>aaaaaaaaaaaaaaaaaaaaaaaa</p>
            <span>100</span>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script type="">
  import Header from './header'

  export default {
    components: {Header}


  }
</script>
<style scoped>


  /*.Nav {*/
  /*text-align: center;*/
  /*height: 70px;*/
  /*padding: 20px 0 0;*/
  /*background: #ffffff;*/
  /*}*/

  .zhongjian {
    margin-top: 20px;
    text-align: left;
  }

  .zhongjian_title {
    margin-top: 10px;
  }

  .end {

  }

  .end1 {
    width: 50%;
    height: 10%;
    padding: 3%;
    float: left;
    background-color: white;
    margin-top: 2%;
  }

  .end1 img {
    margin-left: 4%;
    width: 90%;
    height: 90%;
  }

  .end2 {
    float: right;
    width: 50%;
    background-color: white;
    margin-top: 2%;
    text-align: center;
  }

  .end2_text {
    margin: auto;
    width: 70%;
    margin-top: 8%;
    font-size: 20px;
    text-align: left;
  }

  .end2_text span {
    color: gray;
    font-size: 15px;
    float: right;
  }
</style>

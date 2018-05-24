<template>
  <div class="yd-flexview">

    <Header></Header>

    <Swiper></Swiper>

    <Nav></Nav>

    <time-line></time-line>

    <Article></Article>
  </div>
</template>

<script type="">
  import Header from '../components/header'
  import Swiper from '../components/Swiper'
  import Nav from '../components/Nav'
  import timeLine from '../components/timeLine'
  import Article from '../components/article'

  export default {
    components:
      {
        Header,
        Swiper,
        Nav,
        timeLine,
        Article
      }


  }
</script>
<style scoped>


  /*.Nav {*/
  /*text-align: center;*/
  /*height: 70px;*/
  /*padding: 20px 0 0;*/
  /*background: #ffffff;*/
  /*}*/





</style>

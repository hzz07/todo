<template>
  <div class="tou">
    <a href="#/"><span class="zhengsi1">征4</span></a>
    <span class="zhengsi2">工商大道第四届中国经营者隔壁远征</span>
    <a href="#/gerenxinxi"><span class="zhengsi3">个人信息</span></a>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .tou {
    background: -webkit-linear-gradient(#b21b1e,#680d0c); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#b21b1e,#680d0c); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#b21b1e,#680d0c); /* Firefox 3.6 - 15 */
    background: linear-gradient(#b21b1e,#680d0c); /* 标准的语法 */
    position: relative;

    line-height: 70px;
    border-bottom: 1px solid rgba(0,0,0,.2);
  }

  .tou .zhengsi1 {
    float: left;
    color: white;
    font-size: 40px;
    font-weight: 600;
    font-style: italic;
    margin-left: 2%;
  }

  .tou .zhengsi2 {
    text-align: center;
    color: white;
    font-style: italic;

  }

    .zhengsi3 {
      color: white;
    float: right;
    font-size: 20px;
    margin-right: 2%;
    font-style: italic;
  }
</style>

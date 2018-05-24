<template>
  <div class="c4-notice c4-colbg">
    <ul>
      <li v-for="item in list"><a href="javascript;:">
        <time><img src="/static/image/icon1.jpg">{{item.at}}</time>
        <h3>{{item.title}}</h3>
      </a></li>
    </ul>
  </div>
</template>
<script>
  import home  from '../api/home'
  export default {


      data() {
        return {
          list: []
        }
      },

      mounted() {
        home.getTimeline(data => {
          this.list = data
        })

      }
    }
</script>

<style scoped>
  .c4-notice {
    padding: 20px 20px;
    float: left;
    width: 100%;
    box-sizing: border-box
  }

  .c4-notice li {
    width: 100%;
    float: left;
    border-bottom: 1px solid #dbd9d9;
    padding-right: 10px;
    box-sizing: border-box;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .c4-notice li img {
    float: left;
    margin-right: 10px;
    height: 100%;
  }

  .c4-notice li time {
    font-size: 16px;
    padding-left: 8px;
    font-weight: bold;
    text-align: left;
  }

  .c4-notice li time img {
    margin-left: -14px;
    margin-top: 5px;
  }

  .c4-notice li h3 {
    text-align: left;
    font-size: 14px;
    color: #333;
    border-left: 2px solid #ddd;
    padding-left: 20px;
    color: #6f6e6e;
    margin: 10px 0;
    font-weight: 400
  }

</style>

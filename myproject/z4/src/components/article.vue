<template>
  <div class="c4-newlist c4-colbg">
    <ul>
      <li v-for="item in list"><a href="#"> <img :src='item.icon|src'>
        <h3>{{item.title}}</h3>
        <div class="people">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liulan"/>
          </svg>
          {{item.views}}
        </div>
      </a></li>
    </ul>
  </div>
</template>
<script>
  import home  from '../api/home'
  import Static from  '../config/index'
  export default {
    data() {
      return {
        list: []
      }
    },
    filters:{

      src(val){

        if(val){
          return Static.STATIC_URL+val;
        }
        else {
          return 'static/image/2.jpg'
        }
      }
    },
    mounted() {
      home.getNews(data => {
        this.list = data
      })

    }
  }
</script>

<style scoped>
  .c4-newlist {
    padding: 20px 20px;
    float: left;
    width: 100%;
    box-sizing: border-box
  }

  .c4-newlist li {
    position: relative;
    float: left;
    margin: 10px 0;
    width: 100%;
  }

  .c4-newlist img {
    width: 30%;
    float: left;
  }

  .c4-newlist h3 {
    text-align: left;
    width: 70%;
    float: left;
    margin: 0;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 400;
    padding-top: 10px;
  }

  .c4-newlist .people {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 14px;
    color: #cccccd
  }

  .c4-newlist .people svg {
    font-size: 18px;
  }
</style>

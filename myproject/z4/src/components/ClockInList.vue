<!--打卡历史-->
<template>
  <!-- c4-go2 -->
  <div class="c4-p2-list c4-colbg">
    <div class="c4-p2-list-tit">打卡历史详情</div>

    <!--开始-->
    <template v-for="item in list">
      <div class="c4-p2-list-tid">
        <span>{{item.month_name}}</span>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-paiming"/>
          </svg>
          {{item.km}}
        </span>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shijianzhongbiao"/>
          </svg>
          {{item.time}}
        </span>
      </div>
      <ul class="c4-p2-list-ul">
        <li v-for="clock in item.clockList" @click="toView(clock.id)">
          <a href="javascript:;">
            <span class="color01">{{clock.clock_in_at}}</span>
            <span class="color02">{{clock.km}}</span>
            <span class="color03">
              {{clock.time}}
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-20151209tubiaolianxizhuanhuan09"/>
              </svg>
            </span>
          </a>
        </li>
      </ul>
    </template>
    <!--结尾-->
  </div>
</template>
<script>
  import clock_in from '../api/clock_in'

  export default {
    data() {
      return {
        list: []
      }
    },
    methods: {
      /**
       * 跳转详情
       * @param id
       */
      toView(id) {
        this.$router.push('/clockview/' + id);
      }
    },
    mounted() {
      clock_in.find(data => {
        this.list = data;
        console.log('list', this.list);
      });
    }
  }
</script>
<style scoped>
  /*p2-go2*/
  .c4-p2-list {
    float: left;
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
  }

  .c4-p2-list-tit {
    background: #7f1a1c;
    font-size: 16px;
    padding: 10px 20px;
    color: #fff;
    text-align: left;
  }

  .c4-p2-list-tid {
    background: #edebeb;
    font-size: 14px;
    padding: 5px 0px;
    float: left;
    width: 100%;
    box-sizing: border-box;
  }

  .c4-p2-list-tid span {
    width: 33.333%;
    text-align: center;
    color: #5c5b5b;
    float: left;
  }

  .c4-p2-list-tid span svg {
    margin-right: 5px;
  }

  .c4-p2-list-ul {
    width: 100%;
    float: left;
    min-height: 175px;
    overflow: auto;
  }

  .c4-p2-list .c4-p2-list-ul li {
    font-size: 16px;
    padding: 10px 0px;
    float: left;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    border-bottom: 1px solid #ddd;
    list-style: none
  }

  .c4-p2-list .c4-p2-list-ul .color01 {
    color: #7f1a1c
  }

  .c4-p2-list .c4-p2-list-ul .color02 {
    color: #0f0a0a
  }

  .c4-p2-list .c4-p2-list-ul .color03 {
    color: #afadad
  }

  .c4-p2-list .c4-p2-list-ul li span {
    width: 33.333%;
    text-align: center;
    color: #5c5b5b;
    float: left;
  }

  .c4-p2-list .c4-p2-list-ul li span svg {
    font-size: 20px;
    position: absolute;
    right: 0
  }
</style>

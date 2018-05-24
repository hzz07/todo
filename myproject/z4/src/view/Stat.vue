<!--排行榜-->
<template>
  <div>
    <div class="yd-flexview">
      <!--头部-->
      <Header></Header>
      <div class="title">
        <div class="lf"><i @click="week">周</i><i @click="month">月</i></div>
      </div>
      <div class="nav">
        <ul>
          <li @click="setType(1)">
            <div>
              <svg class="icon" aria-hidden="true" style="color:rgb(133,182,222)">
                <use xlink:href="#icon-sudujispeedometer29"></use>
              </svg>
            </div>
            <span>总公里数</span>
          </li>

          <li @click="setType(2)">
            <div>
              <svg class="icon" aria-hidden="true" style="color:rgb(130,195,131)">
                <use xlink:href="#icon-qiandao0101"></use>
              </svg>
            </div>
            <span>打卡次数</span>
          </li>

          <li @click="setType(3)">
            <div>
              <svg class="icon" aria-hidden="true" style="color:rgb(239,147,58)">
                <use xlink:href="#icon-zuoyelicheng"></use>
              </svg>
            </div>
            <span>平均配速</span>
          </li>
        </ul>
      </div>
      <div class="title">
        <div class="lf">统计信息</div>
      </div>
      <div id="aa">

      </div>
    </div>
  </div>
</template>
<script>
  import Header from '../components/header'
  import stat from '@/api/stat'

  let echarts = require('echarts');

  export default {
    data() {
      return {
        result: {},
        is_striker: 0,
        type: 1,
        dataType: 1,
        xAxisData: [],
        seriesData: [],
      }
    },
    components: {
      Header
    },
    mounted() {
      this.get()
    },
    methods: {
      week() {
        this.dataType = 1
        this.get()
      },
      month() {
        this.dataType = 2
        this.get()
      },
      setType(val) {
        this.type = val
        this.get()
      },
      setStriker() {
      },
      createChart() {
        let dom = document.getElementById("aa");
        let myChart = echarts.init(dom);
        let option = null;
        let tp = 'Km'
        if(this.type == 1){tp = 'km'}
        if(this.type == 2){tp = '次'}
        if(this.type == 3){tp = 'km/h'}
        option = {
          xAxis: {
            type: 'category',
            data: this.xAxisData
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}'+tp
            }
          },
          series: [{
            data: this.seriesData,
            type: 'line'
          }]
        }
        ;
        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }
      },
      get() {
        if (this.dataType == 1) {
          stat.getWeek_list(data => {
            this.setData(data)
          })
        } else {
          stat.getMonth_list(data => {
            this.setData(data)
          })
        }
      },
      setData(data) {
        if (data.status) {
          this.result = data.result
          this.xAxisData = this.result.date
          if (this.type == 3) {
            this.seriesData = this.result.pace
          } else if (this.type == 2) {
            this.seriesData = this.result.cnt
          } else {
            this.seriesData = this.result.km
          }
          this.createChart()
        }
        // console.log(this.result)
      }
    }
  }
</script>
<style scoped>
  .yd-list-theme1 {
    padding: 0;
  }

  /*p4-go1*/
  .title {
    background-color: #bd3f38;
    width: 100%;
    height: 35px;
    float: left;
  }

  .title .lf {
    font-size: 0.3rem;
    color: #fff;
  }

  .title .lf i {
    display: block;
    float: left;
    text-align: center;
    line-height: 29px;
    margin: 3px 0px 3px 13px;
    width: 100px;
    border-radius: 5px;
    background-color: #ed3f14;
    cursor: pointer;
  }

  .title .lf i:active{
    background-color: #e6a200;
  }

  .nav {
    background-color: #fff;
  }

  #container {
    background-color: #fff;
    padding-left: 50px;
    overflow: hidden;
  }

  .nav {
    height: 2.3rem;
    width: 100%;
    background: #fff;
  }

  .nav ul {
    list-style: none;
  }

  .nav ul li {
    width: 33.3333%;
    text-align: center;
    float: left;
    font-size: 0.3rem;
    line-height: 0.7rem;
    cursor: pointer;
    padding: 0.26rem;
  }

  .nav ul li:hover {
    background-color: #4fdf6f;
  }

  .nav ul li a {
    color: #000;
  }

  .icon {
    font-size: 1rem;
  }
  #aa{
    height: 300px;
    width: 100%;
    margin: auto;
  }
</style>

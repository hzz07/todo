<template>
  <div class="yd-flexview">
    <Header></Header>
    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">

      <yd-list theme="1" slot="list">
      <div class="c4-p4-tab">
        <ul class="c4-p4-tab-box">
          <li><a href="javascript:;" :class="type==1?'active':''" @click="setType(1)">月公里数</a></li>
          <li><a href="javascript:;" :class="type==2?'active':''" @click="setType(2)">月打卡次数</a></li>
          <li><a href="javascript:;" :class="type==3?'active':''" @click="setType(3)">平均配速</a></li>
        </ul>
      </div>
      <div class="title">

        <div class="title_img">
          <img src="../../static/image/xxx.jpg" alt="">
          <span>排行榜</span>
        </div>

      <div class="title_xuanxiang">
       <div class="title_xuanxiang1">
         <input id="checkbox-1-1" class="regular-checkbox" type="checkbox" v-model="is_striker" @change="setStriker">
         <label for="checkbox-1-1"></label>
         <span>只显示冲锋队</span>
       </div>
      </div>
    </div>
      <div data-v-08105cb1="" class="c4-p2-list-tid">
        <span data-v-08105cb1="">姓名</span>
        <span data-v-08105cb1="">昵称</span>
        <span data-v-08105cb1="" v-show="type==1">月公里数</span>
        <span data-v-08105cb1=""  v-show="type==2">月打卡次数</span>
        <span data-v-08105cb1=""  v-show="type==3">平均配速</span>
      </div>
      <div class="c4-p4-list ">
      <ul>

        <li v-for="(item, index) in list">
          <div class="c4-p4-list-01">
            <img src="../../static/image/xtb.jpg" class="c4-p4-list-02-bt" v-show="item.is_striker==1">
            <i class="c4-p4-list01-font01" v-show="index==0">{{index+1}}</i>
            <i class="c4-p4-list01-font02" v-show="index==1">{{index+1}}</i>
            <i class="c4-p4-list01-font03" v-show="index==2">{{index+1}}</i>
            <i class="c4-p4-list01-font04" v-show="index>2">{{index+1}}</i>

            <img :src="item.avatar" class="c4-p4-list-01-img">
            <h3>{{item.name}}</h3>
            <span v-show="item.is_striker==1">冲锋队成员</span>
          </div>
          <div class="c4-p4-list-02">{{item.nickname}}</div>
          <div class="c4-p4-list-03" v-show="type==1">{{item.total_km}}Km</div>
          <div class="c4-p4-list-03" v-show="type==2">{{item.cnt}}次</div>
          <div class="c4-p4-list-03" v-show="type==3">{{item.avg_pace}}</div>
        </li>
      </ul>
    </div>
      </yd-list>

      <!-- 数据全部加载完毕显示 -->
      <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

      <!-- 加载中提示，不指定，将显示默认加载中图标 -->
      <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

    </yd-infinitescroll>
  </div>

</template>


<script>
  import Header from '../components/header'
  import user from '../api/user'
  import config from '../config/index'
  export default {
    data(){
      return{
        src:config.STATIC_URL,
        type:1,
        is_striker: 0,
        list:[],
        page:1,
      }

    },
    components:{
      Header,

    },
    methods:{
      setType(val){
        this.type=val;
      }
    },
    mounted(){
      this.get()
    },
    methods:{
      loadList() {
        this.page += 1;
        this.get();
      },
      setType(val){
        this.type=val;
        this.list = [];
        this.page=1;
        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.reInit');
        this.get()

      },
      setStriker(){
        this.list = [];
        this.page = 1;
        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.reInit');
        this.get();
      },
      get() {
        let p = {page: this.page, is_striker: this.is_striker == true ? 1 : 0};
        if (this.type == 1) {
          user.getKm_List(p, data => {
            if (data.length == 0) {
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
            } else {
              for (let i = 0; i < data.length; i++) {
                this.list.push(data[i]);
              }
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
            }
          })
        } else if (this.type == 2) {
          user.getCount_List(p, data => {
            if (data.length == 0) {
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
            } else {
              for (let i = 0; i < data.length; i++) {
                this.list.push(data[i]);
              }
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
            }
          })
        } else if (this.type == 3) {
          user.getPace_List(p, data => {
            if (data.length == 0) {
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
            } else {
              for (let i = 0; i < data.length; i++) {
                this.list.push(data[i]);
              }
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
            }

          })
        }
      }
    }
  }
</script>

<style scoped>
  .c4-p4-tab  {
    background: #912f2f;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgba(0,0,0,.2);
  }
  .c4-p4-tab .c4-p4-tab-box li {
    float: left;
    width: 33.333%;
    text-align: center;
    font-size: 17px;
  }

  .c4-p4-tab .c4-p4-tab-box li a {
    color: #fff !important;
    padding: 5px 20px;
    display: inline-block
  }

  .c4-p4-tab .c4-p4-tab-box li .active {
    display: inline-block;
    padding: 5px 20px;
    color: #333;
    transform: skew(-10deg);
    border: 1px solid rgba(0,0,0,.2);
    background: #c56a20;
    height: 41px;
  }
  .title{
    background-color:white;
    padding: 10px 20px;
    width: 100%;
    float: left;
    box-sizing: border-box;
  }
  .title_img{
    float: left;
    width: 50%;
  }
  .title_img img{
    float: left;
  }
  .title_img span{
    float: left;
    padding: 0;
    font-size: 20px;
    font-weight: 400;
    margin-top: 40px;
    margin-left: 10px;
  }
  .title_xuanxiang {
    width: 50%;
    float: left;
    text-align: center;
  }
  .title_xuanxiang1{
    width: 100%;
    margin-top:45px;

  }
  .title_xuanxiang1 input{
    width: 25px;
    height: 25px;
  }

  .c4-p2-list-tid {
    background-color: darkred;
    font-size: 14px;
    padding: 5px 0px;
    float: left;
    width: 100%;
    box-sizing: border-box;
  }

  .c4-p2-list-tid span {
    width: 33.333%;
    text-align: center;
    color:white;
    float: left;
  }

  .c4-p2-list-tid span svg {
    margin-right: 5px;
  }
  .c4-p4-list {
    padding: 0 20px;
    width: 100%;
    float: left;
    box-sizing: border-box;
    background: #fff
  }

  .c4-p4-list li {
    float: left;
    width: 100%;
    height: 100px;
    line-height: 100px;
    border-bottom: 1px solid #ddd
  }

  .c4-p4-list-01, .c4-p4-list-02 {
    float: left;
    width: 33.333%;
    text-align: center;
    position: relative;
  }
  .c4-p4-list-03{
    width: 33.333%;
    text-align: center;
    position: relative;
    float: right;
  }
  .c4-p4-list-01{
    width: 45%;
  }
  .c4-p4-list-02 {
    width: 25%;
  }

  .c4-p4-list-03 {
    width: 30%;
  }

  .c4-p4-list-01 i {
    float: left;
    font-size: 30px;
    font-style: normal;
  }

  .c4-p4-list-01 .c4-p4-list-01-img {
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 25px 5px 0 5px
  }

  .c4-p4-list-01 .c4-p4-list-02-bt {
    position: absolute;
    left: -5px;
    top: 5px;
    width: 30px;
    height: 30px;
  }

  .c4-p4-list-01 h3 {
    float: left;
    margin: 0;
    padding: 0;
    font-weight: 400;
    margin-left: 5%;
  }

  .c4-p4-list-01 span {
    position: absolute;
    right: 30px;
    bottom: 10px;
    line-height: 0;
    background: #eca11e;
    padding: 10px 5px;
    color: #fff;
    font-size: 12px;
    border-radius: 5px;
    display: inline-block;
  }

  .c4-p4-list-01 .c4-p4-list01-font01 {
    font-weight: bold;
    color: #bd3f38
  }

  .c4-p4-list-01 .c4-p4-list01-font02 {
    font-weight: bold;
    color: #ea6464
  }

  .c4-p4-list-01 .c4-p4-list01-font03 {
    font-weight: bold;
    color: #eb8619
  }

  .c4-p4-list-02 {
  }

  .c4-p4-list-03 {
  }
</style>

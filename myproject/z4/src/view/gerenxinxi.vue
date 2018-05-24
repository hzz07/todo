<template>
  <div class="yd-flexview">
    <Header></Header>
    <div class="touxiang">
        <a href="#/user"><span><i class="el-icon-edit"></i></span></a>
        <div class="touxiang1">
          <a href="#/user"><img :src="src" alt=""></a>
        </div>
      <div class="biaoqian">
        <h1>{{from.nickname}}</h1>
        <p>{{from.introduction}}</p>
        <template>
          <yd-button size="small" type="warning" shape="circle" v-show="from.is_striker">冲锋队员</yd-button>
        </template>
      </div>

    </div>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">姓名：</span>
        <yd-input slot="right"  v-model="from.name" max="8"  readonly="readonly"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">手机号：</span>
        <yd-input slot="right"  v-model="from.phone" max="11" readonly="readonly"></yd-input>
      </yd-cell-item>

      <yd-cell-item>
        <span slot="left">昵称：</span>
        <yd-input slot="right"  v-model="from.nickname" max="16" readonly="readonly"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">月目标量（公里数）：</span>
        <yd-input slot="right"  v-model="from.km"  readonly="readonly"></yd-input>
      </yd-cell-item>
      <yd-cell-group title="心情语录：">
        <yd-cell-item>
          <yd-input slot="right" placeholder="生命不在于长，而在于好" maxlength="100" disabled></yd-input>
        </yd-cell-item>
      </yd-cell-group>
      <label class="yd-cell-item">
        <span class="yd-cell-left">
          <span class="yd-cell-icon"></span>
          <div>是否是冲锋队员：
          </div>
        </span>
        <label class="yd-cell-right">
          <yd-radio-group v-model="from.is_striker">
            <yd-radio val="1">是</yd-radio>
            <yd-radio val="0">否</yd-radio>
          </yd-radio-group>
        </label>
      </label>

    </yd-cell-group>
  </div>

</template>

<script>
  import Header from '../components/header'
  import Xixi from '../api/xinxi'
  import config from '../config/index'
  export default {
    data(){
      return{
        switch1: false,
        from:{},
        src:'',
      }
    },
    mounted(){
      Xixi.find_xixi(data=>{
        this.from=data
        console.data;
        this.src=this.from.avatar
      })
    },
    components:
      {
        Header,
      }
  }
</script>

<style scoped>
  .touxiang{
    background-image: url("../../static/image/122.jpg");
    height:35%;
  }
  .touxiang1{
    width: 100px;
    height: 100px;
    border: 2px solid white;
    border-radius: 50px;
    margin: auto;
    overflow: hidden;
    margin-top: 10%;
  }
  .touxiang1 img {
    width: 100px;
    height: 100px;
  }
  .touxiang span{
    margin-top: 2%;
    margin-right: 2%;
    float: right;
    display: block;
    border: 2px solid white;
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
  .touxiang i{
    font-size: 20px;
    color: white;
  }
  .biaoqian{
    margin-top:20px;
    padding: 10px;
    width: 70%;
    margin: auto;
    color: white;
  }
  .biaoqian h1{
    font-size: 20px;
  }
  .biaoqian p{
    font-size: 14px;
  }
  .biaoqian button{
    margin-top: 3%;
  }
</style>

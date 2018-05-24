<template>
  <div class="yd-flexview">
    <Header></Header>
    <div class="context1">
      <span>个人信息修改</span>
    </div>


    <div class="context">

      <h1>头像设置</h1>
      <div class="context2">
        <FileUplod ref="upload" @input-file="inputFile" :post-action="Url">
          <img :src="src" alt="" class="touxiang">

        </FileUplod>
        <p>你可以上传JPG、GIF、PNG格式的文件，文件大小不能超过5</p>
      </div>

    </div>
    <div class="context">
      <yd-cell-item>
        <span slot="left" class="span">姓名：</span>
        <input slot="right" type="text"  placeholder="请输入电话" v-model="user_list.name" >
      </yd-cell-item>

      <yd-cell-item>
        <span slot="left">电话：</span>
        <input slot="right" type="number" placeholder="请输入电话" v-model="user_list.phone">
      </yd-cell-item>

      <yd-cell-item>
        <span slot="left">昵称：</span>
        <input slot="right" type="text" placeholder="hanahanan" v-model="user_list.nickname">
      </yd-cell-item>


      <yd-cell-item>
        <span slot="left">月目标量（公里数）：</span>
        <input slot="right" type="number" placeholder="10公里" v-model="user_list.target">
      </yd-cell-item>


      <yd-cell-group title="心情语录：">
        <yd-cell-item>
          <yd-textarea slot="right" placeholder="生命不在于长，而在于好" maxlength="100"
                       v-model="user_list.introduction">

          </yd-textarea>
        </yd-cell-item>
      </yd-cell-group>
      <label class="yd-cell-item">
        <span class="yd-cell-left">
          <span class="yd-cell-icon"></span>
          <div>是否是冲锋队员：{{user_list.Is_striker}}
          </div>
        </span>
        <label class="yd-cell-right">
          <yd-radio-group v-model="user_list.is_striker">
            <yd-radio val="1">是</yd-radio>
            <yd-radio val="0">否</yd-radio>
          </yd-radio-group>
        </label>
      </label>
      <div>
        <button type="button" class="yd-btn yd-btn-danger baocun" @click="update_user1">更新</button>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from '../components/header'
  import FileUplod from 'vue-upload-component'
  import Xinxi from '../api/xinxi'
  import Update_user from '../api/update_user'
  import config from '../config/index'
  export default {

    data() {
      return {

        Url:config.UPLOAD_URL,
        user_list: {

          name: '',
          phone: '',
          nickname: '',
          target: '',
          introduction: '',
          avatar:'',
          is_striker:''
        },
        src: '',

      }
    },
    components: {
      Header,
      FileUplod
    },
    mounted() {
      Xinxi.find_xixi(data => {
        this.user_list = data
        console.log( this.user_list);
        if(this.user_list.avatar!=''){
          this.src=config.STATIC_URL+this.user_list.avatar
        }
        else {
          this.src='../../static/image/ifle.jpg';
        }
      })
    },
    methods: {
      inputFile(newFile, oldFile) {
        //上传文件
        this.$refs.upload.active = true;

        //验证上传完成
        if (newFile && oldFile && !newFile.active && oldFile.active) {
          // 获得结果
          let data = newFile.response;
          if (data.status == "success") {
            console.log(data);
              this.src=config.STATIC_URL+data.result.path;
              this.user_list.avatar=config.STATIC_URL+data.result.path;

          }
        }
      },
      update_user1(){
        Update_user.update(this.user_list);
      }
    }

  }
</script>

<style scoped>
  .context {
    background-color: white;
  }

  .context1 {
    background-color: #d7d8da;
    line-height: 30px;
    width: 100%;
  }

  .context1 span {
    float: left;
    margin-left: 2%;
    color: darkred;
  }

  span {
    font-size: 15px;
  }

  input {
    border: 1px solid gray;
  }

  .image {
    margin: auto;
    width: 70%;
  }

  .h1 {
    float: left;
  }

  .image span {

  }

  .context h1 {
    text-align: left;
  }
  .baocun{
    width: 50%;
    margin-top: 2%;
  }
  .touxiang{
    width: 50%;
  }
</style>

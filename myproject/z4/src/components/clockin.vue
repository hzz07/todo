<template>

  <div class="xinxi">

      <yd-cell-group>
        <yd-cell-item arrow>
          <span slot="left">时间：</span>
          <yd-datetime type="datetime" v-model="form.clock_in_at" slot="right"></yd-datetime>
        </yd-cell-item>
        <yd-cell-item arrow>
          <span slot="left">用时：</span>
          <yd-datetime type="time" v-model="form.time" slot="right"></yd-datetime>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">公里数：</span>
          <yd-input slot="right" required v-model="form.km" max="20" placeholder="请输入公里数（）"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">配速：</span>
          <yd-input slot="right" required  max="0" placeholder=""></yd-input>
        </yd-cell-item>
      </yd-cell-group>

    <div class="context">

      <p>上传图片</p>

      <div class="context2">
        <file-uplod ref="upload" @input-file="inputFile" :post-action='pAaction'>
          <img :src="src" class="img_upload">
        </file-uplod>


        <div class="daka">
          <yd-button size="large" type="warning" @click.native="add">提交打卡</yd-button>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
  import FileUplod from 'vue-upload-component'
  import config from '../config/index'
  import clock_in from '../api/clock_in'

  export default {
    data() {
      return {
        form: {
          clock_in_at: '',
          km: '',
          time: '12:00',
          img: ''

        },
        pAaction: config.UPLOAD_URL,
        src: '../../static/image/moren.jpg',
      }
    },
    mounted() {
      this.form.clock_in_at = '';
      let data = new Date();
      let year = data.getFullYear();
      let month = (data.getMonth() + 1);
      if (month < 10) {
        month = '0' + month;
      }
      let day = data.getDate();
      if (day < 10) {
        day = '0' + day;
      }
      let h = data.getHours();
      if (h < 10) {
        h = '0' + h;
      }
      let m = data.getMinutes();
      if (m < 10) {
        h = '0' + m;
      }
      let mydata = year + '-' + month + '-' + day + " ";
      mydata += h + ':' + m;
      this.form.clock_in_at = mydata;
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
            console.log(data)
            this.src = config.STATIC_URL + data.result.path
            this.form.img = data.result.path
          }
        }
      },
      add() {
        clock_in.add(this.form);
      }


    },
    components: {
      FileUplod
    }

  }
</script>


<style scoped>
  .xinxi {
    background-color: white;
  }

  .yd-cell-right input {
    text-align: right;
  }

  .context {
    margin-top: 2%;
    width: 80%;
    margin: auto;
  }

  .context p {
    font-size: 18px;
    text-align: left;
  }

  button {
    margin-top: 2%;
  }

  .context1 span {
    margin-left: 0;
    margin-left: 3%;
    color: white;
  }

  .daka {
    padding: 20px 0px 20px 0px;
  }

  .img_upload {
    margin-top: 4%;
    width: 80%;
    height: 80%;
  }
</style>

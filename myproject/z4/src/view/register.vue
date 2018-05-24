<template>
  <div class="yd-flexview">
    <!--头部-->
    <Header></Header>
    <div class="center">
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">手机号：</span>
          <yd-input slot="right" required v-model="form.phone" max="11" placeholder="请输入手机号"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">姓名：</span>
          <yd-input slot="right" required v-model="form.name" max="8" placeholder="请输入姓名"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">昵称：</span>
          <yd-input slot="right" required v-model="form.nickname" max="16" placeholder="请输入昵称"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">密码：</span>
          <yd-input slot="right" type="password" v-model="form.password" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">确认密码：</span>
          <yd-input slot="right" type="password" v-model="repassword" placeholder="请再次输入密码"></yd-input>
        </yd-cell-item>
      </yd-cell-group>
    </div>

    <div class="zhuce">
      <yd-button size="large" type="danger" @click.native="register">注册</yd-button>
    </div>
    <div class="denglu">
      <yd-button size="large" type="primary" @click.native="loginIn">登陆</yd-button>
    </div>

  </div>

</template>

<script>
  import Header from '../components/header'
  import user from '../api/user'
  import {Toast} from 'vue-ydui/dist/lib.rem/dialog';
  export default {
    data() {
      return {
        fullscreenLoading: false,
        form:
          {
            name: '',
            nickname: '',
            phone: '',
            password: '',

          },
        repassword: ''


      }

    },
    components: {
      Header
    },
    methods: {
      loginIn() {
        this.$router.push({path: 'login'})
      },
      /*注册*/
      register() {
        if (this.repassword != this.form.password) {
          Toast({
            mes: '两次输入密码不一致，请重新输入！',
            timeout: 1500,
            icon: 'error',
          });

        }
        else {
          user.register(this.form)
        }
      }
    }
  }
</script>

<style scoped>

  .zhuce {
    margin-top: 25%;
    padding: 0px 10px 0px 10px;
  }

  .denglu {
    padding: 0px 10px 0px 10px;
  }
</style>

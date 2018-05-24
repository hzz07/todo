<template>
  <div class="yd-flexview">
    <!--头部-->
    <Header></Header>
    <div class="center">
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">用户名：</span>
          <yd-input slot="right" required v-model="form.phone" max="11" placeholder="请输入手机号"></yd-input>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">密码：</span>
          <yd-input slot="right" type="password" v-model="form.password" placeholder="请输入密码"></yd-input>
        </yd-cell-item>
      </yd-cell-group>
    </div>

    <div class="denglu">
      <yd-button size="large" type="primary" @click.native="loginIn">登录</yd-button>
    </div>
    <div class="zhuce">

      <yd-button size="large" type="danger" @click.native="register">注册</yd-button>

    </div>

  </div>

</template>

<script>
  import Header from '../components/header'
  import user from '../api/user'

  export default {
    data() {
      return {
        form: {
          phone: '',
          password: ''
        }

      }

    },
    components: {
      Header
    },
    methods: {
      register(){
        this.$router.push({path:'register'})
      },
      loginIn(){

        user.login(this.form)
      },

    }
  }
</script>

<style scoped>
  .yd-flexview{
    background-image: url("../../static/image/01-4.jpg");

    width: 100%;
  }
  .denglu {
    margin-top: 90%;
    padding: 0px 10px 0px 10px;
  }

  .zhuce {
    padding: 0px 10px 0px 10px;
  }

</style>

<template>
  <div>
    <el-image style="width: 45%; margin: 10px auto;" :src="require('../../assets/logo.png')"/>
    <div v-show="dialogFormVisible">
      <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible">
        <camera-login v-bind:isVisible="dialogFormVisible"/>
      </el-dialog>
    </div>
    <el-card class="login-banner">
      <div slot="header" class="clearfix">
        <span class="welcome_span">欢迎登录</span>
      </div>
      <user-login/>
      <el-button type="text" @click="ejectDialog">切换登录方式</el-button>
      <el-button type="text" @click="gotoRegister">注册</el-button>
    </el-card>
  </div>
</template>
<script>
import UserLogin from './UserLogin'
import CameraLogin from './CameraLogin'
export default {
  name: 'EndLogin',
  components: {
    CameraLogin,
    'user-login': UserLogin
  },
  data () {
    return {
      dialogFormVisible: false,
      dialogTitle: '面部识别登录'
    }
  },
  methods: {
    ejectDialog () {
      this.dialogFormVisible = true
    },
    gotoRegister () {
      this.$router.push({name: 'Register'})
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .login-banner{
    width: 500px;
    height: 340px;
    position: relative;
    top: 2vh;
    left: 50%;
    margin-left: -250px;
  }
  .welcome_span{
    color: #00d9e1;
  }

</style>

<template>
  <el-form class="inputLogin">
      <el-input
        v-model="account"
        placeholder="请输入账号"
        auto-complete="new-password"
        size="large"
        prefix-icon="el-icon-user">
      </el-input>
      <el-input
        v-model="password"
        placeholder="请输入密码"
        size="large"
        prefix-icon="el-icon-key"
        show-password>
      </el-input>
      <el-button
        type="primary"
        size="medium"
        style="width: 200px; margin-top: 20px"
        @click="login">
        登录
      </el-button>
  </el-form>
</template>
<script>
import {functions} from '../../js/function'

export default {
  name: 'UserLogin',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.account === '') {
        functions.showErrorMessage('请输入工号')
      } else {
        if (this.password === '') {
          functions.showErrorMessage('请输入密码')
        } else {
          const params = new URLSearchParams()
          params.append('account', this.account)
          params.append('password', this.password)
          this.axios.post('/user/login', params)
            .then((response) => {
              if (response.data.code === '0000') {
                functions.showSuccessMessage('登录成功')
                this.$router.push({name: 'Main'})
              } else {
                functions.showErrorMessage('账号或密码错误')
              }
            }).catch(function (error) {
              functions.showErrorMessage('登录失败')
              console.log(error)
            })
        }
      }
    }
  }
}
</script>

<style scoped>
  .inputLogin{
    margin: 15px auto;
    width: 300px;
  }
  .inputLogin div{
    margin: 15px auto;
  }
</style>

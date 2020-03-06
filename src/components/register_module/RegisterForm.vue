<template>
  <el-card class="box-card">
    <el-form ref="registerform" :model="form" rules="ruler" label-position="left" label-width="70px" size="mini">
      <el-form-item label="姓名" prop="username">
        <el-input
          v-model="form.username"
          placeholder="请输入姓名"
          size="large"
          prefix-icon="el-icon-view">
        </el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input
          v-model="form.age"
          placeholder="请输入年龄"
          size="large"
          prefix-icon="el-icon-date"
          >
        </el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-input
          v-model="form.sex"
          placeholder="请输入性别"
          size="large"
          prefix-icon="el-icon-sort">
        </el-input>
      </el-form-item>
      <el-form-item label="账号" prop="account">
      <el-input
        v-model="form.account"
        placeholder="请输入账号"
        auto-complete="new-password"
        size="large"
        prefix-icon="el-icon-user">
      </el-input>
    </el-form-item>
      <el-form-item label="密码" prop="password">
      <el-input
        v-model="form.password"
        placeholder="请输入密码"
        size="large"
        prefix-icon="el-icon-key"
        show-password>
      </el-input>
      </el-form-item>
    <el-form-item label="确认密码" prop="rePassword">
      <el-input
        v-model="form.rePassword"
        placeholder="请在输入一次密码"
        size="large"
        prefix-icon="el-icon-key"
        show-password>
      </el-input>
    </el-form-item>
    </el-form>
      <el-button
        type="primary"
        size="medium"
        style="width: 200px; margin-top: 20px"
        @click="register">
        注册
      </el-button>
  </el-card>
</template>
<script>

import {functions} from '../../js/function'
export default {
  name: 'RegisterForm',
  data () {
    return {
     form:{
      sex:'',
      age:'',
      username:'',
      account: '',
      password: '',
      rePassword:''
     }
    }
    rules:{
      username:[
        { required: true, //是否必填
          message: '姓名不能为空', //规则
          trigger: 'blur' //何事件触发
        },
      ]
    }
  },
  methods: {
    register (form) {
      if(form.username.value==''){
        alert('用户名不能为空！');
        form.username.focus();
        return false;
      }
      if(form.password.value==''){
        alert('密码不能为空！');
        form.password.focus();
        return false;
      }
      if(form.password.value.length<6){
        alert('密码至少为6位，请重新输入！');
        form.password.focus();
        return false;
      }

      /*var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };*/
      /*if (this.account === '') {
        functions.showErrorMessage('请输入工号')
      } else {
        if (this.password === '') {
          functions.showErrorMessage('请输入密码')
        }
        if (this.rePassword === '') {
          functions.showErrorMessage('请确认密码')
        }else{
          const params = new URLSearchParams()
          params.append('form.account', this.account)
          params.append('form.password', this.password)
          this.axios.post('/user/login', params)
            .then((response) => {
              if (response.data.code === '0000') {
                functions.showSuccessMessage('注册成功')
                this.$router.push({name: 'Main'})
              }
            }).catch(function (error) {
            functions.showErrorMessage('注册失败')
            console.log(error)
          })
        }
      }*/
    }
  }
}
</script>

<style scoped>
  .box-card{
    width: 400px;
    height: 700px;
  }

</style>

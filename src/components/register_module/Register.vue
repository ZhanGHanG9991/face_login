<template>
  <div>
    <el-row>
      <el-image style="width: 20%; margin: 10px 10px;float: left" :src="require('../../assets/logo.png')"/>
    </el-row>
    <el-row>
      <el-col :span="8" :offset="5">
        <register-canvas />
      </el-col>
      <el-col :span="8">
        <register-form />
      </el-col>
    </el-row>

  </div>
</template>

<script>
import RegisterCanvas from './RegisterCanvas'
import RegisterForm from './RegisterForm'
export default {
  name: 'Register',
  components: {
    'register-canvas': RegisterCanvas,
    'register-form': RegisterForm
  }
}
</script>

<style scoped>

</style>

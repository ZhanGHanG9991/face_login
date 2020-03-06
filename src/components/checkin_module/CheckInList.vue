<template>
  <div>
    <check-in-search/>
    <el-card shadow="hover" class="box-card">
<!--      签到表格写在这里-->
    </el-card>
  </div>
</template>

<script>
import CheckInSearch from './CheckInSearch'
export default {
  name: 'CheckInList',
  components: {
    'check-in-search': CheckInSearch
  }
}
</script>

<style scoped>
  .box-card{
    margin-top: 2vh;
    height: calc(92vh - 150px);
    position: relative;
  }
</style>

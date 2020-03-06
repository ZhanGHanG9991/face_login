<template>
  <el-container>
    <el-aside width="200px" class="left-menu">
      <left-menu/>
    </el-aside>
    <el-container>
      <el-header height="60px" style="padding: 0">
        <top-banner/>
      </el-header>
      <el-main class="container-main">
        <student-module v-if="(this.$store.state.moduleState & 0xFFF0) === this.MODULE_STATES.STUDENT_MODULE"/>
        <check-in-module v-if="(this.$store.state.moduleState & 0xFFF0) === this.MODULE_STATES.CHECKIN_MODULE"/>
        <show-video-module v-if="(this.$store.state.moduleState & 0xFFF0) === this.MODULE_STATES.SHOWVIDEO_MODULE"/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

import TopBanner from './menu_module/TopBanner'
import LeftMenu from './menu_module/LeftMenu'
import StudentList from './student_module/StudentList'
import StudentModule from './StudentModule'
import {MODULE_STATES} from '../js/constvariable'
import CheckInModule from "./CheckInModule";
import ShowVideoModule from "./ShowVideoModule";

export default {
  name: 'Main',
  components: {
    ShowVideoModule,
    CheckInModule,
    StudentModule,
    StudentList,
    'top-banner': TopBanner,
    'left-menu': LeftMenu
  },
  data () {
    return {
      MODULE_STATES: MODULE_STATES
    }
  }
}
</script>

<style scoped>
  .container-main{
    background-color: #f0f2f5;
    height: calc(100vh - 60px);
  }
</style>

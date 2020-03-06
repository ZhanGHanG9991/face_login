<template>
  <el-menu :unique-opened="true" default-active="2" class="el-menu-vertical-demo l-menu" text-color="#00b0b8"
           active-text-color="#00d9e1">
    <div class="nav-img">
      <el-image :src="require('../../assets/logo-main.png')" style="height: 50px; width: 200px; margin-top: 10px;"/>
    </div>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-document"/>
        <span>基础信息</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">班级信息</el-menu-item>
        <el-menu-item index="1-2" @click="setModuleState(MODULE_STATES.STUDENT_MODULE,EDIT_STATUS.STATUS_INITIAL)" >学生信息</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-edit-outline"/>
        <span>课堂信息</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1" @click="setModuleState(MODULE_STATES.CHECKIN_MODULE,EDIT_STATUS.STATUS_INITIAL)">签到信息</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-coin"/>
        <span>情绪信息</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="3-1">情绪信息</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-video-camera"/>
        <span>精彩瞬间</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="4-1" @click="setModuleState(MODULE_STATES.SHOWVIDEO_MODULE,EDIT_STATUS.STATUS_INITIAL)">精彩瞬间</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
import {MODULE_STATES, EDIT_STATUS} from '../../js/constvariable'
export default {
  name: 'LeftMenu',
  data () {
    return {
      MODULE_STATES: MODULE_STATES,
      EDIT_STATUS: EDIT_STATUS
    }
  },
  methods: {
    setModuleState (newState, editIndex, defaultInfo = {}) {
      this.$store.commit('setModuleStatus', newState)
      this.$store.commit('setEditState', editIndex)
      this.$store.commit('setNewFormInfo', {info: defaultInfo})
    }
  }
}

</script>

<style scoped>
  .l-menu {
    height: calc(100vh - 70px);
    font-weight: bold;
    border: 0;
  }

</style>

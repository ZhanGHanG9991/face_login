<template>
  <div class="div-box">
    <test-module/>
  </div>
<!--  <video :src="movie_src" controls="controls">-->
<!--    您的浏览器不支持 video 标签。-->
<!--  </video>-->
<!--  <div>-->
<!--    <el-upload class="avatar-uploader el-upload&#45;&#45;text"-->
<!--               :action="uploadUrl"-->
<!--               :show-file-list="false"-->
<!--               accept=".mp4"-->
<!--               :on-success="handleVideoSuccess"-->
<!--               :before-upload="beforeUploadVideo"-->
<!--               :on-progress="uploadVideoProcess">-->
<!--      <video v-if="this.showVideoPath !=='' && !videoFlag"-->
<!--             :src="this.showVideoPath"-->
<!--             class="avatar video-avatar"-->
<!--             controls="controls">您的浏览器不支持视频播放</video>-->
<!--      <i v-else-if="this.showVideoPath ==='' && !videoFlag"-->
<!--         class="el-icon-plus avatar-uploader-icon"/>-->
<!--      <el-progress v-if="videoFlag"-->
<!--                   type="circle"-->
<!--                   :percentage="videoUploadPercent"-->
<!--                   style="margin-top:30px;"/>-->
<!--      <el-button class="video-btn"-->
<!--                 slot="trigger"-->
<!--                 size="small"-->
<!--                 v-if="isShowUploadVideo"-->
<!--                 type="primary">选取文件</el-button>-->
<!--    </el-upload>-->
<!--    <p v-if="isShowUploadVideo"-->
<!--       class="text">请保证视频格式正确，且不超过20M</p>-->
<!--  </div>-->
</template>

<script>

import TestModule from './TestModule'

export default {
  name: 'VideoList',
  components: {
    'test-module': TestModule
  },
  // 初始化参数
  data () {
    return {
      uploadUrl: '', // 你要上传视频到你后台的地址
      videoFlag: false, // 是否显示进度条
      videoUploadPercent: '', // 进度条的进度，
      isShowUploadVideo: false, // 显示上传按钮
      showVideoPath: 'blob:https://www.bilibili.com/36955409-7c6e-4914-a4fd-39e76085ff9f',
      movie_src: ''
    }
  },
  mounted () {
    this.movie_src = 'src/assets/listening1.mp4'
  }
  // methods: {
  //   // 上传前回调
  //   beforeUploadVideo (file) {
  //     const isLt20M = file.size / 1024 / 1024 < 20
  //     if (['video/mp4'].indexOf(file.type) === -1) { // 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb'
  //       this.$message.error('请上传正确的视频格式')
  //       return false
  //     }
  //     if (!isLt20M) {
  //       this.$message.error('上传视频大小不能超过20MB哦!')
  //       return false
  //     }
  //     this.isShowUploadVideo = false
  //   },
  //   // 进度条
  //   uploadVideoProcess (event, file, fileList) {
  //     this.videoFlag = true
  //     this.videoUploadPercent = file.percentage.toFixed(0) * 1
  //   },
  //
  //   // 上传成功回调
  //   handleVideoSuccess (res, file) {
  //     this.isShowUploadVideo = true
  //     this.videoFlag = false
  //     this.videoUploadPercent = 0
  //     if (res.errorCode === '00') {
  //       this.global.company.showVideoPath = res.sprbody.urlAddress
  //       // this.videoForm.showVideoPath = res.data.uploadUrl;
  //     } else {
  //       this.$message.error('视频上传失败，请重新上传！')
  //     }
  //   }
  // }
}
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .video-avatar {
    width: 400px;
    height: 200px;
  }
  .div-box{
    width: 200px;
    height: 300px;
  }

</style>

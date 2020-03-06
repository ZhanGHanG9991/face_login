<template>
  <el-card class="box-card">
    canvas
    <div>
      <div id="camera">
        <div id="contentHolder">
          <video id="videoCamera" :width="videoWidth" :height="videoHeight" autoplay style="display: inline-block"/>
          <canvas style="display:inline-block;" id="canvasCamera" :width="videoWidth" :height="videoHeight"/>
        </div>
      </div>
      <el-button
        class="btn_camera"
        type="primary"
        size="medium"
        @click="setImage">
        拍照
      </el-button>
      </div>
  </el-card>
</template>

<script>
import {functions} from '../../js/function'

export default {
  name: 'RegisterCanvas',
  props: ['isVisible'],
  data () {
    return {
      isShown: this.isVisible,
      videoWidth: 350,
      videoHeight: 300,
      imgSrc: '',
      thisCancas: null,
      thisContext: null,
      thisVideo: null,
      ImgFile: ''// 返回的图片文件
    }
  },
  computed: {
    isVis () {
      return this.isVisible
    }
  },
  methods: {
    getCompetence () {
      this.$nextTick(function () {
        var _this = this
        this.thisCancas = document.getElementById('canvasCamera')
        this.thisContext = this.thisCancas.getContext('2d')
        this.thisVideo = document.getElementById('videoCamera')
        // 旧版本浏览器可能根本不支持mediaDevices，我们首先设置一个空对象
        if (navigator.mediaDevices === undefined) {
          navigator.mediaDevices = {}
        }
        // 一些浏览器实现了部分mediaDevices，我们不能只分配一个对象
        // 使用getUserMedia，因为它会覆盖现有的属性。
        // 这里，如果缺少getUserMedia属性，就添加它。
        if (navigator.mediaDevices.getUserMedia === undefined) {
          navigator.mediaDevices.getUserMedia = function (constraints) {
            // 首先获取现存的getUserMedia(如果存在)
            var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.getUserMedia
            // 有些浏览器不支持，会返回错误信息
            // 保持接口一致
            if (!getUserMedia) {
              return Promise.reject(new Error('getUserMedia is not implemented in this browser'))
            }
            // 否则，使用Promise将调用包装到旧的navigator.getUserMedia
            return new Promise(function (resolve, reject) {
              getUserMedia.call(navigator, constraints, resolve, reject)
            })
          }
        }

        var constraints = { audio: false, video: { width: this.videoWidth, height: this.videoHeight, transform: 'scaleX(-1)' } }
        navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
          // 旧的浏览器可能没有srcObject
          if ('srcObject' in _this.thisVideo) {
            _this.thisVideo.srcObject = stream
          } else {
            // 避免在新的浏览器中使用它，因为它正在被弃用。
            _this.thisVideo.src = window.URL.createObjectURL(stream)
          }
          _this.thisVideo.onloadedmetadata = function (e) {
            _this.thisVideo.play()
          }
        }).catch(err => {
          console.log(err)
        })
      })
    },
    setImage () {
      var _this = this
      // 点击，canvas画图
      _this.thisContext.drawImage(_this.thisVideo, 0, 0, _this.videoWidth, _this.videoHeight)
      // 获取图片base64链接
      var image = this.thisCancas.toDataURL('image/png')
      _this.imgSrc = image
    },
    dataURLtoFile (dataurl, filename) {
      var arr = dataurl.split(',')
      var mime = arr[0].match(/:(.*?);/)[1]
      var bstr = atob(arr[1])
      var n = bstr.length
      var u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    },
    handleUpdata () { // 已form提交
      if (this.imgSrc !== '') {
        let file = this.imgSrc // 把整个base64给file
        // eslint-disable-next-line no-unused-vars
        let type = 'image/png' // 定义图片类型（canvas转的图片一般都是png，也可以指定其他类型）
        let time = (new Date()).valueOf()// 生成时间戳
        let name = time + '.png' // 定义文件名字（例如：abc.png ， cover.png）
        let conversions = this.dataURLtoFile(file, name) // 调用base64转图片方法
        console.log(conversions)
        let parms = new FormData()
        parms.append('file', conversions)
        let url = '/file/upload'// 你的接口
        this.axios.post(url, parms, {headers: {'Content-Type': 'multipart/form-data'}})
          .then(res => {
            this.ImgFile = res.data
            functions.showSuccessMessage('上传成功')
          }).catch(err => {
          console.log(err)
          functions.showErrorMessage('上传失败')
        })
      } else {
        functions.showErrorMessage('请拍摄照片')
      }
    },
    stopNavigator () {
      this.thisVideo.srcObject.getTracks()[0].stop()
    }
  },
  mounted () {
    this.getCompetence()
  },
  watch: {
    isVis () {
      if (!this.isVis) {
        this.stopNavigator()
      } else {
        this.getCompetence()
      }
    }
  }
}
</script>

<style scoped>
.btn_camera{
  width: 100px;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
#canvasCamera{
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.box-card{
  width: 400px;
  height: 700px;
}
</style>

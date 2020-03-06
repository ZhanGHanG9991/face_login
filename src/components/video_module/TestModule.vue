<template>
  <div class="container">
    <div class="player">
      <video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerOptions"
                     @play="onPlayerPlay($event)"
                     @pause="onPlayerPause($event)"
      >
      </video-player>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
export default {
  props: ['addr', 'posters'],
  data () {
    return {
      playerOptions: {
        //        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4',
          src: this.addr
          // src: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909' // 你的视频地址（必填）
        }],
        poster: this.posters,
        // poster: 'http://img0.imgtn.bdimg.com/it/u=2285668848,902321880&fm=26&gp=0.jpg', // 你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    }
  },
  components: {
    videoPlayer
  },
  methods: {
    onPlayerPlay (player) {
      // alert('play')
    },
    onPlayerPause (player) {
      // alert('pause')
    },
    judgeUn () {
      if (typeof (this.addr) === 'undefined') {
        return false
      }
      return true
    }
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  watch: {
    addr (newName, oldName) {
      this.addr = newName
    },
    posters (newName, oldName) {
      this.posters = newName
      console.log(this.posters)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
  .container {
    background-color: #efefef;
    min-height: 100%;
  }
</style>

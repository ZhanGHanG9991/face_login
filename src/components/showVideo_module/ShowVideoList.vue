<template>
  <div>
    <show-video-search/>
    <el-card shadow="hover" class="box-card">
      <el-divider content-position="right">精彩瞬间</el-divider>
      <div style="height: 58vh">
        <div class="video-row" v-if="!showOut"></div>
        <div class="video-row" v-if="!showOut"></div>
        <div class="video-row" v-if="showOut">
          <transition name="el-zoom-in-center" v-show="6 * (currentPage - 1) < allVideo.length">
            <div v-show="show2" class="transition-box">
              <test-module v-bind="allVideo[6 * (currentPage - 1)]" v-if="6 * (currentPage - 1) < allVideo.length"/>
            </div>
          </transition>

          <transition name="el-zoom-in-top">
            <div v-show="show2" class="transition-box">
              <test-module v-bind="allVideo[6 * (currentPage - 1) + 1]" v-if="6 * (currentPage - 1) + 1 < allVideo.length"/>
            </div>
          </transition>

          <transition name="el-zoom-in-bottom">
            <div v-show="show2" class="transition-box">
              <test-module v-bind="allVideo[6 * (currentPage - 1) + 2]" v-if="6 * (currentPage - 1) + 2 < allVideo.length"/>
            </div>
          </transition>
        </div>
        <div class="video-row" v-if="showOut">
          <transition name="el-zoom-in-center">
            <div v-show="show2" class="transition-box">
              <test-module v-bind="allVideo[6 * (currentPage - 1) + 3]" v-if="6 * (currentPage - 1) + 3 < allVideo.length"/>
            </div>
          </transition>

          <transition name="el-zoom-in-top">
            <div v-show="show2" class="transition-box">
              <test-module v-bind="allVideo[6 * (currentPage - 1) + 4]" v-if="6 * (currentPage - 1) + 4 < allVideo.length"/>
            </div>
          </transition>

          <transition name="el-zoom-in-bottom">
            <div v-show="show2" class="transition-box">
              <test-module v-bind="allVideo[6 * (currentPage - 1) + 5]" v-if="6 * (currentPage - 1) + 5 < allVideo.length"/>
            </div>
          </transition>

        </div>
      </div>
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
        @click="show2 = !show2"
        :current-page="currentPage"
        class="page-ination"
        :total="allVideo.length">
      </el-pagination>
    </el-card>
  </div>

</template>

<script>
import ShowVideoSearch from './ShowVideoSearch'
import TestModule from '../video_module/TestModule'
export default {
  name: 'ShowVideoList',
  components: {
    ShowVideoSearch,
    'test-module': TestModule
  },
  data () {
    return {
      showOut: true,
      show2: true,
      pageSize: 6,
      currentPage: 1,
      data1: {
        addr: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909',
        posters: 'http://img0.imgtn.bdimg.com/it/u=2285668848,902321880&fm=26&gp=0.jpg'
      },
      allVideo: [{
        addr: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909',
        posters: 'http://img0.imgtn.bdimg.com/it/u=2285668848,902321880&fm=26&gp=0.jpg'
      }, {
        addr: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909',
        posters: 'http://img0.imgtn.bdimg.com/it/u=2285668848,902321880&fm=26&gp=0.jpg'
      }, {
        addr: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909',
        posters: 'http://img0.imgtn.bdimg.com/it/u=2285668848,902321880&fm=26&gp=0.jpg'
      }, {
        addr: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909',
        posters: 'http://img0.imgtn.bdimg.com/it/u=2285668848,902321880&fm=26&gp=0.jpg'
      }, {
        addr: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909',
        posters: 'http://img0.imgtn.bdimg.com/it/u=2285668848,902321880&fm=26&gp=0.jpg'
      }, {
        addr: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909',
        posters: 'http://img0.imgtn.bdimg.com/it/u=2285668848,902321880&fm=26&gp=0.jpg'
      }, {
        addr: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909',
        posters: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1035415831,1465727770&fm=26&gp=0.jpg'
      }, {
        addr: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909',
        posters: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1035415831,1465727770&fm=26&gp=0.jpg'
      }, {
        addr: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909',
        posters: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1035415831,1465727770&fm=26&gp=0.jpg'
      }, {
        addr: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909',
        posters: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1035415831,1465727770&fm=26&gp=0.jpg'
      }, {
        addr: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909',
        posters: 'http://img0.imgtn.bdimg.com/it/u=2285668848,902321880&fm=26&gp=0.jpg'
      }, {
        addr: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909',
        posters: 'http://img0.imgtn.bdimg.com/it/u=2285668848,902321880&fm=26&gp=0.jpg'
      }, {
        addr: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909',
        posters: 'http://img0.imgtn.bdimg.com/it/u=2285668848,902321880&fm=26&gp=0.jpg'
      }, {
        addr: 'https://interface.sina.cn/wap_api/video_location.d.html?cid=37766&table_id=36885&did=imxyqvz7716721&vt=4&creator_id=1001,9764&vid=32602696801&video_id=326026968&r=video.sina.cn%2Fnews%2F2020-03-04%2Fdetail-iimxyqvz7716721.d.html&wm=304900051218378137&time=1583336108616&rd=0.126846750098909',
        posters: 'http://img0.imgtn.bdimg.com/it/u=2285668848,902321880&fm=26&gp=0.jpg'
      }]
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.currentPage = val
      setTimeout(this.setShow2Back, 200)
      setTimeout(this.hideVideo, 200)
      // // this.showOut = false
      setTimeout(this.recover, 200)
      // this.show2 = !this.show2
      setTimeout(this.setShow2Back, 200)
    },
    hideVideo () {
      this.showOut = false
    },
    recover () {
      this.showOut = true
    },
    setShow2Back () {
      this.show2 = !this.show2
    }
  }
}
</script>

<style scoped>
  .box-card{
    margin-top: 2vh;
    height: calc(92vh - 150px);
    position: relative;
  }
  .transition-box {
    margin-bottom: 10px;
    width: 360px;
    height: 180px;
    border-radius: 4px;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
    margin-right: 20px;
    margin-left: 20px;
  }
  .video-row{
    margin: 2vh auto;
    display:flex;
    justify-content:center;
    width:100%;
  }
</style>

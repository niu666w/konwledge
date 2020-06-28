<template>
  <div id="app">
    <vue-hover-mask @click="handleClick">
      <!-- 默认插槽 -->
      <img src="https://cn.vuejs.org/images/logo.png" alt="" srcset="">
      <!-- action插槽 -->
      <template v-slot:action>
        <!-- <i class="iconfont icon-bianji-copy" @click="ceshi">使用</i> -->
        <!-- <i class="iconfont icon-bianji-copy">试听</i> -->
        <el-link :underline="false" style="color:#FFF;margin-right:20px;" class="iconfont">使用</el-link>
        <el-link :underline="false" style="color:#FFF;" class="iconfont">试听</el-link>
      </template>
    </vue-hover-mask>
  </div>
</template>

<script>
import VueHoverMask from './halfOpacity'
export default {
  name: 'app',
  components:{ VueHoverMask },
  methods: {
      ceshi(){
          alert('nihaoa')
      },
    handleClick() {
      console.log('click')
    }
  }
}
</script>
<style>
/* @import url("//at.alicdn.com/t/font_1262845_52b6h42svd7.css"); */
.iconfont {
  font-size: 25px;
}
</style>
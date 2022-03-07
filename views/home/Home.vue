<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="useImg" alt="">
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2022-2-22</span></p>
          <p>上次登录地点：<span>北京</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 460px;">

      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      useImg: require('../../src/assets/images/user.png')
    }
  }
}
</script>

<style scoped>

</style>

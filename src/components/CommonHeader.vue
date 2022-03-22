<template>
  <header>
    <div class="l-content">
      <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span><img :src="useImg" class="user"></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "CommonHeader",
  data(){
    return {
      useImg: require('../assets/images/user.png')
    }
  },
  methods: {
    handleMenu(){
      this.$store.commit('collapseMenu')
    }
  },
  computed: {
     ...mapState({
      tags: state => state.tab.tabsList
     })
  }
}
</script>

<style scoped lang="less">
header {
  display: flex;
  height: 100%;
  justify-content: space-between; /*左右两端对齐*/
  align-item: center; /*上下居中*/
}
.l-content{
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
  /deep/ .el-breadcrumb__inner{
    color: #606266;
    font-weight: normal;
  }
  /deep/ .el-breadcrumb__separator{
    color: #606266;
  }
  /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner{
    color: #C0C4CC;
  }
}
.r-content{
  display: flex;
  align-items: center;
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}

</style>

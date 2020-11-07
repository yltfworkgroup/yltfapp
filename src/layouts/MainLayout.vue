<template>
  <q-layout view="lHh Lpr lFf">
    <router-view />
    <q-footer elevated>
      <div class="footerNavi">
        <q-tabs v-model="selectedTab" class="fit">
          <q-route-tab name="home" to="/home/main" icon="home">首页</q-route-tab>
          <q-route-tab name="home" to="/home/project" icon="home">项目列表</q-route-tab>
          <q-route-tab name="home" to="/home/list" icon="home">任务列表</q-route-tab>
          <q-route-tab name="home" to="/home/my" icon="home">我的</q-route-tab>
        </q-tabs>
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
import viewheader from "../components/ViewHeader";

export default {
  name: "MainLayout",
  components: {
    // viewheader
  },
  data() {
    return {
      selectedTab: "home"
    };
  }
};
</script>
<style lang='scss' scoped>
.footerNavi {
  height: 5rem;
}
</style>

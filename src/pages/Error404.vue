<template>
  <div class="Error404">
    <div class="mainStyle q-pa-lg flex flex-center">
      你的页面走丢了,404!
    </div>
    <div class="footer">
      <q-btn to="/" class="q-pt-sm q-pb-sm" color="warning" text-color="black"><q-icon name='keyboard_arrow_left'></q-icon>返回首页</q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style scoped>
.Error404{
  height:100vh;
  background-color: #1976D2;
}
.mainStyle{
  height: 80%;
  font-size: 150%;
  color: #ffffff;
}
.footer{
  display: flex;
  justify-content: center;
  color: #ffffff;
}
</style>
<template>
  <div class='viewHeader'>
    <div class="headerStyle" v-text="title"><q-icon class="backIcon" name="ArrowBackIos"></q-icon></div>
  </div>
</template>

<script>


export default {
  name:'viewHeader',
  props:{
      title:String
  },
  data () {
    return {
      
    }
  },
  computed: {},
  watch: {},
  methods: {
    
  },
  created () {},
  mounted () {
    
  },
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='scss' scoped>
.viewHeader{
    height: $headerHeight;
    .headerStyle{
        height: 100%;
        width: 100%;
        position: relative;
        font-size: 125%;
        display: flex;
        justify-content: center;
        align-items: center;
        .backIcon{
            height: 2rem;
            width: 2rem;
            position: absolute;
            top: calc(50% - 1rem);
            left: 2rem;
        }
    }
}
</style>
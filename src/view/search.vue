<template lang="">
  <div>
    <button @click="goHome()">去首页</button>
  </div>
</template>
<script>
export default {
  name:'search'
}
</script>
<script setup>
import { useRoute } from 'vue-router';
const routerObj=useRoute()
function goHome(){
  routerObj.push({
    path:'/'
  })
}
</script>
<style lang="">
  
</style>
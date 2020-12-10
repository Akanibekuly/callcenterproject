<template>
  <div id="app">  
    <router-view/>
  </div>
</template>
<script>

export default {
  
}
</script>
<style>
:root {
  --text-color: #676A6C;
}
body {
  background-color: #F3F3F4;
}
#app{
  margin: 0px;
  padding: 0px;
  position: relative;
  display: block;
}
.router-link-exact-active, .router-link-active{
    color: black;
}
</style>
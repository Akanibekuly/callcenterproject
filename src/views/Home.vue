<template>
  <div class="home">
    <SideBar v-bind:operators="operators"/>
    <Header/>
    <!-- <Login /> -->
  </div>
</template>

<script>

// @ is an alias to /src
// import Login from '@/views/Login'
import SideBar from '../views/SideBar'
import Header from '@/components/TheHeader'

export default {
  name: 'Home',
  components: {
    // Login,
    SideBar,
    Header
  }
}
</script>
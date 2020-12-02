<template>
  <div class="home">
    <SideBar />
    <Login />
  </div>
</template>

<script>

// @ is an alias to /src
import Login from '@/views/Login'
import SideBar from '../views/SideBar'
export default {
  name: 'Home',
  components: {
    Login,
    SideBar
  }
}
</script>

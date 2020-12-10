<template>
  <div class="home">
    <SideBar />
    <Header/>
    <div class="page-1">
      <div class="wrapper">
        <div class="title">
          <h1>
            <font-awesome-icon :icon="['fas', 'users']" /><strong @click="getData">Операторы</strong> 
            <TheOperatorTable :operators="operators" :show="show"/>
        </h1>
        </div>
         <div class="title">
          <h1>
            <font-awesome-icon :icon="['fas', 'chart-line']" /><strong>Статистика</strong> 
        </h1>
        </div>
         <div class="title">
          <h1>
            <font-awesome-icon :icon="['fas', 'chart-line']" /><strong>Статистика</strong> 
        </h1>
        </div>
      </div>
        
    </div>

  </div>
</template>

<script>

// @ is an alias to /src
// import Login from '@/views/Login'
import SideBar from '../views/SideBar'
import Header from '@/components/TheHeader'
import TheOperatorTable from '../components/TheOperatorTable'
import axios from 'axios'

export default {
  name: 'Statistics',
  components: {
    SideBar,
    Header,
    TheOperatorTable
  }, 
  methods: {
    getData(){
       axios.get("http://192.168.209.155:8081/operators").then(res => {
          this.operators = res.data
          }).catch(err => {
              console.log(err)
          });
          this.show = !this.show
    }
  }, 
  data(){
    return {
      operators:[],
      show: false
    }
  }
}
</script>
<style scoped>
.page-1 {
    width: 85vw;
    height: 94vh;
    color: var(--text-color);
    margin-top: 10px;
    display: inline-block;
    box-shadow: 2px 2px 2px black;
}
.wrapper {
  display: flex;
  height: 94vh;
  flex-direction: column;
}
h1 , strong {
    padding-left : 20px;
}
.title {
  margin: 20px;
  border: 1px gray solid;
  box-shadow: 2px 2px 2px gray;
  animation: slide-left 0.5s ease-in;
}
@keyframes slide-left {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
<template>
    <div id="main">
        <span style="font-size:30px;cursor:pointer" :class="{ main: toggle}" @click="navigate">&#9776; open</span>
        <div id="mySideNav" class="sidenav" :class="{ openClass: toggle }">
            <div  v-for = "(item, index) in sideBarItems" :key="index" >
              <h2> <a href=""> {{ item.value }} </a></h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "sideBarItem",
    props: ["sideBarItems", "toggle"],
    methods: {
      navigate(){
        this.toggle = !this.toggle
      }
    }
}
</script>


<style scoped>
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}


.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}
.sidenav a:hover {
  color: #f1f1f1;
}

.openClass {
    width: 250px;
}
.main {
  margin-left: 250px;
}
</style>
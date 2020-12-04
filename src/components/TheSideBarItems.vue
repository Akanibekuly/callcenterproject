<template>
    <div class="mainSideBar">
        <div class="logo">
            <h1>ЕКЦ</h1>
        </div>
        <div class="nav-menu">
            <div class="nav-menu-item" v-for=" item in sideBarItems" :key="item.id">
                <router-link class="link" :to="item.url"> <font-awesome-icon :icon="['fas', item.icon ]" /> <span>{{ item.value }}</span>  </router-link> 
            </div>    
        </div>
        
    </div>
</template>

<script>
export default {
    name: "TheSideBar",
    props:["sideBarItems"]  
}
</script>

<style scoped>
span {
    padding-left: 10px;
}
.link {
    text-decoration: none;
}
.router-link-exact-active {
    color: gray;
}
.nav-menu {
    display: flex; 
    height: 50vh;
    flex-direction: column;
}
.nav-menu-item {
    position:relative;
    padding: 10px;
    text-align: left;
    padding-left: 20px;
    margin-top: 5px;
    font-size: 15px;
}
.nav-menu-item:hover {
    background-color: #19B394;
    font-size: 20px;
}
.mainSideBar {
    width: 13vw;
    height: 100vh;
    display: inline-block;
    box-shadow: 2px 2px 2px #aaaaaa;
}
.logo {
    color: #fff;
    background-color: #19B394;
    height: 75px;
    padding: 10px;
    display: block;
    padding-left: 40px;
}
</style>
<template>
    <div id="sidebar">
       <side-bar-item v-bind:sideBarItems="navItems" v-bind:toggle="toggle"/> 
    </div>
</template>

<script>
import sideBarItem from './sideBarItem.vue'
export default {
    name: "sidebar",
    components: {
        sideBarItem
    }, 
    data() {
        return {
            navItems: [{
                id: 1, 
                value: "About",
                url: "/about"
            },
            {
                id: 2, 
                value: "Home",
                url: "/home"
            },
             {
                id: 3, 
                value: "Services",
                url: "/services"
            },
             {
                id: 4, 
                value: "Contact",
                url: "/contact"
            }],
            toggle: true
        }
    }
}
</script>
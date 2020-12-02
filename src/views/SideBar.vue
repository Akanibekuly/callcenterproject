<template>
    <div id="sidebar">
       <TheSideBarItems :sideBarItems="navItems" :toggle="toggle"/> 
    </div>
</template>

<script>
import TheSideBarItems from '../components/TheSideBarItems'
export default {
    name: "SideBar",
    components: {
        TheSideBarItems
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
            toggle: false
        }
    }
}
</script>
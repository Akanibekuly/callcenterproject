<template>
    <div id="sidebar">
       <TheSideBarItems :sideBarItems="navItems"/> 
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
                value: "Статистика",
                url: "/",
                icon: "chart-line"
            },
            {
                id: 2, 
                value: "Мониторинг",
                url: "/",
                icon: "desktop"
            },
             {
                id: 3, 
                value: "Звонки",
                url: "/",
                icon: "phone-alt"
            },
             {
                id: 4, 
                value: "Очереди",
                url: "/",
                icon: "users"
            }],
        }
    }
}
</script>
<style  scoped>
#sidebar {
    display: inline-block;
}
</style>
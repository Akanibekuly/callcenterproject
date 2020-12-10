import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import VueFusionCharts from '../vue-fusioncharts';

// import FusionCharts modules and resolve dependency
// import FusionCharts from '../vue-fusioncharts';
// import Charts from 'fusioncharts/fusioncharts.charts';

//import the theme
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'

// register VueFusionCharts component
// Vue.use(VueFusionCharts, FusionCharts, Charts, FusionTheme)

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//引入Vue
import Vue from 'vue'
//引入App组件
import App from './App'

//引入路由器
import router from './router'


//关闭生产环境提示
Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    router
})
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import http from './http'
import "./style.css";
import './plugins/filters'

Vue.config.productionTip = false

Vue.prototype.$http = http

Vue.mixin({
    computed: {
        uploadUrl() {
            return this.$http.defaults.baseURL + "/upload";
        }
    },
    methods: {
        getAuthHeaders() {
            return {
                Authorization: `Bearer ${localStorage.token || ''}`
            };
        }
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
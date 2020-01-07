import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.interceptors.request.use(
  req => {
    if (req.method === "delete") {
      req.method = "post";
      req.headers["X-HTTP-Method-Override"] = "DELETE";
    }
    return req;
  },
  error => Promise.reject(error)
);
Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

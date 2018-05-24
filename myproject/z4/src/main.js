// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import {DateTime} from 'vue-ydui/dist/lib.rem/datetime';
/* 使用px：import {DateTime} from 'vue-ydui/dist/lib.px/datetime'; */

Vue.component(DateTime.name, DateTime);
import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
import {Switch} from 'vue-ydui/dist/lib.rem/switch';
/* 使用px：import {Switch} from 'vue-ydui/dist/lib.px/switch'; */

Vue.component(Switch.name, Switch);
Vue.use(ElementUI);
Vue.config.productionTip = false

Vue.use(YDUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

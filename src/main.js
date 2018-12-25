import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import pages from '../src/components/page'
Vue.use(ElementUI);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

new Vue({
  render: h => h(pages)
}).$mount('#app')



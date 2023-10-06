import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import ViewUIPlus from 'view-ui-plus'
import VueRouter from './router'
// import './my-theme/index.less'
import './viewTheme.less'

const app = createApp(App)
app.use(VueRouter)
app.use(ViewUIPlus)
app.mount('#app')

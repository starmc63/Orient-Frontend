import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import './assets/resset.css';
import { svgIcon } from './plugins/svgIcon';
import App from './App.vue'
import router from './router'
import 'element-plus/es/components/message/style/css';
import 'element-plus/dist/index.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus);
app.use(svgIcon);

app.mount('#app')

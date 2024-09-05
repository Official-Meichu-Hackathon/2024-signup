import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

router.afterEach((to, from, failure) => {
    window.scrollTo(0, 0);
});

createApp(App).use(router).mount('#app')

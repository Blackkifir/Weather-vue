import { createApp } from 'vue'
import App from './App.vue'
import router from './route/router';
import store from '@/store';

const app = createApp(App)

app
  .use(router)
  .use(store)
  .mount('#app');

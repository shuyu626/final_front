/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createVuetify } from 'vuetify';
import '@fortawesome/fontawesome-free/css/all.css'; // 引入 Font Awesome 的 CSS
import '@mdi/font/css/materialdesignicons.css'; // 引入 Vuetify 默认的 Material Design Icons

// Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Add Font Awesome icons to the library
library.add(faCamera, faGithub);

// Vuetify setup
const vuetify = createVuetify({
  icons: {
    defaultSet: 'fa', // 设置 Font Awesome 为默认图标库
    sets: {
      fa: {
        component: 'font-awesome-icon', // 使用 FontAwesome 组件
        props: {
          icon: 'fa', // 使用 FontAwesome 图标
        },
      },
    },
  },
});

const app = createApp(App);

// Register plugins and Vuetify
registerPlugins(app);
app.use(vuetify); // 使用 Vuetify
app.component('font-awesome-icon', FontAwesomeIcon); // 注册 FontAwesome 组件
app.mount('#app');

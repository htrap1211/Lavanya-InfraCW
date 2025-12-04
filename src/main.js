import { createApp } from 'vue'
import App from './App.vue'
import VueScrollactive from 'vue-scrollactive';

// Import Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add all icons to the library
library.add(fas, fab)

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css'

// Import fonts
import './assets/css/fonts.css'

// Import AOS for animations
import AOS from 'aos'
import 'aos/dist/aos.css'

// Create Vue app
const app = createApp(App);

// Use plugins
app.use(VueScrollactive)

// Use Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

// Add global properties
app.config.globalProperties.$filters = {
  truncate(text, length, suffix) {
    return text.length > length ? text.substring(0, length) + (suffix || '...') : text;
  }
};

// Initialize AOS
app.AOS = new AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
  disable: 'mobile'
})

// Add global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue error:', err);
  console.info('Error info:', info);
};

// Add global properties for accessibility
app.directive('focus', {
  mounted(el) {
    el.focus();
  }
});

app.mount('#app')

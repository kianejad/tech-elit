import {createApp} from 'vue'
import App from './App.vue'
import routes from "./routes/index.js";
import store from "./store/index.js";
import './assets/scss/main.scss';

/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {fas} from '@fortawesome/free-solid-svg-icons'

/* import icon brands */
import {fab} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(fab, fas)

const app = createApp(App);
app.use(routes);
app.use(store);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app')

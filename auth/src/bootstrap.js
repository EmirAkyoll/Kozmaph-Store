import { createApp, defineAsyncComponent  } from "vue";
// import Auth from './auth.vue';
import './main.css';

import PrimeVue from 'primevue/config';

import Card from 'primevue/card';
import Steps from 'primevue/steps';
import Toast from 'primevue/toast';
import Button from 'primevue/button';
import TabMenu from 'primevue/tabmenu';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import SelectButton from 'primevue/selectbutton';

const AuthAsync = defineAsyncComponent(() => import('./auth.vue'));
const fetch_el = document.getElementById('auth-micro-app');

const mount= (el) => {
    const app = createApp(AuthAsync);
    app.use(PrimeVue);
    app.component('Card', Card);
    app.component('Toast', Toast);
    app.component('Steps', Steps);
    app.component('Button', Button);
    app.component('TabMenu', TabMenu);
    app.component('Password', Password);
    app.component('InputText', InputText);
    app.component('SelectButton', SelectButton);
    app.mount(el);
}

if(fetch_el){
    mount(fetch_el)
}

export {mount }

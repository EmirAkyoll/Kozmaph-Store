import { createApp } from "vue";
import Auth from './auth.vue';
import './main.css';

import PrimeVue from 'primevue/config';
import Card from 'primevue/card';
import Toast from 'primevue/toast';
import Button from 'primevue/button';
import TabMenu from 'primevue/tabmenu';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';

const fetch_el = document.getElementById('auth-micro-app');

const mount= (el) => {
    const app = createApp(Auth);
    app.use(PrimeVue);
    app.component('Card', Card);
    app.component('Toast', Toast);
    app.component('Button', Button);
    app.component('TabMenu', TabMenu);
    app.component('Password', Password);
    app.component('InputText', InputText);
    app.mount(el);
}

if(fetch_el){
    mount(fetch_el)
}

export {mount }


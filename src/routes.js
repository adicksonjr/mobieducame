import About from './components/pages/about/About.vue';
import Login from './components/pages/login/Login.vue';
import SchoolList from './components/pages/schoollist/SchoolList.vue';
import SchoolRegister from './components/pages/schoolregister/SchoolRegister.vue';

export const routes = [ 
    { path : '', component : About },
    { path : '/login', component : Login },
    { path : '/listagem', component : SchoolList },
    { path : '/cadastro', component : SchoolRegister }
]
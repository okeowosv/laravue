import Dashboard from './components/Dashboard.vue';
import Profile from './components/Profile.vue';
import Users from './components/Users.vue';
import Developer from './components/Developer.vue';

export default[
    {path: '/dashboard', component: Dashboard },
    {path: '/developer', component: Developer },    
    {path: '/profile', component: Profile },
    {path: '/users', component: Users }
]
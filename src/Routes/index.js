import Home from '../pages/Home';
import Support from '../pages/Support';
import Global from '../pages/Global';
import Login from '../pages/Login';
import Matches from '../pages/Matches';
import Profile from '../pages/Profile';
import ProfileDetail from '../pages/ProfileDetail';
import Messages from '../pages/Messages';
import Premium from '../pages/Premium';

//Private Routes
export const publicRoutes = [
    // Tất cả các trang sẽ phải thông qua redirectRoutes
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/support',
        component: Support,
    },
    {
        path: '/global',
        component: Global,
    },
    {
        path: '/matches',
        component: Matches,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/profile/:id',
        component: ProfileDetail,
    },
    {
        path: '/messages',
        component: Messages,
    },
    {
        path: '/premium',
        component: Premium,
    },
];

//Public Routes
export const  privateRoutes = [];

//Admin Routes
export const adminRoutes = [];

//Redirect Routes
export const redirectRoutes = [
    {
        path: '/login', component: Login, redirectTo: '/'
    }
];

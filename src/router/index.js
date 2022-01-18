import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Contacts } from "../pages/Contacts";


export const publicRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/', component: Home, exact: true},
    {path: '/contacts', component: Contacts, exact: true},
]
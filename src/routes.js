import Home from './views/Pages/Home';
import WhoWeAre from './views/Pages/WhoWeAre';
import ExpertiseCloud from './views/Pages/ExpertiseCloud';
import ExpertiseWorkplace from './views/Pages/ExpertiseWorkplace';
import ExpertiseSecurity from './views/Pages/ExpertiseSecurity';
import ExpertiseServices from './views/Pages/ExpertiseServices';
import PartnerShip from './views/Pages/PartnerShip';
import Contact from './views/Pages/Contact';
import Career from './views/Pages/Career';
import Shop from './views/Pages/Shop';
import EfisensLab from './views/Pages/EfisensLab';


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/who-we-are', name: 'Who We Are', component: WhoWeAre },
    { path: '/expertise/cloud', name: 'Expertise Cloud', component: ExpertiseCloud },
    { path: '/expertise/modern-workplace', name: 'Expertise Workplace', component: ExpertiseWorkplace },
    { path: '/expertise/security', name: 'Expertise Security', component: ExpertiseSecurity },
    { path: '/expertise/managed-services', name: 'ExpertiseServices', component: ExpertiseServices },
    { path: '/partnerships', name: 'Partnership', component: PartnerShip },
    { path: '/clic-shop', name: 'Shop', component: Shop },
    { path: '/lab', name: 'Laboratory', component: EfisensLab },
    { path: '/career', name: 'Career', component: Career },
    { path: '/contact', name: 'Contact', component: Contact },
];

export default routes;
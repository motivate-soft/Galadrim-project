import Home from './views/Pages/Home';
import WhoWeAre from './views/Pages/WhoWeAre';
import ExpertiseCloud from './views/Pages/Expertise-Cloud';
import ExpertiseWorkplace from './views/Pages/Expertise-Workplace';
import ExpertiseSecurity from './views/Pages/Expertise-Security';
import ExpertiseServiceManager from './views/Pages/Expertise-ServiceManager';
import PartnerShip from './views/Pages/PartnerShip';
import Contact from './views/Pages/Contact';
import Career from './views/Pages/Career';
import Shop from './views/Pages/Shop';
import Laboratory from './views/Pages/Laboratory';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/who-we-are', name: 'Who We Are', component: WhoWeAre },
    { path: '/expertise/cloud', name: 'Expertise Cloud', component: ExpertiseCloud },
    { path: '/expertise/modern-workplace', name: 'Expertise Workplace', component: ExpertiseWorkplace },
    { path: '/expertise/security', name: 'Expertise Security', component: ExpertiseSecurity },
    { path: '/expertise/service-manager', name: 'ExpertiseServiceManager', component: ExpertiseServiceManager },
    { path: '/partnership', name: 'Partnership', component: PartnerShip },
    { path: '/shop', name: 'Partnership', component: Shop },
    { path: '/laboratory', name: 'Partnership', component: Laboratory },
    { path: '/career', name: 'Career', component: Career },
    { path: '/contact', name: 'Contact', component: Contact },
];

export default routes;
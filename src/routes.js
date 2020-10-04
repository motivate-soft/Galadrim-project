import Home from './views/Pages/Home/Home';
import WhoWeAre from './views/Pages/About/WhoWeAre';
import ExpertiseCloud from './views/Pages/Expertise/ExpertiseCloud';
import ExpertiseWorkplace from './views/Pages/Expertise/ExpertiseWorkplace';
import ExpertiseSecurity from './views/Pages/Expertise/ExpertiseSecurity';
import ExpertiseServices from './views/Pages/Expertise/ExpertiseServices';
import PartnerShip from './views/Pages/Partnership/PartnerShip';
import Contact from './views/Pages/Contact/Contact';
import Career from './views/Pages/Career/Career';
import CareerDetail from './views/Pages/Career/CareerDetail';
import Shop from './views/Pages/Shop/Shop';
import EfiLabList from './views/Pages/EfiLab/EfiLabList';
import EfilabCategory from './views/Pages/EfiLab/EfilabCategory';
import EfilabDetail from './views/Pages/EfiLab/EfilabDetail';


const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/who-we-are', name: 'Who We Are', component: WhoWeAre },
    { path: '/expertise/cloud', name: 'Expertise Cloud', component: ExpertiseCloud },
    { path: '/expertise/modern-workplace', name: 'Expertise Workplace', component: ExpertiseWorkplace },
    { path: '/expertise/security', name: 'Expertise Security', component: ExpertiseSecurity },
    { path: '/expertise/managed-services', name: 'ExpertiseServices', component: ExpertiseServices },
    { path: '/partnership', name: 'Partnership', component: PartnerShip },
    { path: '/clic-shop', name: 'Shop', component: Shop },
    { path: '/efilab', name: 'Efilab list', component: EfiLabList },
    { path: '/efilab/cloud', name: 'Efilab cloud', component: EfilabCategory },
    { path: '/efilab/workplace', name: 'Efilab workplace', component: EfilabCategory },
    { path: '/efilab/security', name: 'Efilab security', component: EfilabCategory },
    { path: '/efilab/service', name: 'Efilab service', component: EfilabCategory },
    { path: '/efilab/:id', name: 'Efilab detail', component: EfilabDetail },
    { path: '/career', name: 'Career', component: Career },
    { path: '/career/:id', name: 'Career detail', component: CareerDetail },
    { path: '/contact', name: 'Contact', component: Contact },
];

export default routes;
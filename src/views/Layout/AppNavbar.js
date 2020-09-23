import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    List,
    ListItem,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    IconButton,
    Typography,
    Slide,
    Dialog
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

import Cloud from '../../assets/Images/home/cloud.svg'
import Workplace from '../../assets/Images/home/modern-workplace.svg'
import Security from '../../assets/Images/home/security.svg'
import ManagedService from '../../assets/Images/home/managed-service.svg'

import { FaAngleDown } from '../../../node_modules/react-icons/fa';
import { Link } from "react-router-dom";
import Logo from '../Components/Common/Logo';
import { OrangeButton } from './../Components/Elements/Buttons';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        boxShadow: 'none'
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        backgroundColor: 'white',
        borderBottom: '1px solid #eee'
    },
    list: {

    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
    },

    title: {
        flexGrow: 1,
        alignSelf: 'flex-end',
    },
    accodion: {

    }

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function AppNavbar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit">
                        <Link to='/'><Logo /></Link>
                    </Typography>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="primary"
                        aria-label="open drawer"
                        onClick={handleClickOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar className={classes.toolbar} style={{ borderBottom: '0px solid #eee' }}>
                        <Typography variant="h6" color="inherit">
                            <Link to='/'><Logo /></Link>
                        </Typography>
                        <IconButton edge="start" color="primary" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <List className={classes.list}>
                    <ListItem button>
                        <Link to="/who-we-are" className="text-darkblue mobile-list">Qui sommes nous ?</Link>
                    </ListItem>
                    <Accordion className={classes.accordion} >
                        <AccordionSummary
                            aria-controls="panel1c-content"
                            id="panel1c-header"
                        >
                            <div className={classes.column}>
                                <Typography className="text-darkblue mobile-list" >Nos expertises <FaAngleDown /></Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className={classes.details}>
                            <div className="row dropdown-content">
                                <div className="col-12 col-sm-12 col-lg-6">
                                    <Link to="/expertise/cloud">
                                        <div className="dropdown-item d-flex align-items-center">
                                            <div>
                                                <img className="align-self-start mr-3" src={Cloud} alt="Cloud" />
                                            </div>
                                            <div className="d-flex flex-column">
                                                <h5 className="mt-0">Top-aligned media</h5>
                                                <p>Adopter des solutions cloud hybrides</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-6">
                                    <Link to="/expertise/modern-workplace">
                                        <div className="dropdown-item d-flex align-items-center">
                                            <div>
                                                <img className="align-self-start mr-3" src={Workplace} alt="Workplace" />
                                            </div>
                                            <div className="d-flex flex-column">
                                                <h5 className="mt-0">Modern Workplace</h5>
                                                <p>Moderniser vos environnements de travail</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-6">
                                    <Link to="/expertise/security">
                                        <div className="dropdown-item d-flex align-items-center">
                                            <div>
                                                <img className="align-self-start mr-3" src={Security} alt="Security" />
                                            </div>
                                            <div className="d-flex flex-column">
                                                <h5 className="mt-0">Sécurité</h5>
                                                <p>Protéger vos données, votre infrastructure et vos utilisateurs</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-6">
                                    <Link to="/expertise/managed-services">
                                        <div className="dropdown-item d-flex align-items-center">
                                            <div className="rounded">
                                                <img className="align-self-start" src={ManagedService} alt="ManagedService" />
                                            </div>
                                            <div className="d-flex flex-column">
                                                <h5 className="mt-0">Services Managés</h5>
                                                <p>Superviser et surveiller votre système IT</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                    <ListItem button>
                        <Link to="/partnerships" className="text-darkblue mobile-list">Nos partenariats</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="/clic-shop" className="text-darkblue mobile-list">Efisens Clic&Shop</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="/efilab" className="text-darkblue mobile-list">Efisens Lab</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="/career" className="text-darkblue mobile-list">Carrières</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="/contact" className="text-darkblue mobile-list">Nous contacter</Link>
                    </ListItem>
                    <OrangeButton className="d-block w-80 mx-auto my-5">Accès client</OrangeButton>
                </List>
            </Dialog>
        </div>
    );
}
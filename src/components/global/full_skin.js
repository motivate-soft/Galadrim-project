import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaLock } from '../../../node_modules/react-icons/fa';
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
import Logo from "./logo";
import Cloud from "../../assets/global/header/cloud.svg";
import Workspace from "../../assets/global/header/modern-workplace.svg";
import Service from "../../assets/global/header/s-curit.svg";
import ServiceManage from "../../assets/global/header/service-manag.svg";
import { FaAngleDown } from '../../../node_modules/react-icons/fa';
import {Link} from "react-router-dom";

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
    list:{

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
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenNav() {
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
                        <Link to='/'><Logo/></Link>
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
                    <Toolbar className={classes.toolbar} style={{borderBottom: '0px solid #eee'}}>
                        <Typography variant="h6" color="inherit">
                            <Link to='/'><Logo/></Link>
                        </Typography>
                        <IconButton edge="start" color="primary" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <List className={classes.list}>
                    <ListItem button>
                        <Link to={"/qui-sommes-nous"} className="text-primary mobile-list">Qui sommes nous ?</Link>
                    </ListItem>
                    <Accordion className={classes.accordion} >
                        <AccordionSummary
                            aria-controls="panel1c-content"
                            id="panel1c-header"
                        >
                            <div className={classes.column}>
                                <Typography className="text-primary mobile-list" >Nos expertises <FaAngleDown/></Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className={classes.details}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <Link to="/expertises/cloud">
                                        <div className="media">
                                            <img className="align-self-start mr-3" src={Cloud}
                                                 alt="Cloud"/>
                                            <div className="media-body">
                                                <h5 className="mt-0">Top-aligned media</h5>
                                                <p>Adopter des solutions cloud hybrides</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-6">
                                    <Link to="/expertises/modern-workplace">
                                        <div className="media">
                                            <img className="align-self-start mr-3" src={Workspace}
                                                 alt="Cloud"/>
                                            <div className="media-body">
                                                <h5 className="mt-0">Modern Workplace</h5>
                                                <p>Moderniser vos environnements de travail</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-6">
                                    <Link to="/expertise/security">
                                        <div className="media">
                                            <img className="align-self-start mr-3" src={Service}
                                                 alt="Cloud"/>
                                            <div className="media-body">
                                                <h5 className="mt-0">Sécurité</h5>
                                                <p>Protéger vos données, votre infrastructure et vos utilisateurs</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-6">
                                    <Link to="/expertise/service_manager">
                                        <div className="media">
                                            <img className="align-self-start mr-3" src={ServiceManage}
                                                 alt="Cloud"/>
                                            <div className="media-body">
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
                        <Link to={"/partenariats"} className="text-primary mobile-list">Nos partenariats</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to={"/clic-shop"} className="text-primary mobile-list">Efisens Clic&Shop</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to={"/lab"} className="text-primary mobile-list">Efisens Lab</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to={"/carrieres"} className="text-primary mobile-list">Carrières</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to={"/contact"} className="text-primary mobile-list">Nous contacter</Link>
                    </ListItem>
                    <button className="btn btn-danger btn-custom btn-responsive-block">
                        < FaLock /> Accès client
                    </button>
                </List>
            </Dialog>
        </div>
    );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../global/logo';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer/SwipeableDrawer";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {

    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
}));

export default function DenseAppBar() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                <ListItem button>
                    <ListItemText primary="Qui sommes nous ?" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="Nos expertises" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Spam" />
                </ListItem>
            </List>
            <Divider />

        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static" color={"info"}>
                <Toolbar variant="dense" className={classes.toolbar}>
                    <Typography variant="h6" color="inherit">
                        <a href='/'><Logo/></a>
                    </Typography>
                    <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                        {['left'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <MenuIcon onClick={toggleDrawer(anchor, true)}/>
                                <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                >
                                    {list(anchor)}
                                </SwipeableDrawer>
                            </React.Fragment>
                        ))}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
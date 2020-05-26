import React, { useContext } from 'react';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { DeckCardContext } from './../../ApplicationStore';
import { toggleToolbar } from "./../../actions/mainAction";
import mainHeaderUseStyles from './MainHeaderUseStyles'


console.log(`MainHeader Render....`)

const MainHeader = () => {

  const classes = mainHeaderUseStyles();

  const { mainState, mainDispatch } = useContext(DeckCardContext);

  const openToolbar = (e) => {
    e.preventDefault();
    console.log('openToolbar')
    mainDispatch(toggleToolbar(true))
  }

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, mainState.open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={openToolbar}
          className={clsx(classes.menuButton, mainState.open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          {"DeckCard"}
        </Typography>


        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={0} color="secondary">
            <AccountBoxIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={0} color="secondary">
            <ExitToAppIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default MainHeader;
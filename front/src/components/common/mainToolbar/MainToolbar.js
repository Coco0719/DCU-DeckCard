import React, { useContext } from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, favoriteListItems } from '../listItems/ListItems';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { DeckCardContext } from '../../../ApplicationStore';
import { toolbarToggle } from '../../../actions/mainAction';
import mainToolbarUseStyles from './MainToolbarUseStyles';


const MainToobar = () => {

  const classes = mainToolbarUseStyles();

  const { mainState, mainDispatch } = useContext(DeckCardContext);

  const closeToolbar = (e) => {
    e.preventDefault();
    console.log('closeToolbar')
    mainDispatch(toolbarToggle(false))
  }

  console.log(`MainToolbar Render....`)
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !mainState.open && classes.drawerPaperClose),
      }}
      open={mainState.open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={closeToolbar}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{mainListItems}</List>
      <Divider />
      <List>{favoriteListItems}</List>
      <Divider />
    </Drawer>
  )
}

export default MainToobar;
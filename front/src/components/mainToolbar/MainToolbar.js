import React, { useContext } from 'react';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ToolbarListItems from './../common/listItems/ToolbarListItems';
import Drawer from '@material-ui/core/Drawer';
import { DeckCardContext } from './../../ApplicationStore';
import { toggleToolbar } from './../../actions/mainAction';
import mainToolbarUseStyles from './MainToolbarUseStyles';


const MainToobar = () => {

  const classes = mainToolbarUseStyles();

  const { mainState, mainDispatch } = useContext(DeckCardContext);

  const closeToolbar = (e) => {
    e.preventDefault();
    console.log('closeToolbar')
    mainDispatch(toggleToolbar(false))
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
      <ToolbarListItems />

    </Drawer>
  )
}

export default MainToobar;
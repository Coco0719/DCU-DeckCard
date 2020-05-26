import React, { useContext, Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { DeckCardContext } from '../../../ApplicationStore';
import { changeMainContent } from '../../../actions/mainAction';
import MAIN_CONTENT_STATUS from '../../../utils/constants';

const MainListItems = (props) => {
  const changeMainContentStatus = (e, mainContentStatus) => {
    e.preventDefault();
    console.log(mainContentStatus);
    props.mainDispatch(changeMainContent(mainContentStatus));
  }

  return (
    <Fragment>
      <ListItem button
        onClick={(e) => changeMainContentStatus(e, MAIN_CONTENT_STATUS.DASHBOARD)}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="대시보드" />
      </ListItem>
      <ListItem button
        onClick={(e) => changeMainContentStatus(e, MAIN_CONTENT_STATUS.DECK)}
      >
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="덱" />
      </ListItem>
    </Fragment>
  );
}


const FavoriteListItems = () => {
  return (
    <Fragment>
      <ListSubheader inset>즐겨찾기 목록</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="스레드" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="운영체제" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="데이터베이스" />
      </ListItem>
    </Fragment>
  );
}


const ToolbarListItems = () => {

  const { mainDispatch } = useContext(DeckCardContext);

  return (
    <Fragment>
      <Divider />
      <List>
        <MainListItems mainDispatch={mainDispatch} />
      </List>
      <Divider />
      <List>
        <FavoriteListItems />
      </List>
      <Divider />
    </Fragment>
  );
};

export default ToolbarListItems;
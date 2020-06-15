import React, { useContext, Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import StarIcon from '@material-ui/icons/Star';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { DeckCardContext } from '../../../ApplicationStore';
import { changeMainContent } from '../../../actions/mainAction';
import MAIN_CONTENT_STATUS from '../../../utils/constants';
import { deleteFavorite } from './../../../actions/deckcardAction'


const MainListItems = (props) => {
  const changeMainContentStatus = (e, mainContentStatus) => {
    e.preventDefault();
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
        onClick={(e) => changeMainContentStatus(e, MAIN_CONTENT_STATUS.DECK_LIST)}
      >
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        {/* <ListItemText primary="덱" /> */}
        <ListItemText primary="카드" />
      </ListItem>
    </Fragment>
  );
}

const FavoriteItem = ({ deck }) => {

  const { deckcardDispatch } = useContext(DeckCardContext);

  const deleteFavoriteDeckItem = (e) => {
    const deckId = e.currentTarget.dataset.id;
    deckcardDispatch(deleteFavorite(deckId));
  }

  return (
    <Fragment>
      <ListItem button>
        <ListItemIcon>
          <IconButton data-id={deck.id} onClick={deleteFavoriteDeckItem}>
            <StarIcon />
          </IconButton>
        </ListItemIcon>
        <ListItemText
          primary={`${deck.title}`}
          secondary={`${deck.desc}`}
        />
      </ListItem>
    </Fragment>
  )
}


const FavoriteListItems = (props) => {
  const favoritIds = props.deckcardState.favoritIds;
  const decks = props.deckcardState.decks;
  const favoriteDecks = [];
  for (let i = 0; i < favoritIds.length; i++) {
    const id = favoritIds[i];
    const deckItem = decks.filter(deck => deck.id === id);
    if (deckItem !== null) {
      favoriteDecks.push(deckItem[0]);
    }
  }
  return (
    <Fragment>
      <ListSubheader inset>즐겨찾기 목록</ListSubheader>
      {
        favoriteDecks.map((deck) => <FavoriteItem id={deck.id} deck={deck} />)
      }
    </Fragment>
  );
}


const ToolbarListItems = () => {

  const { mainDispatch, deckcardState } = useContext(DeckCardContext);

  return (
    <Fragment>
      <Divider />
      <List>
        <MainListItems mainDispatch={mainDispatch} />
      </List>
      <Divider />
      <List>
        <FavoriteListItems deckcardState={deckcardState} />
      </List>
      <Divider />
    </Fragment>
  );
};

export default ToolbarListItems;
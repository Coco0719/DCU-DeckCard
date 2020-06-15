import React, { useContext, Fragment } from 'react';

import DeckList from '../deck/deckList/DeckList';
import Dashboard from './../dashboard/Dashboard';
import CardList from './../card/cardList/CardList';
import { DeckCardContext } from './../../ApplicationStore';
import MAIN_CONTENT_STATUS from './../../utils/constants';
// import mainBodyUseStyles from './MainBodyUseStyles';


const ControlMainBodyContent = () => {
  console.log(`Control MainBodyContent Execute....`);

  const { mainState } = useContext(DeckCardContext);
  const contentStatus = mainState.contentStatus;
  if (contentStatus === MAIN_CONTENT_STATUS.DASHBOARD) return <Dashboard />;
  else if (contentStatus === MAIN_CONTENT_STATUS.DECK_LIST) return <DeckList />;
  else if (contentStatus === MAIN_CONTENT_STATUS.CARD_LIST) return <CardList />;
  else return (<Fragment>No match MainBodyContent</Fragment>);

}

export default ControlMainBodyContent;
import React, { useContext, Fragment } from 'react';

import Deck from './../deck/Deck';
import Dashboard from './../dashboard/Dashboard';
import { DeckCardContext } from './../../ApplicationStore';
import MAIN_CONTENT_STATUS from './../../utils/constants';
// import mainBodyUseStyles from './MainBodyUseStyles';


const ControlMainBodyContent = () => {
  console.log(`Control MainBodyContent Execute....`);

  const { mainState } = useContext(DeckCardContext);
  const contentStatus = mainState.contentStatus;
  if (contentStatus === MAIN_CONTENT_STATUS.DASHBOARD) return <Dashboard />;
  else if (contentStatus === MAIN_CONTENT_STATUS.DECK) return <Deck />;
  else return (<Fragment>No match MainBodyContent</Fragment>);

}

export default ControlMainBodyContent;
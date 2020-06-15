import React, { Fragment } from 'react';
import deckUseStyles from './DeckListUseStyles';
import DeckAddForm from '../deckAddForm/DeckAddForm';
import DeckItemList from '../deckItemList/DeckItemList';

const DeckList = () => {
  const classes = deckUseStyles();

  console.log(`Deck Render....`);
  return (
    <Fragment>
      <DeckAddForm />
      <DeckItemList />
    </Fragment>
  );
}

export default DeckList;
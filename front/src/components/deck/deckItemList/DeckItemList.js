import React, { Fragment, useContext } from 'react';
import deckItemListUseStyles from './DeckItemListUseStyles';
import DeckItem from './../deckItem/DeckItem';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { DeckCardContext } from "./../../../ApplicationStore";



const DeckItemList = () => {
  const classes = deckItemListUseStyles();
  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { deckcardState } = useContext(DeckCardContext);
  const decks = deckcardState.decks;

  console.log(`DeckItemList Render....`);
  return (
    <Fragment>
      <Container className={classes.deckGrid} maxWidth="xl">
        <Grid container spacing={4}>
          {decks.map(
            (deck) => <DeckItem id={deck.id} deck={deck} />)}
        </Grid>
      </Container>
    </Fragment>
  );
}

export default DeckItemList;
import React, { Fragment } from 'react';
import deckUseStyles from './DeckUseStyles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeckItem from './deckItem/DeckItem';

const Deck = () => {
  const classes = deckUseStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  console.log(`Deck Render....`);
  return (
    <Fragment>
      <Container className={classes.deckForm} maxWidth="lg">
        <Button size="small" color="primary">덱 추가</Button>
      </Container>
      <Container className={classes.cardGrid} maxWidth="xl">
        <Grid container spacing={4}>
          {cards.map((card) => (<DeckItem id={card} />))}
        </Grid>
      </Container>
    </Fragment>
  );
}

export default Deck;
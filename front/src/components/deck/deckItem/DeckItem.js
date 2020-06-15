import React, { useContext } from 'react';
import DeckItemUseStyles from './DeckItemUseStyles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { DeckCardContext } from './../../../ApplicationStore'
import { deleteDeck, studyDeck, addFavorite } from './../../../actions/deckcardAction';

const DeckItem = ({ deck }) => {

  const classes = DeckItemUseStyles();

  const { deckcardDispatch } = useContext(DeckCardContext);

  const editDeckItem = (e) => {
    const deckId = e.currentTarget.dataset.id;
    // TODO Implement
  }

  const deleteDeckItem = (e) => {
    const deckId = e.currentTarget.dataset.id;
    deckcardDispatch(deleteDeck(deckId));
  }

  const studyDeckItem = (e) => {
    const deckId = e.currentTarget.dataset.id;
    deckcardDispatch(studyDeck(deckId));
  }

  const addFavoriteDeckItem = (e) => {
    const deckId = e.currentTarget.dataset.id;
    deckcardDispatch(addFavorite(deckId));
  }

  return (
    <Grid item key={deck.id} xs={3} sm={2} md={2}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {deck.title}
          </Typography>

          <Typography>
            {deck.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button data-id={deck.id} size="small" color="primary">
            Edit
          </Button>
          <Button data-id={deck.id} onClick={deleteDeckItem} size="small" color="primary">
            Delete
          </Button>
        </CardActions>
        <CardActions>
          <Button data-id={deck.id} onClick={studyDeckItem} size="small" color="primary">
            Study
          </Button>
          <Button data-id={deck.id} onClick={addFavoriteDeckItem} size="small" color="primary">
            Favorite
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default DeckItem;
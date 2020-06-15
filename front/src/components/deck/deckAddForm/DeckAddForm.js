import React, { Fragment, useState, useContext } from 'react';
import deckAddFormUseStyles from './DeckAddFormUseStyles';

import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { DeckCardContext } from "./../../../ApplicationStore";
import { addDeck } from "./../../../actions/deckcardAction";

const DeckAddForm = () => {
  const classes = deckAddFormUseStyles();

  const { deckcardDispatch } = useContext(DeckCardContext);

  const [titleInputData, setTitleInputData] = useState("");
  const handleTitleInputData = e => {
    setTitleInputData(e.target.value);
  };

  const [descInputData, setDestInputData] = useState("");
  const handleDescInputData = e => {
    setDestInputData(e.target.value);
  }

  const clearTextFields = () => {
    setTitleInputData("");
    setDestInputData("");
  }

  const submitNewDeckInfo = (e) => {
    e.preventDefault();
    deckcardDispatch(addDeck(titleInputData, descInputData));
    clearTextFields();
  }

  console.log(`DeckAddForm Render....`);
  return (
    <Fragment>
      <Container className={classes.deckForm} maxWidth="lg">
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Button
              type="submit"
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={submitNewDeckInfo}
            >추 가</Button>
            <Grid item xs={2} sm={2}>
              <TextField
                autoComplete="title"
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                size="medium"
                value={titleInputData}
                onChange={handleTitleInputData}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="description"
                name="description"
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                value={descInputData}
                onChange={handleDescInputData}
                autoFocus
              />
            </Grid>
          </Grid>
        </form>
      </Container>
    </Fragment>
  );
}

export default DeckAddForm;
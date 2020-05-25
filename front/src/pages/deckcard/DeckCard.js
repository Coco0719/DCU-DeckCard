import React, { useContext, useEffect } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { Redirect } from 'react-router';

import RecentStudys from '../../components/dashboard/RecentStudys';
import MainHeader from '../../components/common/mainHeader/MainHeader';
import MainToolbar from '../../components/common/mainToolbar/MainToolbar';
import { DeckCardContext } from '../../ApplicationStore';
import deckcardUseStyles from './DeckCardUseStyles';


const DeckCard = () => {

  const { userState, mainState } = useContext(DeckCardContext);

  const classes = deckcardUseStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  useEffect(() => {
    console.log(`MainState 업데이트 : ${mainState.open}`);
  }, [mainState.open]);


  // if (userState.authenticated === false) return <Redirect to='/login' />
  // console.log(`open -> ${mainState.open}`)
  console.log(`Deckcard Render....`)
  return (
    <div className={classes.root}>
      <CssBaseline />
      <MainHeader />
      <MainToolbar />


      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                {card}
              </Paper>
            </Grid> */}
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <RecentStudys />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export default DeckCard;
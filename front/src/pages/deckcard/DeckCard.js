import React, { useContext, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

// import { Redirect } from 'react-router';

import MainHeader from '../../components/mainHeader/MainHeader';
import MainToolbar from '../../components/mainToolbar/MainToolbar';
import MainBody from '../../components/mainBody/MainBody';
import MainFooter from './../../components/mainFooter/MainFooter';
import { DeckCardContext } from '../../ApplicationStore';
import deckcardUseStyles from './DeckCardUseStyles';


const DeckCard = () => {

  // const { userState, mainState } = useContext(DeckCardContext);
  const { mainState } = useContext(DeckCardContext);

  const classes = deckcardUseStyles();

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
      <MainBody />
      {/* <MainFooter /> */}
    </div>
  )
}

export default DeckCard;
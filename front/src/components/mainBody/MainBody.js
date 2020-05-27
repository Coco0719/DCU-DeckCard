import React, { Fragement } from 'react';
import Container from '@material-ui/core/Container';

import mainBodyUseStyles from './MainBodyUseStyles';
import MainFooter from './../mainFooter/MainFooter';
import ControlMainBodyContent from './ControlMainBodyContent';

const MainBody = () => {

  const classes = mainBodyUseStyles();

  console.log(`MainBody Render....`);
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="xl" className={classes.container}>
        <ControlMainBodyContent />
      </Container>
      {/* <MainFooter /> */}
    </main>
  );
}

export default MainBody;
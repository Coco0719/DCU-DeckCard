import React from 'react';
import Container from '@material-ui/core/Container';

import mainBodyUseStyles from './MainBodyUseStyles';
import ControlMainBodyContent from './ControlMainBodyContent';

const MainBody = () => {

  const classes = mainBodyUseStyles();

  console.log(`MainBody Render....`);
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <ControlMainBodyContent />
      </Container>
    </main>
  );
}

export default MainBody;
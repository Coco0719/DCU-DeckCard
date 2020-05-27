import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import Copyright from './../common/copyright/Copyright';
import mainFooterUseStyles from './MainFooterUseStyles';


console.log(`MainFooter Render....`);
const MainFooter = () => {

  const classes = mainFooterUseStyles();

  return (
    <Fragment>
      <footer className={classes.footer}>
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography> */}
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
    </Fragment>
  )
};

export default MainFooter;
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';

import RecentStudys from './RecentStudys/RecentStudys';
import Chart from './Chart/Chart';
import dashboardUseStyles from './DashboardUseStyles';

const Dashboard = () => {

  const classes = dashboardUseStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  console.log(`Dashboard Render....`);
  return (
    <Grid container spacing={3}>
      {/* <Grid item xs={12} md={12} lg={12}>
        <Paper className={fixedHeightPaper}>
          {card}
        </Paper>
      </Grid> */}
      <Grid item xs={12}>
        <Paper className={fixedHeightPaper}>
          <Chart />
        </Paper>
      </Grid>

      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <RecentStudys />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
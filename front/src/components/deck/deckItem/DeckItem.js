import React from 'react';
import DeckItemUseStyles from './DeckItemUseStyles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const DeckItem = (props) => {

  const classes = DeckItemUseStyles();

  return (
    <Grid item key={props.card} xs={3} sm={2} md={2}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            Heading
                  </Typography>
          <Typography>
            This is a media card. You can use this section to describe the content.
                  </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Edit
                  </Button>
          <Button size="small" color="primary">
            Delete
                  </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default DeckItem;
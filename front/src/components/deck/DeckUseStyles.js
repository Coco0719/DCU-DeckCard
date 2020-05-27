import { makeStyles } from '@material-ui/core/styles';

const deckUseStyles = makeStyles((theme) => ({
  deckForm: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(0),
    paddingRight: theme.spacing(8),
    paddingLeft: theme.spacing(8),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingLeft: theme.spacing(8),
  },
}));

export default deckUseStyles;
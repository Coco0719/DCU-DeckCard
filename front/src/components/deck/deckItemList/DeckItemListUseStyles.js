import { makeStyles } from '@material-ui/core/styles';

const deckItemListUseStyles = makeStyles((theme) => ({
  deckGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingLeft: theme.spacing(8),
  },
}));

export default deckItemListUseStyles;
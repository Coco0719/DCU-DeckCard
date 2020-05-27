import { makeStyles } from '@material-ui/core/styles';

const deckItemUseStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 5,
  },
}));

export default deckItemUseStyles;
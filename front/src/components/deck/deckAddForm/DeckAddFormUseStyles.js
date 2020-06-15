import { makeStyles } from '@material-ui/core/styles';

const deckAddFormUseStyles = makeStyles((theme) => ({
  deckForm: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(0),
    paddingRight: theme.spacing(8),
    paddingLeft: theme.spacing(8),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  button: {
    height: 70
  },
}));

export default deckAddFormUseStyles;
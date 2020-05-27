import { makeStyles } from '@material-ui/core';

const mainFooterUseStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default mainFooterUseStyles;
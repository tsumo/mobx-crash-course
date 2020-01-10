import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  title: {
    flexBasis: "90%"
  },
  closeButton: {
    flexBasis: "5%"
  }
}));

export default useStyles;

import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import useStyles from "./Item.style";

interface IItemProps {
  item: string;
}

const Item = (props: IItemProps) => {
  const { item } = props;
  const styles = useStyles();

  return <Paper className={styles.paper}>{item}</Paper>;
};

export default Item;

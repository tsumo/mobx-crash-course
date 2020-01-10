import React from "react";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import { useStore } from "../store";
import Item from "./Item";
import useStyles from "./Items.style";
import { useAutorun } from "../hooks";

const Items = observer(() => {
  const { items, itemCount, addItem, removeItem } = useStore();
  const styles = useStyles();
  const localItems = [...items];

  useAutorun(() => (document.title = `${itemCount} - total`));

  return (
    <>
      <Button
        className={styles.button}
        onClick={() => addItem(String(Date.now()))}
      >
        New
      </Button>
      <Button className={styles.button} onClick={() => removeItem()}>
        Remove
      </Button>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {localItems.map((item, i) => (
            <Grid item xs={4} key={i}>
              <Item item={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
});

export default Items;

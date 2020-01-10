import React from "react";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import IconButton from "@material-ui/core/IconButton/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./Post.style";
import { IPost } from "../domain/postDomain";
import { useStore } from "../store/postStore";

interface IItemProps {
  post: IPost;
}

const Post = (props: IItemProps) => {
  const { post } = props;
  const { removePost } = useStore();
  const styles = useStyles();

  return (
    <Paper className={styles.paper}>
      <Grid item container direction="column">
        <Grid
          item
          container
          direction="row"
          alignItems="flex-start"
          justify="space-between"
        >
          <Typography variant="h4" className={styles.title}>
            {post.title}
          </Typography>
          <IconButton
            size="small"
            className={styles.closeButton}
            onClick={() => removePost(post.id)}
          >
            <CloseIcon />
          </IconButton>
        </Grid>
        <Typography variant="body1" className={styles.body}>
          {post.body}
        </Typography>
      </Grid>
    </Paper>
  );
};

export default Post;

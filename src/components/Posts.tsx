import React from "react";
import { observer } from "mobx-react-lite";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import Box from "@material-ui/core/Box/Box";
import { useStore } from "../store/postStore";
import Post from "./Post";
import { useAutorun } from "../hooks";
import { Typography } from "@material-ui/core";

const Posts = observer(() => {
  const { posts, postCount, addPost } = useStore();

  useAutorun(() => (document.title = `${postCount} - total`));

  return (
    <>
      <Box m={1}>
        <Button
          onClick={() =>
            addPost({
              id: Date.now(),
              userId: 1,
              title: "title",
              body: "body"
            })
          }
        >
          <Typography variant="button" color="textSecondary">
            New
          </Typography>
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={3}>
          {posts.map(post => (
            <Grid item xs={4} key={post.id}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
});

export default Posts;

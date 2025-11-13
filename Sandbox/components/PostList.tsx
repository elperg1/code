import React, { useContext } from "react";
import { Grid, CircularProgress, Typography } from "@mui/material";
import PostCard from "./PostCard";
import PostContext from "../context/PostContext";

const PostList: React.FC = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error("PostList must be used within a PostProvider");
  }

  const { state } = context;
  const { posts, loading, error } = state;

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;

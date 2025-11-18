import React, { useContext } from "react";
import { CircularProgress, Typography, Grid } from "@mui/material";
import PostCard from "./PostCard.tsx";
import PostContext from "../context/PostContext.tsx";

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
        <Grid size={{ xs: 8, sm: 4 }}>
            <PostCard post={post} key={post.id}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
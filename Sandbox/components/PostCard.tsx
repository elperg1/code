import React from "react";
import { Card, CardContent, Typography, CardHeader } from "@mui/material";
import { Post } from "../context/PostContext";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader title={`#${post.id} - ${post.title}`} />
      <CardContent>
        <Typography variant="body2">{post.body}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;

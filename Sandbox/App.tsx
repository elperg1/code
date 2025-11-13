import React from "react";
import { Container, Typography } from "@mui/material";
import { PostProvider } from "./context/PostContext";
import PostList from "./components/PostList";

const App: React.FC = () => {
  return (
    <PostProvider>
      <Container sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          📰 Latest Posts
        </Typography>
        <PostList />
      </Container>
    </PostProvider>
  );
};

export default App;

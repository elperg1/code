import React from "react";
import { Container, Typography } from "@mui/material";
import { PostProvider } from "./context/PostContext.tsx";
import PostList from "./components/PostList.tsx";

const App: React.FC = () => {
  return (
    <PostProvider>
      <Container sx={{ padding: 4 }}>
        <h1>My Posts</h1>
        <Typography variant="h4" gutterBottom>

          <PostList/>
        </Typography>

      </Container>
    </PostProvider>
  );
};


export default App;

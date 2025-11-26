import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import { PostProvider } from "./context/PostContext";
import PostList from "./components/PostList";
import NavBar from "./components/NavBar";
import About from "./components/About";

function App() {
  return (
    <PostProvider>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </PostProvider>
  );
}

const Home = () => (
  <Container sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>Home</Typography>
  </Container>
);

const Posts = () => (
  <Container sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>My Posts</Typography>
    <PostList />
  </Container>
);

export default App;
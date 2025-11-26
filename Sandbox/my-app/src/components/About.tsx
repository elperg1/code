import React from "react";
import { Container, Typography, Box } from "@mui/material";

const About: React.FC = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to My App. This is a simple React application built with Material UI and React Router.
        </Typography>
        <Typography variant="body1" paragraph>
          It demonstrates how to create a multi-page application with navigation, posts management, and styling.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
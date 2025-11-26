import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@fontsource/roboto";

const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container not found. Make sure there is a div with id='root' in your index.html.");
}
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
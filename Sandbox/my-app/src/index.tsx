import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@fontsource/roboto"; // Material UI font


const container = document.getElementById('root');
if (!container) {
  throw new Error("Root container not found. Make sure there is a div with id='root' in your index.html.");
}
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App/>
 </React.StrictMode>
);


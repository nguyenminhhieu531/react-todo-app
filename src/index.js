import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import Hello from './components/Hello';
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerServiceWorker();

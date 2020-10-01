import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <>
    <App />
    <h1>DM me will add your playlist too </h1>
    <iframe
      src="https://open.spotify.com/embed?uri=spotify%3Aplaylist%3A37i9dQZF1DX1ct2TQrAvRf"
      width="400"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  </>,
  document.getElementById("root")
);

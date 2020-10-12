import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <div>
    <App />
    <iframe width="750" height="600" src="https://www.youtube.com/embed/pnkuI8KXW_8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe
      src="https://open.spotify.com/embed?uri=spotify%3Aplaylist%3A37i9dQZF1DX1ct2TQrAvRf"
      width="300"
      height="600"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>

  </div>,
  document.getElementById("root")
);

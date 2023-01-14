import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProductContextProvider } from "./contexts/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-mo3u7rfh.us.auth0.com"
    clientId="ydGYc3DLc3RhqJK6F7mmWXhKuuWVZkTA"
    redirectUri={window.location.origin}
  >
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </Auth0Provider>
);

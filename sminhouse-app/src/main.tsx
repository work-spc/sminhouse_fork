import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./state/store.ts";
import { Provider } from "react-redux";
import SmoothScroll from "./components/smooth-scroll/smooth-scroll.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </Provider>
  </React.StrictMode>
);

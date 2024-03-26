import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./state/store.ts";
import { Provider } from "react-redux";
import SmoothScroll from "./components/smooth-scroll/smooth-scroll.tsx";
import { ModalWindow } from "./components/modal-window/modal-window.tsx";
import { ChatAndCall } from "./modules/chat-and-call/chat-and-call.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SmoothScroll>
        <App />
      </SmoothScroll>
      <ModalWindow></ModalWindow>
      <ChatAndCall></ChatAndCall>
    </Provider>
  </React.StrictMode>
);

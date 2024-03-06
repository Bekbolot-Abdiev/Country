import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ReduxApp from "./Store/ReduxApp.jsx";
import { Provider } from "react-redux";
import store from "./Store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <ReduxApp /> */}
      {/* <RedaxTodo /> */}
    </Provider>
  </React.StrictMode>
);

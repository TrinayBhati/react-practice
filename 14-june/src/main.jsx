import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MantineProvider } from "@mantine/core";
import { createStore } from "redux";
import bankingReducer from "./reducers/bankingReducer.js";
import { Provider as ReduxProvider } from "react-redux";

const store = createStore(bankingReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </MantineProvider>
);

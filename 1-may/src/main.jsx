import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

const container = document.querySelector("#root");
let root = createRoot(container);

root.render(<App />);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import Layout from "./components/layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./redux/store";

const store = setupStore()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store }>
        <Layout>
          <App />
        </Layout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

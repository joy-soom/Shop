import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"; // ./ 가 있는 애들은 내가 만든 js 페이지
import { BrowserRouter } from "react-router-dom"; // ./가 없는 애들은 설치한 라이브러리
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

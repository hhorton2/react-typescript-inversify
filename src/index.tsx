import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { ServiceContext } from "./contexts/ServiceContext";
import { appContainer } from "./ioc/inversifyConfig";

ReactDOM.render(
  <React.StrictMode>
    <ServiceContext.Provider
      value={{
        serviceContainer: appContainer,
      }}
    >
      <App />
    </ServiceContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

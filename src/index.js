import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { App } from "./components";

const { REACT_APP_GRAPHQL_URI } = process.env;

const client = new ApolloClient({
  uri: REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();

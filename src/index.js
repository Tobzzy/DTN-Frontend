import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { App } from "./components";

const { REACT_APP_GRAPHQL_URI, REACT_APP_GRAPHQL_WEBSOCKET_URI } = process.env;

const httpLink = new HttpLink({
  uri: REACT_APP_GRAPHQL_URI,
});

const wsLink = new WebSocketLink({
  uri: REACT_APP_GRAPHQL_WEBSOCKET_URI,
  options: {
    reconnect: true,
    timeout: 20000,
    lazy: true,
  },
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
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

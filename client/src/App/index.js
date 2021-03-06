import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Main } from "../Components";
import "./styles.css";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
};

export default App;

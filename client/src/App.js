import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import TshirtList from "./components/TshirtList";
import AddTshirt from "./components/AddTshirt";
import PantList from "./components/PantList";
import AddPant from "./components/AddPant";

//apollo client setup - allows react and graphql to work together
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Miniature Web Store</h1>
          <TshirtList />
          <AddTshirt />
          <PantList />
          <AddPant />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

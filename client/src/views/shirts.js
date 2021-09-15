import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import TshirtList from "../components/TshirtList";
import AddTshirt from "../components/AddTshirt";

//apollo client setup - allows react and graphql to work together
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
})

class AddShirts extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>Add Shirts!</h1>
          <TshirtList />
          <AddTshirt />
        </div>
      </ApolloProvider>
    );
  }
}

export default AddShirts;
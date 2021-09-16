import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import PantList from "../components/Pant/PantList";
import AddPant from "../components/Pant/AddPant";

//apollo client setup - allows react and graphql to work together
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
})

class AddPants extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>Add Pants!</h1>
          <PantList />
          <AddPant />
        </div>
      </ApolloProvider>
    );
  }
}

export default AddPants;
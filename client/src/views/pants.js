import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import PantList from "../components/Pant/PantList";
import AddPant from "../components/Pant/AddPant";
import { Title } from "../components/Title";

//apollo client setup - allows react and graphql to work together
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
})

class AddPants extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Title
            title="View and Add Pants!"
          />
          <PantList />
          <AddPant />
        </div>
      </ApolloProvider>
    );
  }
}

export default AddPants;
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import ColorList from '../components/Color/ColorList';
import AddColor from '../components/Color/AddColor';
import { Title } from '../components/Title';

//apollo client setup - allows react and graphql to work together
const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
})

class AddColors extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <Title
            title="View and Add Colors!"
          
          />
          <ColorList />
          <AddColor />
        </div>
      </ApolloProvider>
    );
  }
}

export default AddColors;
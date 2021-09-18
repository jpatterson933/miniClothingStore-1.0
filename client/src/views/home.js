import React, { Component } from 'react';
// Style Sheets
import './index.css';
// Components
import { Title } from '../components/Title';
import { ListItem } from '../components/List';
class Home extends Component {
  render() {
    return (
      <div>
        <Title
          title="Lil` Bits Store" />
        <p className="info">Using GraphQL, Apollo Boost, and React I am demonstrating how to create
          items, have them saved to a database and have those items displayed
          to the user.
          I am also demonstrating my ability to useState to update on screen information.
          For more information on this application, check out the github readme! 
        </p>
        <br></br>
        <div className="info">
          <p>This small application can:</p>
          <ol>
            <ListItem liclass="app-descript">Add Shirts with Size and Color</ListItem>
            <ListItem liclass="app-descript">Add Pants with Size and Color</ListItem>
            <ListItem liclass="app-descript">Add colors that can later be used when adding shirts and pants</ListItem>
            <ListItem liclass="app-descript">When a Shirt or Pant is clicked, details will be displayed of that item to the user</ListItem>
          </ol>
        </div>
      </div>
    );
  }
}

export default Home;
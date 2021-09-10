import React, { Component } from 'react';
import { gql } from 'apollo-boost';
// helps us bind apollo to react
import { graphql } from 'react-apollo';

// FIRST - we construct this query that is below
const getTshirtsQuery = gql`
    {
        tshirts {
            id
            shirtType
            upc
            size {
                name
            }
            color {
                name
            }
        }
    }

`;
// SECOND we bind the query we have constructed to our component

class TshirtList extends Component {

    displayTshirts(){
        var data = this.props.data;
        if(data.loading){
            return( <div> Loading Shirts </div>)
        } else {
            return data.tshirts.map(tshirt => {
                return (
                    <li key={tshirt.id}>{tshirt.shirtType}</li>
                )
            })
        }
    }
    
    
    render() {
        console.log(this.props)

        return (
            <div id="main">
                <ul id="tshirt-list">
                    {this.displayTshirts()}
                </ul>
            </div>
        );
    }
}

export default graphql(getTshirtsQuery)(TshirtList);

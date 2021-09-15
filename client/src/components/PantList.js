import React, { Component } from 'react';
// import { gql } from 'apollo-boost';
// helps us bind apollo to react
import { graphql } from 'react-apollo';
import { getPantsQuery } from '../queries/queries';
import PantDetails from './PantDetails';

// FIRST - we construct this query that is below
// same query structure as graphql //
// const getPantsQuery = gql`
//     {
//         pants {
//             id
//             pantType
//             upc
//             size {
//                 name
//             }
//             color {
//                 name
//             }
//         }
//     }

// `;

// SECOND we bind the query we have constructed to our component
class PantList extends Component {
    displayPants(){
        var data = this.props.data;
        if(data.loading){
            return ( <div> Loading Pants </div>)
        } else {
            return data.pants.map(pant => {
                return (
                    <li key={pant.id}>{pant.pantType}</li>
                )
            })
        }
    }
    
    render() {
        // console.log(this.props)
        return (
            <div id="main">
                <ul id="pant-list">
                    {this.displayPants()}
                </ul>
                <PantDetails />
            </div>
        );
    }
}

export default graphql(getPantsQuery)(PantList);
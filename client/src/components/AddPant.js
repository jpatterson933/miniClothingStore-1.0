import React, { Component } from 'react';
import { gql } from 'apollo-boost';
// helps us bind apollo to react
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

// FIRST - we construct this query that is below
// same query structure as graphql //
const getSizesQuery = gql`
    {
        sizes{
            id
            name
        }
    }
`;

const getColorsQuery = gql`
    {
        colors{
            id
            name
        }
    }

`;

// SECOND we bind the query we have constructed to our component
class AddPant extends Component {

    render() {

        return (
            <form id="add-pant">
            <div className="field">
                <label>Type: </label>
                <input type="text" />
            </div>

            <div className="field">
                <label>UPC: </label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Color: </label>
                <input type="text" placeholder="Add New Color" />
                <select>
                    <option>Select Color</option>
                </select>
            </div>
            <div className="field">
                <label>Size: </label>
                <select>
                    <option>Select Size</option>
                </select>
            </div>
            <button>Add Pants</button>
        </form>

        );
    }
}

export default compose(
    graphql(getSizesQuery, {name: "getSizesQuery"}),
    graphql(getColorsQuery, {name: "getColorsQuery"})
)(AddPant)
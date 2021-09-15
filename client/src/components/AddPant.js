import React, { Component } from 'react';
// import { gql } from 'apollo-boost';
// helps us bind apollo to react
import { graphql } from 'react-apollo';
// import { flowRight as compose } from 'lodash';
import { getSizeColorQuery } from '../queries/queries';

// FIRST - we construct this query that is below
// same query structure as graphql //
// const getSizeColorQuery = gql`
//     {
//         sizes{
//             id
//             name
//         }
//         colors{
//             id
//             name
//         }
//     }
// `;

// SECOND we bind the query we have constructed to our component
class AddPant extends Component {

    displaySizes() {
        let data = this.props.data;
        if (data.loading) {
            return (<option disabled>Loading Sizes..</option>)
        } else {
            return data.sizes.map(size => {
                return (<option key={size.id} value={size.id}>{size.name}</option>);
            })
        }
    };

    displayColors() {
        let data = this.props.data;
        if(data.loading) {
            return ( <option disabled>Loading Colors...</option>);
        } else {
            return data.colors.map(color => {
                return (<option key={color.id} value={color.id}>{color.name}</option>);
            })
        }
    };

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
                    {this.displayColors()}
                </select>
            </div>
            <div className="field">
                <label>Size: </label>
                <select>
                    <option>Select Size</option>
                    {this.displaySizes()}
                </select>
            </div>
            <button>Add Pants</button>
        </form>

        );
    }
}

export default graphql(getSizeColorQuery)(AddPant);
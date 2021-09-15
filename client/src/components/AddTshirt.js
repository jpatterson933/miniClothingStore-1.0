import React, { Component } from 'react';
// import { gql } from 'apollo-boost';
// helps us bind apollo to react
import { graphql } from 'react-apollo';
// import { flowRight as compose } from 'lodash';
import { getSizeColorQuery } from '../queries/queries';

// FIRST - we construct this query that is below
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

class AddTshirt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shirtType: '',
            upc: '',
            sizeId: '',
            colorId: ''
        };
    }

    displaySizes() {
        let data = this.props.data;
        if (data.loading) {
            return (<option disabled>Loading Sizes..</option>)
        } else {
            return data.sizes.map(size => {
                return (<option key={size.id} value={size.id}>{size.name}</option>);
            })
        }
    }

    displayColors() {
        let data = this.props.data;
        if (data.loading) {
            return (<option disabled>Loading Colors...</option>);
        } else {
            return data.colors.map(color => {
                return (<option key={color.id} value={color.id}>{color.name}</option>);
            })
        }
    }

    submitForm(e){
        e.preventDefault();
        console.log(this.state);
    }


    render() {
        return (
            <form id="add-tshirt" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Type: </label>
                    <input type="text" onChange={(e) => this.setState({ shirtType: e.target.value })} />
                </div>

                <div className="field">
                    <label>UPC: </label>
                    <input type="text" onChange={(e) => this.setState({ upc: e.target.value })} />
                </div>
                <div className="field">
                    <label>Color: </label>
                    {/* <input type="text" placeholder="Add New Color" /> */}
                    <select onChange={(e) => this.setState({ colorId: e.target.value })}>
                        <option>Select Color</option>
                        {this.displayColors()}
                    </select>
                </div>
                <div className="field">
                    <label>Size: </label>
                    <select onChange={(e) => this.setState({ sizeId: e.target.value })}>
                        <option>Select Size</option>
                        {this.displaySizes()}
                    </select>
                </div>
                <button>Add Shirts</button>
            </form>
        );
    }
}

export default graphql(getSizeColorQuery)(AddTshirt);
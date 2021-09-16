import React, { Component } from 'react';
// helps us bind apollo to react
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { getSizeColorQuery, addPantMutation, getPantsQuery } from '../../queries/queries';

// SECOND we bind the query we have constructed to our component
class AddPant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pantType: '',
            upc: '',
            sizeId: '',
            colorId: ''
        };
    }

    displaySizes() {
        let data = this.props.getSizeColorQuery;
        if (data.loading) {
            return (<option disabled>Loading Sizes..</option>)
        } else {
            return data.sizes.map(size => {
                return (<option key={size.id} value={size.id}>{size.name}</option>);
            })
        }
    };

    displayColors() {
        let data = this.props.getSizeColorQuery;
        if (data.loading) {
            return (<option disabled>Loading Colors...</option>);
        } else {
            return data.colors.map(color => {
                return (<option key={color.id} value={color.id}>{color.name}</option>);
            })
        }
    };

    submitForm(e) {
        e.preventDefault();
        this.props.addPantMutation({
            variables: {
                pantType: this.state.pantType,
                colorId: this.state.colorId,
                upc: this.state.upc,
                sizeId: this.state.sizeId
            },
            refetchQueries: [{ query: getPantsQuery }]
        })
    }

    render() {
        return (
            <form id="add-pant" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Type: </label>
                    <input type="text" onChange={(e) => this.setState({ pantType: e.target.value })} />
                </div>
                <div className="field">
                    <label>UPC: </label>
                    {/* here we use parseInt to make sure we recieve an integer so it doesn't throw an error in our models */}
                    <input type="text" onChange={(e) => this.setState({ upc: parseInt(e.target.value) })} />
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
                <button>Add Pants</button>
            </form>
        );
    }
}

export default compose(
    graphql(getSizeColorQuery, { name: "getSizeColorQuery" }),
    graphql(addPantMutation, { name: "addPantMutation" })
)(AddPant);
import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { getColorsQuery, addColorMutation } from '../../queries/queries';

class AddColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    };

    displayColors() {
        let data = this.props.getColorsQuery;
        if(data.loading) {
            return (<option disabled>Loading Colors..</option>);

        } else {
            return data.colors.map(color => {
                return (<option key={color.id} value={color.id}>{color.name}</option>);
            })
        }
    };

    submitForm(e){
        e.preventDefault();
            this.props.addColorMutation({
                variables: {
                    name: this.state.name
                },
                refetchQueries: [{ query: getColorsQuery}]
            })        
    };




    render() {
        return (
            <form id="add-color" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Color: </label>
                    <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />
                    <select>
                        <option>View Colors</option>
                        {this.displayColors()}
                    </select>
                </div>
                <button>Add Color</button>

            </form>
        )
    }
}

export default compose(
    graphql(getColorsQuery, {name: "getColorsQuery"}),
    graphql(addColorMutation, {name: "addColorMutation"})
)(AddColor);
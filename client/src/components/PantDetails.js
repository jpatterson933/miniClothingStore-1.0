import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getPantQuery } from "../queries/queries";

class PantDetails extends Component {
    displayPantDetails() {
        const { pant } = this.props.data;
        if (pant) {
            return (
                <div>
                    <p>{pant.pantType}</p>
                    <p>{pant.color.name}</p>
                    <p>{pant.size.name}</p>
                    <p>{pant.upc}</p>
                </div>
            )
        }
    }
    render() {

        return (
            <div>
                <p>Pant Details...</p>
                {this.displayPantDetails()}

            </div>
        )
    }
};

//this binds our query to our componenet using the graphql package
export default graphql(getPantQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.pantId
            }
        }
    }
})(PantDetails);
import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getTshirtQuery } from "../queries/queries";

class TshirtDetails extends Component {

    displayShirtDetails() {
        const { tshirt } = this.props.data;
        if (tshirt) {
            return (
                <div>
                    <p>{tshirt.shirtType}</p>
                    <p>{tshirt.color.name}</p>
                    <p>{tshirt.size.name}</p>
                    <p>{tshirt.upc}</p>
                </div>
            )
        } else {
            return (
                <div>No Shirt Selected...</div>
            )
        }
    }

    render() {

        return (
            <div>
                <p>Shirt Details...</p>
                {this.displayShirtDetails()}

            </div>
        )
    }
};

//this binds our query to our componenet using the graphql package
export default graphql(getTshirtQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.tshirtId
            }
        }
    }
})(TshirtDetails);
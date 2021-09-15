import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getPantQuery } from "../queries/queries";

class PantDetails extends Component {
    render() {

        return (
            <div>
                <p>Pant Details...</p>

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
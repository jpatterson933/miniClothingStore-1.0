import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getTshirtQuery } from "../queries/queries";

class TshirtDetails extends Component {
    render() {
        return (
            <div>
                <p>Shirt Details...</p>

            </div>
        )
    }
};

//this binds our query to our componenet using the graphql package
export default graphql(getTshirtQuery)(TshirtDetails);
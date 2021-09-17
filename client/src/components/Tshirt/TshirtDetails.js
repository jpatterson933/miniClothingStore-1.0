import React, { Component } from "react";
import { graphql } from "react-apollo";
// Queries
import { getTshirtQuery } from "../../queries/queries";
// Components
import { DetailsCard } from '../Card/DetailsCard';

class TshirtDetails extends Component {

    displayShirtDetails() {
        const { tshirt } = this.props.data;
        if (tshirt) {
            return (
                <DetailsCard
                    clothingtype={tshirt.tshirtType}
                    color={tshirt.color.name}
                    size={tshirt.size.name}
                    upc={tshirt.upc}
                />
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
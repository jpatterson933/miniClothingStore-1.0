import React, { Component } from "react";
import { graphql } from "react-apollo";
// Queries
import { getPantQuery } from "../../queries/queries";

// Componenets
import { DetailsCard } from '../Card/DetailsCard';
import { DetailsTitle } from '../Title';

class PantDetails extends Component {
    displayPantDetails() {
        const { pant } = this.props.data;
        if (pant) {
            return (
                <DetailsCard
                    clothingtype={pant.pantType}
                    color={pant.color.name}
                    size={pant.size.name}
                    upc={pant.upc}
                />
            )
        }
    }

    render() {
        return (
            <div>
                <DetailsTitle
                    title="View Pants..."
                />
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
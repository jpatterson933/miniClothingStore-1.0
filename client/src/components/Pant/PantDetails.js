import React, { Component } from "react";
import { graphql } from "react-apollo";
// Queries
import { getPantQuery } from "../../queries/queries";

// Componenets
import { DetailsCard } from '../Card/DetailsCard';

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
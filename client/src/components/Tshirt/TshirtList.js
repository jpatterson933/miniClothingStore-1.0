import React, { Component } from 'react';
// helps us bind apollo to react
import { graphql } from 'react-apollo';
//queries
import { getTshirtsQuery } from '../../queries/queries';
// components
import TshirtDetails from './TshirtDetails';

class TshirtList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }

    displayTshirts() {
        var data = this.props.data;
        if (data.loading) {
            return (<div> Loading Shirts </div>)
        } else {
            return data.tshirts.map(tshirt => {
                return (
                    <li key={tshirt.id} onClick={(e) => { this.setState({ selected: tshirt.id }) }} >{tshirt.shirtType}</li>
                )
            })
        }
    }

    render() {
        return (
            <div id="main">
                <ul id="tshirt-list">
                    {this.displayTshirts()}
                </ul>
                <TshirtDetails tshirtId={this.state.selected} />
            </div>
        );
    }
}

export default graphql(getTshirtsQuery)(TshirtList);
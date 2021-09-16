import React, { Component } from 'react';
// helps us bind apollo to react
import { graphql } from 'react-apollo';
import { getPantsQuery } from '../../queries/queries';
import PantDetails from './PantDetails';

class PantList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }

    displayPants() {
        var data = this.props.data;
        if (data.loading) {
            return (<div> Loading Pants </div>)
        } else {
            return data.pants.map(pant => {
                return (
                    <li key={pant.id} onClick={(e) => { this.setState({ selected: pant.id }) }}>{pant.pantType}</li>
                )
            })
        }
    }

    render() {
        return (
            <div id="main">
                <ul id="pant-list">
                    {this.displayPants()}
                </ul>
                <PantDetails pantId={this.state.selected} />
            </div>
        );
    }
}

export default graphql(getPantsQuery)(PantList);
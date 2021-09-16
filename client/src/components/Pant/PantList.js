import React, { Component } from 'react';
// helps us bind apollo to react
import { graphql } from 'react-apollo';
import { getPantsQuery } from '../../queries/queries';
// components
import PantDetails from './PantDetails';
import { ListItem } from '../List';
import { LoadingMessage } from '../Loading';


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
            return ( <LoadingMessage /> )
        } else {
            return data.pants.map(pant => {
                return (
                    <ListItem key={pant.id} onClick={(e) => { this.setState({ selected: pant.id }) }}>{pant.pantType}</ListItem>
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
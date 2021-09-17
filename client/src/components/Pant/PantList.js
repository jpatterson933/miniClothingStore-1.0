import React, { Component } from 'react';
// helps us bind apollo to react
import { graphql } from 'react-apollo';
import { getPantsQuery } from '../../queries/queries';
// Style Sheets
import './index.css';
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
                    <ListItem
                        key={pant.id}
                        onClick={(e) => { this.setState({ selected: pant.id }) }}
                        liclass="pant-list-item"
                    >
                        {pant.pantType}
                    </ListItem>
                )
            })
        }
    }

    render() {
        return (
            <div id="pant-list-div">
                <ul id="pant-list-ul">
                    {this.displayPants()}
                </ul>
                <PantDetails pantId={this.state.selected} />
            </div>
        );
    }
}

export default graphql(getPantsQuery)(PantList);
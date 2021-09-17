import React, { Component } from 'react';
// helps us bind apollo to react
import { graphql } from 'react-apollo';
//queries
import { getTshirtsQuery } from '../../queries/queries';
// Style Sheets
import './index.css';
// components
import TshirtDetails from './TshirtDetails';
import { ListItem } from '../List';
import { LoadingMessage } from '../Loading';

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
            return (<LoadingMessage />)
        } else {
            return data.tshirts.map(tshirt => {
                return (
                    <ListItem
                    key={tshirt.id}
                    onClick={(e) => { this.setState({ selected: tshirt.id }) }}
                    liclass="shirt-list-item"
                >
                    {tshirt.shirtType}
                </ListItem>
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
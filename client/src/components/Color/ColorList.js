import React, { Component } from 'react';
// helps us bind apollo to react
import { graphql } from 'react-apollo';
//query
import { getColorsQuery } from '../../queries/queries';
// components

class ColorList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }

    displayColors() {
        var data = this.props.data;
        if (data.loading) {
            return (<div> Loading Color </div>)
        } else {
            return data.colors.map(color => {
                return (
                    <li key={color.id} onClick={(e) => { this.setState({ selected: color.id }) }}>{color.name}</li>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <ul id="color-list">
                    {this.displayColors()}
                </ul>
                {/* <ColorDetails colorId={this.state.selected} /> */}
            </div>
        );
    }
}

export default graphql(getColorsQuery)(ColorList);
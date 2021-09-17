import React, { Component } from 'react';
// helps us bind apollo to react
import { graphql } from 'react-apollo';
//query
import { getColorsQuery } from '../../queries/queries';
// Style Sheet
import './index.css';
// components
import { ListItem } from '../List';
import { LoadingMessage } from '../Loading';

class ColorList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: null
        }
    }
    displayColors() {
        let data = this.props.data;
        
        if (data.loading) {
            return ( <LoadingMessage /> )
        } else {
            return data.colors.map(color => {
                return (
                        <ListItem 
                            key={color.id} 
                            onClick={(e) => { this.setState({ selected: color.id }) }}
                            liclass="color-list-item"
                        >
                            {color.name}
                        S</ListItem>
                )
            })
        }
    }

    render() {
        return (
            <div className="color-list-div">
                <ul className="color-list-ul">
                    {this.displayColors()}
                </ul>
                {/* <ColorDetails colorId={this.state.selected} /> */}
            </div>
        );
    }
}

export default graphql(getColorsQuery)(ColorList);
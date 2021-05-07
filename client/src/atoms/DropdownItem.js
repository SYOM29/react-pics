import React, { Component } from 'react'

export default class DropdownItem extends Component {
    render() {
        return (
            <option value={this.props.index}>{this.props.input}</option>
        )
    }
}

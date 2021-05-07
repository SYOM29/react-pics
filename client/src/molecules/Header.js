import React, { Component } from 'react';
import SearchBar from "../atoms/SearchBar";

export default class Header extends Component {
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit= {this.onFormSubmit}>
                    <SearchBar onSubmit={this.onSubmit}/>
                </form>
            </div>
        )
    }
}

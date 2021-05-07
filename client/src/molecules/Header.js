import React, { Component } from 'react';
import SearchBar from "../atoms/SearchBar";

export default class Header extends Component {
    state = { searchTerm: "" };

    onFormSubmit = event => {
      event.preventDefault();
      
      this.props.onSubmit(this.state.searchTerm);
    }

    onSearchInputChange = (searchTerm) => 
    {
        this.setState({ searchTerm: searchTerm });
    }

    render() {
        const searchTerm = this.state.searchTerm;

        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <SearchBar onChange={this.onSearchInputChange} searchTerm={searchTerm}/>
                </form>
            </div>
        )
    }
}

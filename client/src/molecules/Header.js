import React, { Component } from 'react';
import SearchBar from "../atoms/SearchBar";
import constants from '../constants/constants';

export default class Header extends Component {
    state = { searchTerm: "", sortBy: "" };
    constructor(props) {
        super(props);
        this.state = { searchTerm: "", sortBy: "" };
      }

    onFormSubmit = event => {
      event.preventDefault();
      
      this.props.onSubmit(this.state.searchTerm, this.state.sortBy);
    }

    onSearchInputChange = (searchTerm) => 
    {
        this.setState({ searchTerm: searchTerm });
    }

    onSortByChange = (sortBy) => {
        var sortingDirection = sortBy === constants.dropdownOpts[1] ? constants.unsplashSortingConstants[1] : constants.unsplashSortingConstants[0];
        this.setState({ sortBy: sortingDirection }, () => this.props.onSubmit(this.state.searchTerm, this.state.sortBy));
    };

    render() {
        const searchTerm = this.state.searchTerm;

        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <SearchBar onChange={this.onSearchInputChange} searchTerm={searchTerm} onSortByChange={this.onSortByChange}/>
                </form>
            </div>
        )
    }
}

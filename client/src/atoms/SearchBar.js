import React from "react";
import Dropdown from "./Dropdown";
import searchSortOpts from '../constants/searchSortingDropdown';

class SearchBar extends React.Component { 
  render() {
    return (
      <div className="field">
        <label>Image Search</label>
        <div className="ui right labeled input">
          <input
            type="text"
            value={this.props.searchTerm}
            onChange={e => this.props.onChange(e.target.value)}
          />
          <Dropdown sortOpts={searchSortOpts.dropdownOpts} />
        </div>
      </div>
    );
  }
}

export default SearchBar;

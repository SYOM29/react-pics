import React from "react";
import Dropdown from "./Dropdown";
import constants from '../constants/constants';

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
          <Dropdown sortOpts={constants.dropdownOpts} onSortByChange={this.props.onSortByChange}/>
        </div>
      </div>
    );
  }
}

export default SearchBar;

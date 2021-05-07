import React from "react";
import Dropdown from "./Dropdown";
import searchSortOpts from '../constants/searchSortingDropdown';

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="field">
        <label>Image Search</label>
        <div class="ui right labeled input">
          <input
            type="text"
            value={this.state.term}
            onChange={e => this.setState({ term: e.target.value })}
          />
          <Dropdown sortOpts={searchSortOpts.dropdownOpts} />
        </div>
      </div>
    );
  }
}

export default SearchBar;

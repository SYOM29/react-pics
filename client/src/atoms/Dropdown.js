import React from "react";
import DropdownItem from "./DropdownItem";
import "./styling/Dropdown.css";

class Dropdown extends React.Component {
  render() {
    const sortOptions = this.props.sortOpts.map((sortOpt, index) => {
        return <DropdownItem key={index} input={sortOpt} index={`"${index}"`}/>;
      });
    
    return (
      <select className="ui dropdown">
        <option value="">Sort By</option>
            {sortOptions}
      </select>
    );
  }
}

export default Dropdown;

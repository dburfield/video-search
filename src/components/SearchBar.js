import React from "react";
import { FormControl } from "@material-ui/core";
import { TextField } from "@material-ui/core";

class SearchBar extends React.Component {
  state = { searchterm: "" };

  onSearchtermChange = (event) => {
    this.setState({ searchterm: event.target.value });
  };

  // onMaxresultsChange = event => {
  //   this.setState({ maxresults: event.target.value });
  // };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchterm);
  };

  render() {
    return (
      <>
        <div className="search-bar ui segment">
          <form onSubmit={this.onFormSubmit}>
            <FormControl>
              <TextField
                id="searchterm"
                label="Search"
                variant="filled"
                value={this.state.searchterm}
                onChange={this.onSearchtermChange}
                type="search"
              />
            </FormControl>

            {/* <div className="field">
            <label>Results Amount</label>
            <input
              type="number"
              value={this.state.maxresults}
              onChange={this.onMaxresultsChange}
            />
          </div> */}

          </form>
        </div>
      </>
    );
  }
}

export default SearchBar;

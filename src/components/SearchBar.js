import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


const styles = (theme) => ({
  root: {
    padding: "1em 0",
    marginBottom: "1em",
    display: "flex",
    alignItems: "center",
    width: "100%",    
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
});

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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <form onSubmit={this.onFormSubmit}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
          <TextField
              className={classes.input}
              id="searchterm"
              label="Search"
             
              value={this.state.searchterm}
              onChange={this.onSearchtermChange}
              type="search"            
            />
          </Grid>
          <Grid item>
            <SearchIcon />
          </Grid>
        </Grid>

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
    );
  }
}

export default withStyles(styles)(SearchBar);

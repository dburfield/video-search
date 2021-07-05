import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

import HeaderBar from "./HeaderBar.js";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    // width: "90%",
    // margin: "0 auto",
    // border: "3px solid rgb(126, 124, 124)",
    padding: "2em",
    // marginTop: "1em",
  },
});

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    // load with 'pinball' as default
    this.onSearchSubmit("pinball");
  }

  onSearchSubmit = async (searchterm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchterm,
        maxResults: 5,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <HeaderBar />
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <article>
              <SearchBar onFormSubmit={this.onSearchSubmit} />
            </article>
          </Grid>

          <Grid item xs={8}>
            <VideoDetail video={this.state.selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(App);

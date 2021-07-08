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
    padding: "2em",
  },
});

class App extends React.Component {
  state = { videos: [], selectedVideo: null, likes: 1543, dislikes: 47, views: 2155 };

  componentDidMount() {
    // do a placeholder default search
    this.onSearchSubmit("carl sagan tesseract");    
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
      selectedVideo: response.data.items[0]      
    });
  };

  onVideoSelect = (video, likes, dislikes, views) => {    
    this.setState({
      selectedVideo: video,
      likes: likes,
      dislikes: dislikes,
      views: views,
    });
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
            <VideoDetail
              video={this.state.selectedVideo}
              likes={this.state.likes}
              dislikes={this.state.dislikes}
              views={this.state.views}
            />
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

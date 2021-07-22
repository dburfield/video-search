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
let views =  Math.floor(Math.random() * 5000)
let likes = Math.floor((Math.random() * 1000)+ 500)
let dislikes = Math.floor(Math.random() * 400) 
class App extends React.Component {
  
  state = { videos: [], selectedVideo: null, views:views, likes:likes, dislikes:dislikes};
  
  componentDidMount() {
    // do a landing default search
    this.onSearchSubmit("4d tesseract", 5);    
  }

  onSearchSubmit = async (searchterm, results) => {
    console.log('onserach submit triggers')
    const response = await youtube.get("/search", {
      params: {
        q: searchterm,
        maxResults: results,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
      views: views, 
      likes: likes,
      dislikes: dislikes   
    });
  };
  
  onVideoSelect = (video, views, likes, dislikes) => {    
    this.setState({
      selectedVideo: video, 
      views: views, 
      likes: likes,
      dislikes: dislikes
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

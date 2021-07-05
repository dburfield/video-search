import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingRight: "3em",
  },
  container: {},
  video: {
    position: "absolute",
    top: "0", 
    left: "0", 
    width: "100%",
    height: "100%"
  },
  viewsline: {
    fontSize: "1em",
  },
}));

const VideoDetail = ({ video }) => {
  const classes = useStyles();

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={8} >
          <iframe
            title="video player"
            src={videoSrc}
            className={classes.video}
            id="videocontainer"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1" gutterBottom>
            {video.snippet.title}
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          display="flex"
          
          justify="space-between"
          alignItems="center"
        >
          {/* {statistics.viewCount} */}
          <p className={classes.viewsline}>
            251,883 views <span id="dot"></span> Jun 14, 2017
            {/* {status.publishAt}  */}
          </p>
          <p>
            <IconButton>
              <ThumbUpIcon />
            </IconButton>
            {/* {statistics.likeCount} */}
            1.1K
            <IconButton>
              <ThumbDownIcon />
            </IconButton>
            74{" "}
          </p>

          {/* {statistics.dislikeCount } */}
        </Grid>
        <Grid item xs={12} className={classes.description}>
          <Divider />
          <Typography variant="subtitle1" component="h2" gutterBottom>
            <p>{video.snippet.description}</p>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default VideoDetail;

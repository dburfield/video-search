import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import Moment from "react-moment";
var decode = require("unescape");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingRight: "3em",
  },
  video: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  },
  likes: {
    textAlign: "right",
  },
  h1: {
    fontSize: "1.5em",
    margin: ".6em 0",
  },
}));

const VideoDetail = ({ video, views, likes, dislikes }) => {
  const classes = useStyles();

  const [likecount, setLikeCount] = useState(likes);
  const [dislikecount, setDislikeCount] = useState(dislikes);

  // when new video selected, update like/dislike counts
  useEffect(() => {
    setLikeCount(likes);
    setDislikeCount(dislikes);
  }, [likes, dislikes]);

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} id="videocontainer">
        <iframe title="video player" src={videoSrc} className={classes.video} />
      </Grid>
      <Grid item xs={12}>
        <Typography component="h1" className={classes.h1}>
          {decode(video.snippet.title)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs>
            <p>
              {views} views <span id="dot"></span>
              <Moment format="LL">{video.snippet.publishedAt}</Moment>
            </p>
          </Grid>
          <Grid item xs>
            <p className={classes.likes}>
              <IconButton onClick={() => setLikeCount(likecount + 1)}>
                <ThumbUpIcon />
              </IconButton>
              {likecount}
              <IconButton onClick={() => setDislikeCount(dislikecount + 1)}>
                <ThumbDownIcon />
              </IconButton>
              {dislikecount}
            </p>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.description}>
          <Divider />
          <Typography variant="subtitle1" component="h2" gutterBottom>
            <p>{video.snippet.description}</p>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VideoDetail;

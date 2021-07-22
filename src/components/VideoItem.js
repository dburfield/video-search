import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";
var decode = require('unescape');

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  thumbnail: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    border: "2px solid",
    '&:hover': {border:"2px solid #ff0000"}
  },
  thumbnailDescription: {
    '&:hover': {color: "#ff0000"}
  }
}));

const VideoItem = ({ video, onVideoSelect }) => {
  
  const classes = useStyles();
  let views =  Math.floor(Math.random() * 5000)
  let likes = Math.floor((Math.random() * 1000)+ 500)
  let dislikes = Math.floor(Math.random() * 400) 
  return (
    <>
      <Grid item xs={6} onClick={() => onVideoSelect(video, views, likes, dislikes)}>
        <ButtonBase className={classes.image}>          
          <img
            alt={video.snippet.title}
            className={classes.thumbnail}
            id="thumbnail"
            src={video.snippet.thumbnails.medium.url}
          />
        </ButtonBase>
      </Grid>
      <Grid item xs={6}>
        <Typography className="thumbnailDescription" variant="subtitle1">{decode(video.snippet.title)}</Typography>
      </Grid>
    </>
  );
};

export default VideoItem;

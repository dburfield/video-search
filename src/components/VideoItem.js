import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const VideoItem = ({ video, onVideoSelect }) => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={6} onClick={() => onVideoSelect(video)}>
        <ButtonBase className={classes.image}>
          <img
            alt={video.snippet.title}
            className={classes.img}
            src={video.snippet.thumbnails.medium.url}
          />
        </ButtonBase>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle1">{video.snippet.title}</Typography>
      </Grid>
    </>
  );
};

export default VideoItem;

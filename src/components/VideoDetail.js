import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  description: {
    maxWidth: "70%",
  },
  video: {
    width: "800px",
    height: "400px",
  }
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
    <Grid item xs={8}>
      <iframe title="video player" src={videoSrc} className={classes.video}/>
      </Grid>
      <Grid item xs={12}>
      <p>{video.snippet.title}</p>
      </Grid>
      <Grid item xs={12} className={classes.description}>
      <p>{video.snippet.description}</p>      
      </Grid>
      <Grid item xs={12}>
        {/* <p>Views: {video.id}</p> */}
      </Grid>
      </Grid>
    </>
  );
};

export default VideoDetail;

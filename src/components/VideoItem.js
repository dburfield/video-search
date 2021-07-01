import React from "react";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid onClick={() => onVideoSelect(video)} >
      <Grid>
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      </Grid>
      <Grid>
      <Typography variant="subtitle1" >
        {video.snippet.title}
      </Typography>
      </Grid>
    </Grid>
  );
};

export default VideoItem;

import React from "react";
import VideoItem from "./VideoItem";

import Grid from "@material-ui/core/Grid";

// loop over list and pass down onVideoSelect callback to each one
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <React.Fragment key={video.id.videoId}>
        <VideoItem onVideoSelect={onVideoSelect} video={video} />
      </React.Fragment>
    );
  });

  return (
    <Grid container spacing={2}>
      {renderedList}
    </Grid>
  );
};

export default VideoList;

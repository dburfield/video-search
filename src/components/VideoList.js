import React from "react";
import VideoItem from "./VideoItem";

import Grid from "@material-ui/core/Grid";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <Grid container spacing={8}>
        <VideoItem
          key={video.id.videoId}
          onVideoSelect={onVideoSelect}
          video={video}
        />
      </Grid>
    );
  });

  return <>{renderedList}</>;
};

export default VideoList;

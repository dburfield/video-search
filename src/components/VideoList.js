import React from "react";
import VideoItem from "./VideoItem";

import Grid from "@material-ui/core/Grid";

const VideoList = ({ videos, onVideoSelect }) => {
  
  const renderedList = videos.map((video) => {
    console.log(video.snippet.publishedAt)
    return (      
        <VideoItem  
        key={video.snippet.publishedAt}        
          onVideoSelect={onVideoSelect}
          video={video}
        />
      
    );
  });

  return <Grid container spacing={4}>
    {renderedList}
    </Grid>
};

export default VideoList;

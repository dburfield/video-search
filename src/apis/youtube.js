import axios from "axios";

const KEY = 'AIzaSyDGMnU0eXa9QFMwSrqZekB3N9V2xuGrC20'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",    
    key: KEY,
  },
});

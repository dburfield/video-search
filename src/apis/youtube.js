import axios from "axios";

const KEY = 'AIzaSyDGMnU0eXa9QFMwSrqZekB3N9V2xuGrC20'

export default axios.create({
  headers: {'Content-type': 'text/html; charset=utf8'},
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {    
    part: "snippet",
    type: "video",    
    key: KEY,
  },
});
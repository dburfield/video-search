import axios from "axios";

const KEY = 'AIzaSyDGMnU0eXa9QFMwSrqZekB3N9V2xuGrC20'

export default axios.create({
  headers: {'Content-type': 'text/html; charset=utf8'},
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    // TODO part: ["snippet", "statistics"],
    part: "snippet",
    type: "video",    
    key: KEY,
  },
});







// https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YAIzaSyDGMnU0eXa9QFMwSrqZekB3N9V2xuGrC20&part=snippet,statistics&fields=items(id,snippet,statistics)

// GET https://www.googleapis.com/youtube/v3/search
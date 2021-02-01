import axios from './headerAxios'
import { Video } from '../interfaces/video'


class VideoService {
     static url = process.env.REACT_APP_URL_API

     static async getVideos () {
          try {
               const {data} = await axios.get<Video[]>(`${VideoService.url}/video`)
               return data
          } catch (error) {
               console.log(error);
               return []
          }
     }
}

export default VideoService
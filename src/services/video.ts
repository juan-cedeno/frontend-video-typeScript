import axios from './headerAxios'
import { Video } from '../interfaces/video'
import UserService from './user'


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

     static async postVideo (video : Video) {
          try {
               const {data} = await axios.post<Video>(`${UserService.url}/video` , video )
               return data
          } catch (error) {
               console.log(error);
               return undefined
          }
     }

     static async getVideoByid (id : string) {
          try {
               const {data} = await axios.get<Video>(`${VideoService.url}/video/${id}`)
               return data
          } catch (error) {
               console.log(error);
               return undefined
               
          }
     }

     static async editVideo (id : string , video : Video) {
          try {
               const {data} = await axios.put(`${VideoService.url}/video/${id}` , video)
               return data
          } catch (error) {
               console.log(error);
               return undefined
          }
     }

     static async deleteVideo (id : string) {
          try {
               await axios.delete(`${UserService.url}/video/${id}`)
               return true
          } catch (error) {
               console.log(error);
               return false
               
          }
     }
}

export default VideoService
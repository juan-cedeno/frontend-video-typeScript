import { useEffect, useState } from "react";
import { Video } from "../interfaces/video";
import VideoService from "../services/video";
import { VideoItems } from "./VideoItems";
import '../css/video.css'

export const Videos = () => {

     const [videos, setVideos] = useState<Video[]>([])

     useEffect(() => {
          const getVideos = async () => {
            const data = await VideoService.getVideos()
            setVideos(data)
            
          }
          
          getVideos()
       }, [])

       const deleteVideo = (id : string) => {
            VideoService.deleteVideo(id)
            const videoDeleted = videos.filter(video => video._id !== id)
            setVideos(videoDeleted)
       }

     return (
          <div className = 'cont-video'> 
               {
                    videos.map( items => (
                         <VideoItems items = {items} key = {items._id} deleteVideo = {deleteVideo}/>
                    ))
               }
          </div>
     )
}

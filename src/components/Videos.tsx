import { useEffect, useState } from "react";
import { Video } from "../interfaces/video";
import VideoService from "../services/video";
import { VideoItems } from "./VideoItems";
import '../css/video.css'
import { Spinner } from "./Spinner";

export const Videos = () => {

     const [videos, setVideos] = useState<Video[]>([])
     const [loading, setLoading] = useState<boolean>(false)

     useEffect(() => {
          setLoading(true)
          const getVideos = async () => {
            const data = await VideoService.getVideos()
            setVideos(data)
            setLoading(false)
            
          }
          getVideos()
       }, [])

       const deleteVideo = (id : string) => {
            VideoService.deleteVideo(id)
            const videoDeleted = videos.filter(video => video._id !== id)
            setVideos(videoDeleted)
       }

       if (loading) {
            return <Spinner/>
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

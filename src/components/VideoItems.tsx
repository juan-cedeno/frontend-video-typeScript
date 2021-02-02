import { Video } from "../interfaces/video";
import ReactPlayer from "react-player/youtube";
import { ButtonAction } from "./ButtonAction";

interface IProps {
  items: Video;
  deleteVideo : (id : string) => void
}

export const VideoItems = ({ items , deleteVideo}: IProps) => {
  return (
    <div className = 'video animate__animated animate__pulse'>
      <div className = 'name-video'>
        <p>{items.name}</p>
        <ButtonAction deleteVideo = {() => deleteVideo(items._id!)} id = {items._id!}/>
      </div>
      <div>
        <ReactPlayer
         url={items.video} controls 
         />
      </div>
    </div>
  );
};

import { Video } from "../interfaces/video";
import ReactPlayer from "react-player/youtube";

interface IProps {
  items: Video;
}

export const VideoItems = ({ items }: IProps) => {
  return (
    <div className = 'video'>
      <div className = 'name-video'>
        <p>{items.name}</p>
      </div>
      <div>
        <ReactPlayer
         url={items.video} controls 
         />
      </div>
    </div>
  );
};

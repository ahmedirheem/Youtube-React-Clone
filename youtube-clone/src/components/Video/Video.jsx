import {VideoContent,Thumbnai,TimeLine,DescContainer,VideoTitle,VideoInfo,ViewsAndDuration} from './VideoWrapper.styles';
import { VideoName } from '../../App';
import { useContext } from 'react';
const Video = ({img,avatar,word,name,video,category}) => {
    const { globalState, setGlobalState }=useContext(VideoName);
  return (
    <VideoContent onClick={()=>{setGlobalState(video)}}>
            <Thumbnai>
                <img src={img} alt='sorry'/>
                <TimeLine><span>{`${Math.floor((Math.random()*60))}:${Math.floor((Math.random()*60))}`}</span></TimeLine>
            </Thumbnai>
            <DescContainer>
                <VideoTitle>
                    <img src={avatar} alt='sorry'/>
                    <span>{word}</span>
                </VideoTitle>
                <VideoInfo>
                    <span>{name}</span>
                    <ViewsAndDuration>
                        <span>{Math.floor((Math.random()*100))}k views</span>
                        <span>{Math.floor((Math.random()*60))} minutes ago</span>
                    </ViewsAndDuration>
                </VideoInfo>
            </DescContainer>
        </VideoContent>
  )
}
export default Video;
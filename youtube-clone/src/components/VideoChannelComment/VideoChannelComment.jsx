import React from 'react'
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube'
import { useContext } from 'react';
import { VideoName } from '../../App';
const VideoChannelComment = () => {
  const { globalState, setGlobalState }=useContext(VideoName);
  return (
    <Wrapper>
        <ReactPlayer url={globalState} width='100%' height='40rem'/>
    </Wrapper>
  )
}
const Wrapper=styled.div`
width:80vw;
height:100%;
ReactPlayer{
    width:100%;

}
`
export default VideoChannelComment
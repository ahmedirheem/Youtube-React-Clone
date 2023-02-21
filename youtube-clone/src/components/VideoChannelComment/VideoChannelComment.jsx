import React from 'react'
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube'
const VideoChannelComment = () => {
  return (
    <Wrapper>
        <ReactPlayer url='https://www.youtube.com/watch?v=7gAtm6EOOWk' width='100%' height='40rem'/>
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
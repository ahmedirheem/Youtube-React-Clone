import React from 'react'
import Header from '../../components/Header/Header';
import VideoList from '../../components/VideoList/VideoList';
import VideoChannelComment from '../../components/VideoChannelComment/VideoChannelComment';
import styled from 'styled-components';
const VideoPage = () => {
  return (
    <div>
    <Header/>
    <Wrapper>
    <VideoChannelComment/>
    <VideoList/>
    </Wrapper>
    </div>
  )
}
const Wrapper=styled.div`
width:100%;
height:200vh;
display:flex;
`
export default VideoPage
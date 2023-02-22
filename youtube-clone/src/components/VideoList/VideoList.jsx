import { style } from '@mui/system';
import React from 'react'
import styled from 'styled-components';
import VideoForList from '../VideoForList/VideoForList';
import { faker } from '@faker-js/faker';
const VideoList = () => {
    const arr=[1,2,3,4,5,6,7,8,9,0,123,13,13,13];
  return (
    <VideoListComp>{arr.map((el,index)=>(
        <VideoForList key={index} img={faker.image.abstract()} lines={faker.lorem.lines(1)} fullName={faker.name.fullName()}/>
    ))}</VideoListComp>
  )
}
const VideoListComp=styled.div`
height:100vh;
width:32vw;
max-width:429px;
padding-top:15px;
`
export default VideoList
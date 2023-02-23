import React from 'react'
import styled from 'styled-components';
import Video from '../Video/Video';
import { faker } from '@faker-js/faker';
import {Link} from 'react-router-dom';
import { VideoBasicData } from '../../data/VideosData';
const VideoWrapper = () => {
  return (
    <Wrapper>
       {VideoBasicData.map((el,index)=>(<Link  style={{textDecoration:'none'}}key={index} to='/video'><Video img={faker.image.business()} avatar={faker.image.avatar()} word={el.title} name={faker.name.fullName()} video={el.video} category={el.category}/></Link>))}
    </Wrapper>
  )
}

const Wrapper=styled.div`
width:87vw;
height:100vh;
/* background-color: red; */
margin-left:13vw;
padding-top:15px;
display:flex;
flex-wrap: wrap;
`;
export default VideoWrapper;
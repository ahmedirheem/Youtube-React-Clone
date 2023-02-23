import React from 'react'
import styled from 'styled-components';
import Video from '../Video/Video';
import { faker } from '@faker-js/faker';
import {Link} from 'react-router-dom';
const VideoWrapper = () => {
    const arr=[1,2,3,4,5,6,7,8,9,10,11,12];
  return (
    <Wrapper>
       { arr.map((el,index)=>(<Link key={index} to='/video'><Video img={faker.image.business()} avatar={faker.image.avatar()} word={faker.word.adjective(5)} name={faker.name.fullName()}/></Link>))}
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
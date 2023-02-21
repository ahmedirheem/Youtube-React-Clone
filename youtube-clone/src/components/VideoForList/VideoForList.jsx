import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Video,ImgContainer,TimeLine,IconContainer,Icon,DescContainer,DescSpan} from './VideoForList.styles';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
const VideoForList = ({lines,fullName,img}) => {
    const [isHovered,setIsHovered]=useState(false);
    const timeExp=`${Math.floor(Math.random()*30)}:${Math.floor(Math.random()*30)}`;
  return (
    <Video onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        <ImgContainer>
          <img src={img} alt='sorry'/>
          <TimeLine hovered={isHovered}>
            <span>{timeExp}</span>
          </TimeLine>
          <IconContainer hovered={isHovered}>
            <Icon><AccessTimeIcon/></Icon>
            <Icon><MenuOpenIcon/></Icon>
          </IconContainer>
        </ImgContainer>
        <DescContainer>
            <span>{faker.lorem.lines(lines)}</span>
            <DescSpan>{fullName}</DescSpan>
            <DescSpan>{`${Math.floor(Math.random()*30)}views *${Math.floor(Math.random()*30)} hour ago`}</DescSpan>
        </DescContainer>
        <MoreVertIcon sx={{position:'absolute',top:'8%',right:'1%',opacity:isHovered?'1':'0',transition:'all .5s'}}/>
    </Video>
  )
}

export default VideoForList
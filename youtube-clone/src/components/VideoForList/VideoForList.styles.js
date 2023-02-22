import styled from 'styled-components';
export const Video=styled.div`
width:100%;
display:flex;
height:100px;
margin:10px;
position:relative;
/* background: black; */
`;
export const ImgContainer=styled.div`
width:40%;
height:100%;
border-radius: 10px;
img{
    width:100%;
    height:100%;
    border-radius: inherit;
}
position: relative;
cursor: pointer;
margin-right:10px;
`
export const TimeLine=styled.div`
width:40px;
height:20px;
background: #0f0f0f;
color:#fff;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
bottom:10%;
right:10%;
font-size:12px;
transition: all .5s;
opacity: ${props=>(props.hovered? '0': '1')};
`;
export const IconContainer=styled.div`
width:30px;
height:70%;
position: absolute;
right:7%;
top:0%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
transition: all .5s;
opacity: ${props=>(props.hovered? '1': '0')};
`;
export const Icon=styled(TimeLine)`
width:30px;
height:30px;
position: initial;
`;
export const DescContainer=styled.div`
width:60%;
height:75%;
/* background-color: yellow; */
display:flex;
align-items:flex-start;
flex-direction: column;
font-size:14px;
justify-content: space-between;
`;
export const DescSpan=styled.span`
font-size:12px;
font-family: 'Roboto',sans-serif;
font-weight: bold;
`
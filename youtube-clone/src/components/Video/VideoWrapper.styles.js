import styled from 'styled-components';
export const Wrapper=styled.div`
width:87vw;
height:100vh;
/* background-color: red; */
margin-left:13vw;
padding-top:15px;
`;
export const VideoContent=styled.div`
min-height:329px;
height:auto;
color:#0f0f0f;
text-decoration: none;
/* background-color:black; */
width:20vw;
margin:10px;
@media screen and (max-width:1150px){
    width:25vw;
}
@media screen and (max-width:900px){
    width:33vw
}
@media screen and (max-width:500px){
    width:60vw
}
`;
export const Thumbnai=styled.div`
    width:100%;
    height:186px;
    /* background-color:yellow; */
    border-radius: 20px;
    img{
        width:100%;
        height:100%;
        border-radius: inherit;
    }
    position:relative;
`;
export const TimeLine=styled.div`
   width:32px;
   height:12px;
   display:flex;
   align-items: center;
   justify-content: center;
   background-color:rgb(15,15,15);
   position:absolute;
   color:#fff;
   bottom:7.5%;
   right:7.5%;
`;
export const DescContainer=styled.div`
width:100%;
height:100px;
/* background-color: yellow; */
`;
export const VideoTitle=styled.div`
width:100%;
height:44px;
/* background-color:green; */
align-items: center;
display:flex;
justify-content:flex-start;
font-family: 'Roboto';
img{
    width:40px;
    height:40px;
    border-radius: 50%;
    margin-right:10px;
}
`;
export const VideoInfo=styled.div`
margin-left:40px;
display:flex;
align-items: flex-start;
flex-direction: column;
font-family: 'Roboto',sans-serif;
`
export const ViewsAndDuration=styled.div`
display:flex;
align-items: center;
justify-content: flex-start;
font-size: 14px;
`;



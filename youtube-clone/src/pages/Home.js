import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import VideoWrapper from '../components/VideoWrapper/VideoWrapper'

const Home = () => {
    return (
        <div>
            <Header />
            <Body>
                <Sidebar />
                <VideoWrapper/>
            </Body>
            
        </div>
    )
}

export default Home;

const Body = styled.div`
    display: grid;
    grid-template-columns: 20% auto;
    margin-top: 50px;
    position: relative;
`
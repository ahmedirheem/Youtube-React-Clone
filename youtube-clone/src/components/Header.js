import React from 'react'
import styled from 'styled-components'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';

const Header = () => {
    return (
        <Wrapper>
            <LeftSide>
                <MenuIcon />
                <a href="/">
                    <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" alt="Logo" />
                </a>
            </LeftSide>

            <MiddleSide>
                <SearchWrap>
                    <input type="serach" placeholder='Search' />
                    <SearchIcon />
                </SearchWrap>
                <MicOutlinedIcon />
            </MiddleSide>
            
            <RightSide>
                <VideoCallOutlinedIcon />
                <NotificationsNoneOutlinedIcon />
                <PermIdentityOutlinedIcon />
            </RightSide>
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 22% auto 22%;
    padding: 0rem 1rem;

    .MuiSvgIcon-root{
        width: 40px;
        height: 40px;
        padding: 7px;
        border-radius: 50%;
        cursor: pointer;
        :hover{
            background-color: #9090902e
        }
    }
`

const LeftSide = styled.div`
    display: flex;
    align-items: center;

    img{
        height: 60px;
    }
`
const MiddleSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
`
const SearchWrap = styled.div`
    display: grid;
    grid-template-columns: auto 10%;
    width: 100%;
    max-width: 600px;
    border: 1px solid lightgray;
    border-radius: 25px;
    overflow: hidden;

    input{
        border: none;
        outline: none;
        padding: 0.5rem 1rem;
        font-size: 16px;
        background: none;
        border-right: 1px solid lightgray;
    }

    .MuiSvgIcon-root{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 0;
        width: 100% !important;
        height: 40px !important;
        background-color: #F8F8F8;
        :hover{
            background-color: #9090902e
        }
    }
`

const RightSide = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-end;
`
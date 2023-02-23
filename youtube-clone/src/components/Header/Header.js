import React from 'react'

import {Wrapper, LeftSide, MiddleSide, SearchWrap, RightSide} from './Header.styles'

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

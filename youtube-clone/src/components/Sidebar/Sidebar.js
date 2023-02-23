import React from 'react'
import {Wrapper, ListSection, ListTitle, BottomWrap, } from './Sidebar.styles'

import { MainLists, SeconderyLists, Subscrptions, ExploreLists, YoutubeParts, YoutubeHelping} from '../../data/SidebarData';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
    return (
        <Wrapper>
            <ListSection>
                {MainLists.map((item, index) => (
                    <SidebarItem key={index} icon={item.icon} title={item.title} />
                ))}
            </ListSection>
            <hr />

            <ListSection>
                {SeconderyLists.map((item, index) => (
                    <SidebarItem key={index} icon={item.icon} title={item.title} />
                ))}
            </ListSection>
            <hr />

            <ListSection>
                <ListTitle>Subscriptions</ListTitle>
                {Subscrptions.map((item, index) => (
                    <SidebarItem key={index} image={item.image} title={item.title} />
                ))}
            </ListSection>
            <hr />

            <ListSection>
                <ListTitle>Explore</ListTitle>
                {ExploreLists.map((item, index) => (
                    <SidebarItem key={index} icon={item.icon} title={item.title} />
                ))}
            </ListSection>
            <hr />

            <ListSection>
                <ListTitle>More from YouTube</ListTitle>
                {YoutubeParts.map((item, index) => (
                    <SidebarItem key={index} icon={item.icon} title={item.title} />
                ))}
            </ListSection>
            <hr />

            <ListSection>
                {YoutubeHelping.map((item, index) => (
                    <SidebarItem key={index} icon={item.icon} title={item.title} />
                ))}
            </ListSection>
            <hr />


            <BottomWrap>
                <p><a href='/'>About</a> <a href='/'>Press</a> <a href='/'>Copyright</a> <a href='/'>Contact us</a> <a href='/'>Creators</a> <a href='/'>Advertise</a> <a href='/'>Developers</a></p><br/>
                <p><a href='/'>Terms</a> <a href='/'>Privacy</a> <a href='/'>Policy & Safety</a> <a href='/'>How YouTube works</a> <a href='/'>Test new features</a></p><br/>
                <span>© 2023 Google LLC</span>
            </BottomWrap>
        </Wrapper>
    )
}

export default Sidebar;

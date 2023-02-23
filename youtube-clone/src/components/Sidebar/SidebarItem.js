import React from 'react'
import {ItemWrapper, ItmeIcon, ItemTitle } from './Sidebar.styles'

const SidebarItem = ({icon, image, title}) => {
    return (
        <ItemWrapper>
            {image && <img src={image} alt={title} />}
            {icon && <ItmeIcon>{icon}</ItmeIcon>}
            <ItemTitle>{title}</ItemTitle>
        </ItemWrapper>
    )
}

export default SidebarItem;

import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 50px;
    left: 0;
    width: 20%;
    height: 100%;
    overflow-y: scroll;
    padding-bottom: 2.5rem;
`

export const ListTitle = styled.p`
    color: #0f0f0f;
    line-height: 2rem;
    font-size: 16px;
    font-weight: 400;
`

export const ListSection = styled.div`
    padding: 1rem;

`
export const BottomWrap = styled.div`
    padding: 1rem 1.5rem;

    a{
        font-size: 12px;
        font-weight: bold;
        text-decoration: none;
        color: #606060;
        line-height: 1.6;
        cursor: pointer;
    }
    span{
        font-size: 12px;
        color: #909090;
        line-height: 1.6;
    }
`


export const ItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 25% auto;
    align-items: center;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    transition: 0.3s ease;
    border-radius: 12px;
    width: 100%;

    :hover{
        background-color: #90909024;
    }

    img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        object-fit: cover;
    }
`


export const ItmeIcon = styled.div`
    display: flex;
    align-items: center;

    svg{
        width: 25px;
        height: 25px
    }
`

export const ItemTitle = styled.p`
    display: flex;
    align-items: center;
    color: #0f0f0f;
    line-height: 2rem;
    font-size: 14px;
    font-weight: 400;
`
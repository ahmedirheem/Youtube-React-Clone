import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 22% auto 22%;
    padding: 0rem 1rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 99999;
    background-color: #fff;

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

export const LeftSide = styled.div`
    display: flex;
    align-items: center;

    img{
        height: 60px;
    }
`
export const MiddleSide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
`
export const SearchWrap = styled.div`
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

export const RightSide = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-end;
`
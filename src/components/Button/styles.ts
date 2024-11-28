import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    background-color: #1550ff;
    border-radius: 15px;
    opacity: 1;
    transition: all ease .3s;
    cursor: pointer;

    &:hover {
     opacity: .8;
    }
    
`;

export const Icon = styled.img`
    height: 20px;
`;

export const InfoButton = styled.div`
    height: inherit;
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    flex:1;
    padding:0px 20px;
`;

export const InfoArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, .2);
    padding: 0px 15px;
`;


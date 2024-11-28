import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    margin: auto;
    display: flex;
    padding: 50px 0px;

    @media (max-width: 750px){
    flex-direction: column;
    }
`; 

export const infoArea = styled.div`
    width: 100%;
    margin: 10px 0px;

    @media (max-width: 750px) {
    justify-content: space-around;
    display: flex;
    text-align: center;
    }
`; 

export const gridArea = styled.div`
    justify-content: flex-end;
    display: flex; 
    flex: 1;

     @media (max-width: 750px) {
    justify-content: center;
    margin: 0px 20px;
    }
`; 

export const logoInfo = styled.a`
display: block;
`; 

export const info = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;

    @media (max-width: 750px) {
    align-items: center;
    margin-bottom: 50px;
    }
`; 

export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;
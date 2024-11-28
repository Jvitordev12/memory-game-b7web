import styled from "styled-components";

type ContainerProps = {
    showBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
    background-color: ${(props) => props.showBackground ? '#0000ff' : '#ff0000'};
    height: 100px;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
type OpacityProps = {
    showOpacity?: number;
}
export const Icon = styled.img<OpacityProps>`
    width: 42px;
    heidth: 42px;
    opacity:${props => props.showOpacity ?? 1 };
`;
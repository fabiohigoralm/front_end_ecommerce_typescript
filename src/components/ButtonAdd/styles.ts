import styled from "styled-components";

interface Props {
  state: boolean;
}

export const Button = styled.div(
  ({ state }: Props) =>
    `
    width: 240px;
    height: 48px;
    border-radius: 5px;
    text-align: center;
    margin: 0 auto;
    background: ${state ? "#A3F9B9" : "#40B25C"};
    color:${state ? "#1C1C1C" : "#ffffff"};
    justify-content: center;
    align-items: center;
    display: flex;
    &:hover{
        background:${state ? "" : "#1C6C3E"};
        
    }
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    img{
        margin-right:15px;
    }
    `
);

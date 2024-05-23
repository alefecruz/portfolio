import styled, { keyframes } from 'styled-components';

const animationBlinky = keyframes`
  50% { opacity: 0.0; }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    align-items: center;
    justify-content: center;
    opacity: 0.4;

    div {
        animation: ${animationBlinky} 2s step-start 1s 3;
    }
`;

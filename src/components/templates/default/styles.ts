import styled from 'styled-components';

export const Container = styled.div``;

export const ContentMyInfo = styled.div`
    height: 100vh;
    width: 27%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    position: fixed;
`;

export const ContentAbout = styled.div`
    height: 100vh;
    width: 100vw;
    margin-left: 27%;
    background-color: red;
`;

export const ContentExperience = styled.div`
    height: 100vh;
    width: 100vw;
    margin-left: 27%;
    background-color: blue;
`;

export const ContentProject = styled.div`
    height: 100vh;
    width: 100vw;
    margin-left: 27%;
    background-color: magenta;
`;

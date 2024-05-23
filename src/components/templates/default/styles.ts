import styled from 'styled-components';

export const Container = styled.div``;

export const ContentMyInfo = styled.div`
    height: 100vh;
    width: 27%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.SPACINGS.LARGE};
    justify-content: space-between;
    box-shadow: 10px 10px 10px -1px #000000;
`;

export const WrapperMyInfo = styled.div`
    width: 100%;
    display: flex;
    gap: ${({ theme }) => theme.SPACINGS.SMALL};

    flex-direction: column;
`;

export const ContentSocialMedias = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const ContentAbout = styled.div`
    height: 100vh;
    float: right;
    width: 73%;
    padding: ${({ theme }) => theme.SPACINGS.LARGE}
        ${({ theme }) => theme.SPACINGS.HUGE};
    background-color: ${({ theme }) => theme.COLORS.ACCENTED};
`;

export const ContentScrollDown = styled.div`
    display: flex;
    justify-content: center;
`;

export const WrapperAbout = styled.div`
    margin-top: ${({ theme }) => theme.SPACINGS.LARGE};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    & img {
        margin: 0 ${({ theme }) => theme.SPACINGS.XLARGE}
            ${({ theme }) => theme.SPACINGS.LARGE} 0;
    }
`;

export const ContentExperience = styled.div`
    float: right;
    width: 73%;
    padding: ${({ theme }) => theme.SPACINGS.LARGE}
        ${({ theme }) => theme.SPACINGS.HUGE};
    background-color: ${({ theme }) => theme.COLORS.ACCENTED};
`;

export const WrapperExperience = styled.div`
    margin-top: ${({ theme }) => theme.SPACINGS.LARGE};
`;

export const ContentProject = styled.div`
    float: right;
    width: 73%;
    padding: ${({ theme }) => theme.SPACINGS.LARGE}
        ${({ theme }) => theme.SPACINGS.HUGE};
    background-color: ${({ theme }) => theme.COLORS.ACCENTED};
`;

export const WrapperProject = styled.div`
    margin-top: ${({ theme }) => theme.SPACINGS.LARGE};
`;

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
`;

export const WrapperMyInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.SPACINGS.XXSMALL};
`;

export const ContentSocialMedias = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.SPACINGS.XSMALL};
`;

export const ContentAbout = styled.div`
    height: 100vh;
    float: right;
    width: 73%;
    padding: ${({ theme }) => theme.SPACINGS.LARGE}
        ${({ theme }) => theme.SPACINGS.HUGE};
    background-color: ${({ theme }) => theme.COLORS.ACCENTED};
`;

export const WrapperAbout = styled.div`
    margin-top: ${({ theme }) => theme.SPACINGS.LARGE};
    float: right;
    justify-content: flex-start;
    align-items: flex-start;
    & img {
        float: left;
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

import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export const ContentMyInfo = styled.div`
    height: 100vh;
    width: 27%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    position: fixed;
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.SPACINGS.LARGE};
    justify-content: space-around;
    box-shadow: 5px 5px 30px -5px #000000;

    @media ${({ theme }) => theme.MEDIAS.LTE_LARGE} {
        width: 100%;
        box-shadow: none;
        position: static;
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_MEDIUM} {
        width: 100%;
        box-shadow: none;
        position: static;
        padding-top: ${({ theme }) => theme.SPACINGS.HUGE};
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_SMALL} {
        width: 100%;
        box-shadow: none;
        position: static;
        padding-top: ${({ theme }) => theme.SPACINGS.HUGE};
    }
`;

export const WrapperMyInfo = styled.div`
    width: 100%;
    display: flex;
    gap: ${({ theme }) => theme.SPACINGS.SMALL};
    flex-direction: column;

    @media ${({ theme }) => theme.MEDIAS.LTE_LARGE} {
        width: 60%;
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_MEDIUM} {
        width: 100%;
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_SMALL} {
        width: 100%;
    }
`;

export const ContentSocialMedias = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media ${({ theme }) => theme.MEDIAS.LTE_LARGE} {
        width: 60%;
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_MEDIUM} {
        width: 100%;
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_SMALL} {
        width: 100%;
    }
`;

export const ContentNav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.SPACINGS.SMALL};

    @media ${({ theme }) => theme.MEDIAS.LTE_LARGE} {
        width: 60%;
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_MEDIUM} {
        width: 100%;
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_SMALL} {
        width: 100%;
    }
`;

export const ContentAbout = styled.div`
    height: 100vh;
    float: right;
    width: 73%;
    padding: ${({ theme }) => theme.SPACINGS.HUGE}
        ${({ theme }) => theme.SPACINGS.HUGE};
    background-color: ${({ theme }) => theme.COLORS.ACCENTED};

    @media ${({ theme }) => theme.MEDIAS.LTE_LARGE} {
        width: 100%;
        padding: ${({ theme }) => theme.SPACINGS.MEDIUM}
            ${({ theme }) => theme.SPACINGS.LARGE};
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_MEDIUM} {
        width: 100%;
        padding: ${({ theme }) => theme.SPACINGS.SMALL}
            ${({ theme }) => theme.SPACINGS.MEDIUM};
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_SMALL} {
        width: 100%;
        padding: ${({ theme }) => theme.SPACINGS.XSMALL}
            ${({ theme }) => theme.SPACINGS.SMALL};
    }
`;

export const ContentSettings = styled.div`
    right: 0;
    top: 0;
    position: absolute;
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
    @media ${({ theme }) => theme.MEDIAS.LTE_LARGE} {
        width: 100%;
        padding: ${({ theme }) => theme.SPACINGS.MEDIUM}
            ${({ theme }) => theme.SPACINGS.LARGE};
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_MEDIUM} {
        width: 100%;
        padding: ${({ theme }) => theme.SPACINGS.SMALL}
            ${({ theme }) => theme.SPACINGS.MEDIUM};
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_SMALL} {
        width: 100%;
        padding: ${({ theme }) => theme.SPACINGS.XSMALL}
            ${({ theme }) => theme.SPACINGS.SMALL};
    }
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
    @media ${({ theme }) => theme.MEDIAS.LTE_LARGE} {
        width: 100%;
        padding: ${({ theme }) => theme.SPACINGS.MEDIUM}
            ${({ theme }) => theme.SPACINGS.LARGE};
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_MEDIUM} {
        width: 100%;
        padding: ${({ theme }) => theme.SPACINGS.SMALL}
            ${({ theme }) => theme.SPACINGS.MEDIUM};
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_SMALL} {
        width: 100%;
        padding: ${({ theme }) => theme.SPACINGS.XSMALL}
            ${({ theme }) => theme.SPACINGS.SMALL};
    }
`;

export const WrapperProject = styled.div`
    margin-top: ${({ theme }) => theme.SPACINGS.LARGE};
`;

export const ContentFooter = styled.div`
    float: right;
    width: 73%;
    padding: ${({ theme }) => theme.SPACINGS.LARGE}
        ${({ theme }) => theme.SPACINGS.HUGE};
    height: 12vh;
    background-color: ${({ theme }) => theme.COLORS.BASE};
    @media ${({ theme }) => theme.MEDIAS.LTE_LARGE} {
        width: 100%;
        padding: ${({ theme }) => theme.SPACINGS.MEDIUM}
            ${({ theme }) => theme.SPACINGS.LARGE};
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_MEDIUM} {
        width: 100%;
        padding: ${({ theme }) => theme.SPACINGS.SMALL}
            ${({ theme }) => theme.SPACINGS.MEDIUM};
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_SMALL} {
        width: 100%;
        padding: ${({ theme }) => theme.SPACINGS.XSMALL}
            ${({ theme }) => theme.SPACINGS.SMALL};
    }
`;

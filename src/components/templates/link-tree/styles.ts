import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

export const Content = styled.div`
    position: relative;
    height: 100vh;
    width: 30%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.SPACINGS.LARGE};
    justify-content: space-around;
    box-shadow: 0px 0px 40px 0px #000000;

    @media ${({ theme }) => theme.MEDIAS.LTE_LARGE} {
        width: 74%;
    }
    @media ${({ theme }) => theme.MEDIAS.LTE_MEDIUM} {
        width: 100%;
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_SMALL} {
        width: 100%;
    }
`;

export const SelectIdiomaContent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;

export const ContentLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
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
    justify-content: space-evenly;
    margin: ${({ theme }) => theme.SPACINGS.SMALL} 0;
`;

export const ToogleContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContentNav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.SPACINGS.SMALL};
`;

export const FooterContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

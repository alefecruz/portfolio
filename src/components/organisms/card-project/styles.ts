import styled from 'styled-components';

export const CardComponent = styled.div`
    display: flex;
    border-style: solid;
    border-color: ${({ theme }) => theme.COLORS.SECONDARY};
    border-width: 6px;
    padding: ${({ theme }) => theme.SPACINGS.LARGE};
    margin: ${({ theme }) => theme.SPACINGS.MEDIUM};

    transform: rotateY(-15deg) rotateX(25deg) translateZ(4.5rem);
    transform-origin: 100% 100%;
    transform-style: preserve-3d;
    box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.5);
    transition: 0.3s ease transform;
    background-color: ${({ theme }) => theme.COLORS.ACCENTED};

    &:hover {
        transform: scale(1);
    }

    &::before {
        transform: translateZ(4rem);
        &:hover {
            transform: rotateY(0) rotateX(0) translateZ(1px);
        }
    }

    &::after {
        transform: translateZ(-4rem);
        &:hover {
            transform: rotateY(15deg) rotateX(-25deg) translateZ(-1px);
        }
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_XLARGE} {
        flex-direction: column;
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_LARGE} {
        flex-direction: column;
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_MEDIUM} {
        flex-direction: column;
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_SMALL} {
        flex-direction: column;
    }
`;

export const ContentLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const ContentRight = styled.div`
    max-width: 50%;
    display: flex;
    flex-direction: column;
    margin: ${({ theme }) => theme.SPACINGS.SMALL};
    gap: ${({ theme }) => theme.SPACINGS.SMALL};
    justify-content: space-between;

    @media ${({ theme }) => theme.MEDIAS.LTE_XLARGE} {
        max-width: 100%;
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_LARGE} {
        max-width: 100%;
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_MEDIUM} {
        max-width: 100%;
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_SMALL} {
        max-width: 100%;
    }
`;

export const ContentTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerTag = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ContentLink = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;

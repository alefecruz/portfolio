import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    border: 6px solid ${({ theme }) => theme.COLORS.SECONDARY};
    padding: ${({ theme }) => theme.SPACINGS.SMALL};
    margin: ${({ theme }) => theme.SPACINGS.SMALL};
    background-color: ${({ theme }) => theme.COLORS.ACCENTED};
    justify-content: space-between;

    transform: rotateY(-15deg) rotateX(25deg) translateZ(4.5rem);
    transform-origin: 100% 100%;
    transform-style: preserve-3d;
    box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.5);
    transition: 0.3s ease transform;

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

    @media ${({ theme }) => theme.MEDIAS.LTE_MEDIUM} {
        flex-direction: column;
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_SMALL} {
        flex-direction: column;
    }
`;

export const ContentLeft = styled.div`
    min-width: ${({ theme }) => theme.SIZES.XXHUGE};
    margin-right: ${({ theme }) => theme.SPACINGS.SMALL};
`;

export const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ContentSubtitle = styled.div`
    margin-top: ${({ theme }) => theme.SPACINGS.XXSMALL};
`;
export const ContentDescription = styled.div`
    margin: ${({ theme }) => theme.SPACINGS.SMALL} 0;
`;

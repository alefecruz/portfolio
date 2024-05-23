import styled from 'styled-components';

export const Container = styled.div`
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
`;

export const ContentLeft = styled.div`
    display: flex;
    align-items: center;
    margin-right: ${({ theme }) => theme.SPACINGS.SMALL};
`;
export const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: ${({ theme }) => theme.SPACINGS.SMALL};
    gap: ${({ theme }) => theme.SPACINGS.SMALL};
    justify-content: space-between;
`;

export const ContentTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const ContentTag = styled.div`
    display: flex;
`;

import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY};
    border: 6px solid ${({ theme }) => theme.COLORS.ACCENTED};
    padding: ${({ theme }) => theme.SPACINGS.LARGE};
    margin: ${({ theme }) => theme.SPACINGS.MEDIUM};
`;

export const ContentLeft = styled.div`
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

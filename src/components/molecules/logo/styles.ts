import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const ContentLogoInfo = styled.div``;

export const Title = styled.h1`
    font-family: 'Mina-Bold';
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.ACCENTED};
`;

export const Description = styled.p`
    font-family: 'Mina-Regular';
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.ACCENTED};
`;

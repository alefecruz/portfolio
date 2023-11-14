import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    border: 6px solid ${({ theme }) => theme.COLORS.PRIMARY};
    padding: ${({ theme }) => theme.SPACINGS.MEDIUM};
    margin: ${({ theme }) => theme.SPACINGS.MEDIUM};
    background-color: ${({ theme }) => theme.COLORS.LIGHT};
`;

export const ContentLeft = styled.div`
    min-width: ${({ theme }) => theme.SIZES.XXHUGE};
    margin-right: ${({ theme }) => theme.SPACINGS.SMALL};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContentIcon = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`;

export const ContentRight = styled.div``;

export const ContentSubtitle = styled.div`
    margin-top: ${({ theme }) => theme.SPACINGS.XXSMALL};
`;
export const ContentDescription = styled.div`
    margin: ${({ theme }) => theme.SPACINGS.SMALL} 0;
`;

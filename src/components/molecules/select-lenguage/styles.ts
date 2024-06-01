import styled from 'styled-components';

export const Container = styled.button`
    border: 5px solid ${({ theme }) => theme.COLORS.ACCENTED};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem;
    cursor: pointer;
    position: relative;
    column-gap: 24px;
`;
export const ContentOptions = styled.div`
    width: 100%;
    left: 0;
    top: 48px;
    position: absolute;
    border: 5px solid ${({ theme }) => theme.COLORS.ACCENTED};
`;

export const SelectFlag = styled.button`
    width: 100%;
    padding: 1.2rem 2rem;

    cursor: pointer;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.LIGHT};
    &:hover {
        background-color: ${({ theme }) => theme.COLORS.TERNARY};
    }
`;

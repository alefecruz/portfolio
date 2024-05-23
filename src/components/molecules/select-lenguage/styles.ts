import styled from 'styled-components';

export const Container = styled.div`
    padding: 1rem;
    margin-top: 4rem;
    position: relative;
`;
export const SelectedFlag = styled.div``;
export const SelectFlag = styled.div`
    border: 4px solid #000000;
    padding: 1rem;
    position: absolute;
    &:hover {
        background-color: ${({ theme }) => theme.COLORS.TERNARY};
    }
`;

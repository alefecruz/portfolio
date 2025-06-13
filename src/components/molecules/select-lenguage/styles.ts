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
    background-color: ${({ theme }) => theme.COLORS.BASE};
    box-shadow: 0 0 10px -5px #000000;

    @media ${({ theme }) => theme.MEDIAS.LTE_SMALL} {
        flex-direction: column;
        width: 50px;
    }
`;

export const Flag = styled.div`
    margin-top: 5px;
`;

export const ContentOptions = styled.div`
    width: 100%;
    left: 0;
    top: 48px;
    position: absolute;
    box-shadow: 0 0 10px -5px #000000;

    border: 5px solid ${({ theme }) => theme.COLORS.ACCENTED};

    @media ${({ theme }) => theme.MEDIAS.LTE_SMALL} {
        width: 50px;
        left: -5px;
        top: 90px;
    }
`;

export const SelectFlag = styled.button<{ isHideLanguageText: boolean }>`
    width: 100%;
    padding: 1.2rem 2rem;

    cursor: pointer;
    border: none;
    display: flex;
    justify-content: ${({ isHideLanguageText }) =>
        isHideLanguageText ? 'center' : 'space-between'};
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BASE};

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    }

    @media ${({ theme }) => theme.MEDIAS.LTE_SMALL} {
        padding: 10px;
    }
`;

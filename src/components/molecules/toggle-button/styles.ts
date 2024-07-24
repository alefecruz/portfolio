import styled, { css } from 'styled-components';
import { IToggleButtonProps } from './interfaces';

export const Container = styled.div`
    position: relative;
    width: 40px;
    height: 30px;
    display: flex;
    align-items: center;
`;

export const Slider = styled.div`
    width: 40px;
    height: 15px;
    background-color: ${({ theme }) => theme.COLORS.BASE};
    border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY};
    border-radius: 20px;
`;

export const Toggle = styled.button<{ toggleValue: boolean }>`
    cursor: pointer;
    position: absolute;
    ${({ toggleValue }) =>
        toggleValue
            ? css`
                  transform: translateX(18px);
              `
            : css`
                  transform: translateX(-5px);
              `}
    transition: .4s;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, toggleValue }) =>
        toggleValue ? theme.COLORS.SECONDARY : theme.COLORS.ACCENTED};
    border: 1px solid ${({ theme }) => theme.COLORS.BASE};
    border-radius: 100%;
    border: none;
`;

export const IconContent = styled.div``;

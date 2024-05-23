import styled from 'styled-components';
import { Icon } from '@/components/atoms/icon';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;

    justify-content: center;
    align-items: center;
`;

export const LoadingIcon = styled(Icon)`
    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }

    @-webkit-keyframes rotation {
        from {
            -webkit-transform: rotate(0deg);
        }
        to {
            -webkit-transform: rotate(359deg);
        }
    }

    animation: rotation 3s infinite linear;
`;

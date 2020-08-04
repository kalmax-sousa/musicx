import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: var(--gray);
    border-radius: 8px;
    margin: 0 auto 16px;
    padding: 16px;
    width: 80%;
    border: 2px solid var(--primary);

    @media (max-width: 800px){
        width: 100%;
    }
`;

export const AreaButton = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export const ButtonLink = styled(Link)`
    display: block;
    font-size: 20px;
    margin: 0 auto 16px;
    text-align: center;
    text-decoration: none;
    transition: all .3s;

    &:hover,
    &:focus{
        text-decoration: underline;
        color: var(--purpleDark);
    }
`;

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    @media (max-width: 800px){
        flex-direction: column;
        justify-content: center;
    }
`;

export const ContainerForm = styled.div`
    @media (max-width: 800px){
        width: 100%;
    }
`;

export const AreaButton = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export const ContainerTable = styled.div`
    width: 65%;

    table{
        background-color: var(--gray);
        border-radius: 5px;
        text-align: center;
        width: 100%;

        @media (max-width: 800px){
            width: 100%;
        }
    }

    th{
        color: var(--purpleDark);
        padding: 9px;

        @media (max-width: 800px){
            padding: 5px
        }   
    }
    
    td{
        padding: 9px;

        @media (max-width: 800px){
            padding: 5px
        }                
    }

    @media (max-width: 800px){
        width: 100%;
    }
`;

export const Name = styled.td`
    font-size: 22px;
    font-weight: bold;

    @media (max-width: 800px){
        font-size: 16px;
    }
`;

export const Description = styled.td`
    color: var(--grayMedium);
    font-style: italic;
    text-align: left;
`;

export const Color = styled.td`
    div{
        align-items: center;
        border-radius: 50%;
        display: inline-flex;
        height: 16px;
        justify-content: center;
        margin: 0;
        padding: 0;
        width: 16px;
    }
`;

export const Edit = styled(Link)`
    font-size: 24px;

    svg{
        color: var(--primary);
    }
`;

export const ButtonDelete = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 24px;
    height: 40px;
    outline: none;
    padding: 0;
    width: 40px;

    svg{
        align-items: center;
        color: red;
        display: flex;
        justify-content:center;
    }
`;

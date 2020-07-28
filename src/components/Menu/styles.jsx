import styled from 'styled-components';

export const Container = styled.body`
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);

    @media (max-width: 800px) {
        --bodyPaddingTop: 40px;
        padding-top: var(--bodyPaddingTop);
    }
`;

export const LogoTag = styled.img`
    max-width: 168px;

    @media (max-width: 800px) {
      max-width: 105px;
    }
`;

export const  Navegation = styled.nav`
    width: 100%;
    height: 94px;
    z-index: 100;
  
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;
  
    background: var(--gray);
    border-bottom: 2px solid var(--primary);

    >img{
      width: 70px;
    }
    
    @media (max-width: 800px) {
      height: 40px;
      justify-content: center;

      >img{
        width: 40px;
      }
    }
`;

export const Button = styled.button`
    color: var(--white);
    border: 1px solid #C97EF4;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
      opacity: .5;
    }
    
    @media (max-width: 800px) {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 0;
      text-align: center;
    }
`;
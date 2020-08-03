import styled from 'styled-components';

export const Container = styled.div`
  
  padding-top: 94px;

  @media (max-width: 800px) {
      padding-top: 40px;
    }
`;

export const LogoImage = styled.img`
    max-width: 168px;

    @media (max-width: 800px) {
      max-width: 105px;
    }
`;

export const Navegation = styled.nav`
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
    border: 1px solid #C97EF4;
    border-radius: 5px;
    box-sizing: border-box;
    color: var(--white);
    cursor: pointer;
    display: inline-flex;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    justify-content: center;
    outline: none;
    padding: 16px 24px;
    text-decoration: none;
    transition: opacity .3s;

    &:hover,
    &:focus {
      opacity: .5;
    }

    svg {
      color: var(--white);
      font-size: 18px;    
      margin-right: 3px;
    }
    
    @media (max-width: 800px) {
      background: var(--primary);
      border: 0;
      border-radius: 0;
      bottom: 0;
      left: 0;
      position: fixed;
      right: 0;
      text-align: center;
    }
`;

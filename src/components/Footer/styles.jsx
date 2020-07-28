import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--gray);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;

    > a{
      text-decoration: none;
      font-size: 25px;
    }

    hr{
      width: 38%;
      
    }

    p{
      margin: 5px 0 16px
    }

    img {
      width: 55px;
    }
    
  
  @media (max-width: 800px) {
    margin-bottom: 50px;
    
    >a{
      font-size: 18px
    }
  }
`;

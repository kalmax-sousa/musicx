import styled from 'styled-components';

const FooterBase = styled.footer`
  background: var(--gray);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  color: var(--white);
  text-align: center;

    > a{
      text-decoration: none;
      font-size: 20px;
    }

    a{
      color: var(--purpleDark)
    }

    hr{
      width: 38%;
      
    }

    p{
      margin: 5px 0;
    }

  @media (max-width: 800px) {
    margin-bottom: 50px;
    
    >a{
      font-size: 16px;
    }
  }
`;

export default FooterBase;

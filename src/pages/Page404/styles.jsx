import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const spin = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Elements = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h3{
        margin-top: 0;
    }

    img{
        width: 420px;
        animation: ${spin} 2s linear infinite;
        margin-bottom: 32px;

        @media(max-width: 800px){
            width: 200px;
        }
    }

    a{
        color: var(--white);
        border-radius: 8px;
        padding: 14px;
        background: var(--purpleDark);
        margin-right: 0;
        margin-bottom: 40px;
        transition: .3s;

        &:hover,
        &:focus{
            background-color: ${shade(0.2, '#C97EF4')};
        }
    }
    
`;

export default Elements;

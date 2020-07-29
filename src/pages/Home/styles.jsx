import styled, {keyframes} from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
    background: #141414;
    animation: ${appearFromLeft} 1s;
`;
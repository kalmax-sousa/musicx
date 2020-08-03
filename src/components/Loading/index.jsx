import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const LoadingItem = styled.div`
  animation: ${spin} 2s linear infinite;
  border: 16px solid var(--blackLighter);
  border-top: 16px solid var(--primary); 
  border-radius: 50%;
  height: 120px;
  margin: 35px auto;
  width: 120px;
`;

function Loading() {
  return (
    <LoadingItem />
  );
}

export default Loading;

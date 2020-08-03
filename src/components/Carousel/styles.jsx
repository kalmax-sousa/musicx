import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 1;
  margin-bottom: 0;
  display: inline-block;
  padding: 12px;
  background: red;
  line-height: 1;
  border-radius: 50px;

  @media (max-width: 800px) {
    font-size: 18px;
    margin-bottom: 9px;
    padding: 10px;
  }
`;

export const Description = styled.span`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  
  @media (max-width: 800px) {
    display: block;
    margin-left: 5px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;

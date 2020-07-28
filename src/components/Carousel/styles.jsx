import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.span`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  &::-webkit-scrollbar{
    height: 8px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: var(--primary); 
    border-radius: 7px;
  }
  &::-webkit-scrollbar-track{
    background-color: #000000;
    border-radius: 7px;
  }

  li {
    margin-right: 16px;
  }

  @media (max-width: 800px) {
    &::-webkit-scrollbar{
    height: 1px;
  }
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;

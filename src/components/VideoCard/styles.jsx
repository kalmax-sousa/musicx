import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  margin: 20px 0px;
  

  transition: opacity .3s, transform .6s;
  
  &:hover
   {
    opacity: .8;
    transform: scale(1.09);

    >a{
      display: inline;
    }
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const Title = styled.a`
  width: 100vw;
  padding: 14px;
  color: var(--white);
  display: none;
  position: absolute;
  transition: .3s;

  @media (max-width: 800px){
    display: inline;
  }
`;

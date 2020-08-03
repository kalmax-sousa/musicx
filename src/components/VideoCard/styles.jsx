import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
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
  position: relative;
  display: flex;
  align-items: flex-end;
  margin: 20px 0px;
  transition: opacity .3s, transform .6s;
  
  &:hover
   {
    opacity: .8;
    transform: scale(1.09);

    >p{
      display: inline;
    }
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const Title = styled.p`
  margin: 0;
  box-sizing: border-box;
  width: 298px;
  padding: 14px;
  color: var(--white);
  display: none;
  position: absolute;
  bottom: 0;
  transition: .3s;

  @media (max-width: 800px){
    display: inline;
  }
`;

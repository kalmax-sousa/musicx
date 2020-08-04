import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const LinkHome = styled(Link)`
    align-items: center;
    color: var(--purpleDark);
    display: inline-flex;
    font-size: 18px;
    text-decoration: none;

    svg{
        margin-right: 6px;
    }
`;

function GoHome() {
  return (
    <LinkHome to="/">
      <FiArrowLeft />
      Voltar para Home
    </LinkHome>
  );
}

export default GoHome;

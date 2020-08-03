import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { shade } from 'polished';

const ButtonStyle = styled.button`
    background: var(--purpleDark);
    border: 0;
    border-radius: 5px;
    color: var(--white);
    cursor: pointer;
    font-style: Roboto;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
    outline: none;
    padding: 16px 24px;
    text-decoration: none;
    transition: .3s;

    &:hover,
    &:focus {
      background-color: ${shade(0.2, '#C97EF4')};
    }
`;

function ButtonForm({ children }) {
  return (
    <ButtonStyle type="submit">
      {children}
    </ButtonStyle>
  );
}

ButtonForm.propTypes = {
  children: PropTypes.string.isRequired,
};
export default ButtonForm;

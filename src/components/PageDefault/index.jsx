import React from 'react';
// import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';
import Main from './styles';

function PageDefault({ children, paddingAll }) {
  return (

    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>

  );
}

// PageDefault.defaultProps = {
// paddingAll: 5,
// };

// PageDefault.propTypes = {
// children: PropTypes.array.isRequired,
// paddingAll: PropTypes.number,
// };

export default PageDefault;

import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import GlobalStyles from '../../styles/global';
import {Main} from './styles'

function PageDefault({children}) {
    return(

        <>
            <Menu />
                <Main>
                    {children}
                </Main>
            <Footer />
            <GlobalStyles />
        </>

    );
}

export default PageDefault;
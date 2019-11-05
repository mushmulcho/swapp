import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import './fonts/SWFont.css';

import { themes } from './Themes';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';
import { ThemeProvider } from 'emotion-theming';
import Home from './Home';

const App = () => {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <ThemeProvider theme={themes}>
                    <Home />
                </ThemeProvider>
            </BrowserRouter>
        </ApolloProvider>
    );
};

export default App;
